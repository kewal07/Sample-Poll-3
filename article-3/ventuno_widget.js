/*! vtn_widget - v2.0.13 - 2016-09-12
 * http://www.ventunotech.com
 * Copyright (c) 2016 ventuno; Licensed UNLICENSED */


/*
 __   ________  __   __  ______ __  __  __   __  ______
/\ \ / /\  ___\/\ "-.\ \/\__  _/\ \/\ \/\ "-.\ \/\  __ \
\ \ \'/\ \  __\\ \ \-.  \/_/\ \\ \ \_\ \ \ \-.  \ \ \/\ \
 \ \__| \ \_____\ \_\\"\_\ \ \_\\ \_____\ \_\\"\_\ \_____\
  \/_/   \/_____/\/_/ \/_/  \/_/ \/_____/\/_/ \/_/\/_____/

((((((((((((((INDIA'S LEADING VIDEO ECOSYSTEM))))))))))))))

*/


//__vtnWO
var __vtnWO = {
    wVer: "2.0.0.5",
    wo: {},
    wElement: 'vt_widget',
    plType: 'widget',
    wBlockWrds: 'from,when,where,while,among,against,across,during,including,between,since,and,the,for,will,only,first,every',
    maxKyWrds: 10,
    minLttrsPerKyWrd: 3,
    queryMeta: ""
},

__vtnPaths = {
    version: '2.0.13',
    web_ventuno: 'venweb-1646315273.us-west-2.elb.amazonaws.com',
    js_akami_host: 'http://lmaflv.edgesuite.net',
    js_cdn: 'http://lmaflv.edgesuite.net/static/js/widget/',
    img_akamai_host: 'http://lmaflv.edgesuite.net/public/widgets/images',
    logServerURL: 'http://venlog-1542946650.us-west-2.elb.amazonaws.com'
};

__vtnPaths.CDN_path = __vtnPaths.js_akami_host + '/public/';
__vtnPaths.vtnBeaconURL = __vtnPaths.logServerURL + '/plugins';
__vtnPaths.contentApiPlugin_path = "http://" + __vtnPaths.web_ventuno + "/newplatform/index.php/contentApi/getCodeForWidget";
__vtnPaths.vtClickTrack = __vtnPaths.logServerURL + "/plugins/beacon";

/**
* __vtnWU - Ventuno Widget Utility
*  Utility functions
*/

if( typeof __vtnWU == "undefined" ){
    var __vtnWU = {
        //note:::does a shallow copy only. Do not use for cloning
        combineObjs: function(_a, _b){
            var i;
            for( i in _b ){
                _a[i] = _b[i];
            };
            return _a;
        },

        /**
        * returns a session like id
        * @param {String} _added
        */
        generateUUID: function( _added ) {
            var d = new Date().getTime(),
                uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g , function( _c ){
                    var r = ( d + Math.random() * 16 ) % 16 | 0;
                    d = Math.floor( d / 16 );
                    return ( _c == 'x' ? r : ( r & 0x7|0x8 ) ).toString( 16 );
                });

            uuid += ( '-' + _added );
            return uuid;
        },

        /**
        * View helper
        * @param {String} _type - message
        * @param {String} _pID - pubilsher id
        * @param {String} _wID - widget id
        * @param {String} _sesID - session id
        */
        getLBI: function( _type,_pID,_wID,_sesID ){
            var burl = __vtnPaths.vtnBeaconURL + "/beacon.gif",
                pid = encodeURIComponent( _pID ),
                slotID = encodeURIComponent( _wID ),
                sID = _sesID;
            return burl += '?type=widget;status=' + _type + ';pid=' + pid + ';slotid=' + slotID + ';sid=' + sID;
        },

        /**
        * Returns a refernce to the div element
        * @param {String} _obj - id of the div
        */
        $OBJ: function( _obj ){
            var elmnt;
            if( document.getElementById ){
                elmnt = document.getElementById( _obj );
                if( elmnt != null ){
                   return elmnt
                }else{
                    return "";
                };
            }else if( document.all ){
                elmnt = document.all[_obj];
                if( elmnt != null ){
                    return elmnt
                }else{
                    return "";
                };
            };
            return "";
        },

        /**
        * View helper - sets the div with a resource
        * @param {String} _pID - pubilsher id
        * @param {String} _wID - widget id
        * @param {String} _sesID - session id
        */
        getLoading: function( _pID, _wID, _sesID ){
            return "<div class='vt_loading'><img src='" + __vtnWU.getLBI( 'beacon', _pID, _wID, _sesID ) + "' width='48px' height='48px'/></div>";
        },

        /**
        * Helper function to get the keywords from title and meta tags
        */
        getQueryMeta: function(){
            var r = 'title==' + __vtnWU.getKWFrmTtl() + '||meta==' + __vtnWU.getKWFrmMetaKW();

            if( typeof vt_custom_keyword != "undefined" && vt_custom_keyword ){
                r += '||custom==' + vt_custom_keyword;
            } else {
                r += '||custom==DB';
            };
            return r;
        },

        /**
        * Helper for getQueryMeta
        */
        getKWFrmMetaKW: function(){
            var metaKeywords = '',
                metaNewKeywords = '',
                metas = __vtnWU.parentDoc.getElementsByTagName( 'meta' ),
                i,
                len;

            if( metas ){
                len = metas.length;
                for ( i=0; i < len; i++ ) {
                    if ( metas[i].name.toLowerCase() == "keywords" || metas[i].getAttribute( 'http-equiv' ) && metas[i].getAttribute( 'http-equiv' ).toLowerCase() == "keywords" ){
                        metaKeywords += metas[i].content;
                    }else if( metas[i].name.toLowerCase() == "news_keywords" || metas[i].getAttribute( 'http-equiv' ) && metas[i].getAttribute( 'http-equiv' ).toLowerCase() == "news_keywords" ){
                       metaNewKeywords += metas[i].content;
                    };
                }
            }
            if( metaKeywords!='' ){
                metaKeywords = __vtnWU.splitNGetKW(metaKeywords, 'meta');
            }else{
                metaKeywords = __vtnWU.splitNGetKW(metaNewKeywords, 'meta');
            };
            return metaKeywords != '' ? metaKeywords : 'all';
        },

        /**
        * Helper for getQueryMeta
        */
        getKWFrmTtl: function(){
            var titleKeywords = __vtnWU.parentDoc.title;
            if( titleKeywords != '' ){
               titleKeywords = __vtnWU.splitNGetKW( titleKeywords, 'title' );
            }
            return titleKeywords != '' ? titleKeywords : 'all';
        },

        /**
        * Helper for getKWFrmTtl
        * @param {String} __str
        * @param {String} __title
        */
        splitNGetKW: function( _str, _type ){
            var tempkeys = '',
                temkeyscount = 0,
                cnt,
                i,
                c_str,
                character;

            _str = __vtnWU.trimStrim( _str );                     // Remove starting and trailing spaces
            _str = _str.replace( /[^a-zA-Z, ]+/g, '' );           //Remove all Special chars except [, ]
            _str = _str.replace( / +(?= )/g, '' );                //Replace multiple whitespaces into single white space.
            _str = _str.replace( /, /g, ',' );                    //Remove all [, ] to [,]

            if( _type == 'title' ){
                _str = _str.replace( / /g, ',' );
            };
            _str = _str.split( "," );
            cnt = _str.length;

            for( i=0; i < cnt; i++ ){
                if( temkeyscount >= __vtnWO.maxKyWrds ){
                    break;
                }
                c_str = _str[i];
                character = c_str.charAt( 0 );
                if( _type == 'title' && c_str.length > __vtnWO.minLttrsPerKyWrd && __vtnWO.wBlockWrds.indexOf( c_str ) === -1 && character === character.toUpperCase() ){
                    tempkeys += c_str + ",";
                    temkeyscount++;
                }else if( c_str.length > __vtnWO.minLttrsPerKyWrd && __vtnWO.wBlockWrds.indexOf( c_str ) === -1 ){
                    tempkeys += c_str + ",";
                    temkeyscount++;
                }
            };

            if( tempkeys != '' ){
                tempkeys = tempkeys.substring( 0, tempkeys.length - 1 );
            };
            return tempkeys;
        },

        /**
        * Helper for splitNGetKW
        * @param {String} __str
        */
        trimStrim: function( _str ){
            var i;
            _str = _str.replace( /^\s+/, '' );
            for ( i = _str.length - 1; i >= 0; i-- ){
                if ( /\S/.test( _str.charAt( i ) ) ) {
                    _str = _str.substring( 0, i + 1 );
                    break;
                }
            }
            return _str;
        },

        /**
        * Inserts JS code specified in _src to _id
        * @param {String} _id
        * @param {String} _src
        */
        insertJS: function( _id, _src ) {
            var vt_headID = document.getElementsByTagName( "head" )[0],
                vt_newScript = document.createElement( 'script' );

            vt_newScript.id = _id;
            vt_newScript.src = _src;
            vt_headID.appendChild( vt_newScript );
        },

        /**
        * Creates a new div element
        * @param {String} _divIdName - id of div
        */
        createDiv: function( _divIdName ) {
            var vt_newdiv = document.createElement( 'div' );
            vt_newdiv.setAttribute( 'id', _divIdName );
            document.body.appendChild( vt_newdiv );
        },

        domReady: {
            add: function( _fn ){
                var observers,
                    i,
                    length,
                    fn,
                    ie = !!( window.attachEvent && !window.opera ),
                    webkit = navigator.userAgent.indexOf( 'AppleWebKit/' ) > -1,
                    state,
                    src;

                if ( __vtnWU.domReady.loaded ){
                    return _fn();
                };

                observers = __vtnWU.domReady.observers;
                if ( !observers ){
                    observers = __vtnWU.domReady.observers = [];
                };
                observers[observers.length] = _fn;
                if ( __vtnWU.domReady.callback ){
                    return;
                };

                __vtnWU.domReady.callback = function(){
                    if ( __vtnWU.domReady.loaded ){
                        return;
                    };
                    __vtnWU.domReady.loaded = true;
                    if ( __vtnWU.domReady.timer ){
                        clearInterval( __vtnWU.domReady.timer );
                        __vtnWU.domReady.timer = null;
                    };

                    observers = __vtnWU.domReady.observers;
                    length = observers.length;
                    for ( i = 0; i < length; i++ ){
                            fn = observers[i];
                            observers[i] = null;
                            fn(); // make 'this' as window
                    };
                    __vtnWU.domReady.callback = __vtnWU.domReady.observers = null;
                };


                if ( document.readyState && webkit ) {
                    __vtnWU.domReady.timer = setInterval( function(){
                        state = document.readyState;
                        if( state == 'loaded' || state == 'complete' ){
                            __vtnWU.domReady.callback();
                        };
                    }, 50 );
                }else if( document.readyState && ie ){
                   src = ( window.location.protocol == 'https:' ) ? '://0' : 'javascript:void(0)';
                   document.write(
                       '<script type="text/javascript" defer="defer" src="' + src + '" ' +
                       'onreadystatechange="if (this.readyState == \'complete\') __vtnWU.domReady.callback();"' +
                       '><\/script>');
                }else{
                    if( window.addEventListener ){
                        document.addEventListener( "DOMContentLoaded", __vtnWU.domReady.callback, false );
                        window.addEventListener( "load", __vtnWU.domReady.callback, false );
                    }else if( window.attachEvent ){
                        window.attachEvent( 'onload', __vtnWU.domReady.callback );
                    }else{
                        fn = window.onload;
                        window.onload = function(){
                            __vtnWU.domReady.callback();
                            if ( fn ){
                                fn();
                            };
                        };
                    };
                };
            }
        },

        /*
        * Gets an image resource and sets it to an image tag
        * @param {String} _type - message
        * @param {String} _pID - pubilsher id
        * @param {String} _wID - widget id
        * @param {String} _sesID - session id
        */
        beaconCall: function(_type, _pID, _wID, _sesID){
            var i,
                call;
            i = new Image( 1, 1 );
            call = __vtnWU.getLBI(_type, _pID, _wID, _sesID);
            i.src = call;
            return false;
            
        },

        ua: (( function(){ //ie sniffer
            var r = {};
            r['ie'] = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
            ( r['ie'] ) ? r['ie_ver'] = new Number( RegExp.$1 ) : r['ie_ver'] = 0;
            return r;
        })()),

        parentDoc: (( function(){
            var pd;
            try{
                pd = window.top.document;
            } catch( err ){
                pd = document;
            };
            return pd;
        })())
    };
}
// __vtnWU - ends



__vtnWO.queryMeta = __vtnWU.getQueryMeta();

/**
* Creates a VTNWidgetClass instance
* @param {String} _name - name of the instance
* @param {String} _pubId - publisher ID
* @param {String} _slotID - Slot ID
* @param {Object} _element - Reference to the div
* @param {String} _sesID - Session ID (uuid)
*/
var __VTNWidgetClass = function( _name, _pubID, _slotID, _element, _sesID ){
    this.name = _name;
    this.sesID = _sesID;
    this.widgetCode = _slotID;
    this.publisherCode = _pubID;
    this.holder = '';
    this.wID = _element;
    this.wElement = "";
    this.getMeta();
    this.createTrackers();
    this.checkDiv();
    this.loadData();
};

/**
* generates keywords
*/
__VTNWidgetClass.prototype = {

    getMeta: function(){
        this.wCategory = 'init';
        this.queryMeta = __vtnWO.queryMeta;
        if( this.widgetCode == 'blend' ){
            // Old Code
            this.wCategory = vt_widget_category;
            this.queryMeta = vt_widget_keywords;
        };
    },

   /**
   * Creates click and popup trackers
   */
    createTrackers: function(){
        this.vtClickTrack = __vtnPaths.vtClickTrack + '.php?type=widget;status=click;pid=' + this.publisherCode + ';slotid=' + this.widgetCode + ';sid=' + this.sesID;
        this.vtPopupTrack = __vtnPaths.vtClickTrack + '.gif?type=widget;status=popup;pid=' + this.publisherCode + ';slotid=' + this.widgetCode + ';sid=' + this.sesID;
    },

   /**
   * Checks if the set div is proper
   */
    checkDiv: function(){
      // Additional Check for the existence of <div>
        if( typeof this.wID  == 'string' ){
            if( __vtnWU.$OBJ( this.wID ) == "" ){
                if( __venWidgetDefault ){ // Default - false
                    return "";
                }
                __vtnWU.createDiv( this.wID );
            }
            this.wElement = __vtnWU.$OBJ( this.wID );
            __venWidgetCount++;
            this.wElement.id = "__vtnWO.wElement" + "_set" + __venWidgetCount;
            __venWidgetDefault = true;
        } else {
            this.wElement = this.wID;
        };
        this.wElement.innerHTML = __vtnWU.getLoading( this.publisherCode, this.widgetCode, this.sesID );
    },

   /**
   * Gets the result of the api call and calls vtnNeuvoBootup inside widget_neuvo
   * @param {Object} _ic
   */
    render: function( _ic ){
        var t = this;
        if ( String( _ic ['content'] ) == 'NoRec' || String( _ic['content'] ) == 'Err' ){
            __vtnWU.beaconCall( 'error', this.publisherCode, this.widgetCode, this.sesID );
            this.wElement.innerHTML = "";
        } else {
            __venWidgetData.push( { processed:false, wObj: {name: this.name, sesID: this.sesID, widgetCode: this.widgetCode, pubID: this.publisherCode, element: this.wElement, clickTrack: this.vtClickTrack, popupTrack: this.vtPopupTrack }, data: _ic } );
            if( typeof __vtnNeuvoBootup == "undefined" ){
                __vtnWU.insertJS('widget_view', __vtnPaths.js_cdn + __vtnPaths.version +'/widget_view.min.js?ver='+__vtnWO.wVer);
                //__vtnWU.insertJS('widget_view', __vtnPaths.js_akami_host+'/widget_view.min.js?ver='+__vtnWO.wVer);
                //__vtnWU.insertJS('widget_view', 'widget/widget_view.min.js?ver='+__vtnWO.wVer);
               // __vtnWU.insertJS('widget_view', 'http://staging.ventunotech.com/plugins/widgets/lib/widget_view.js');
            } else {
                __vtnNeuvoBootup();
            };
        };
    },

   /**
   * For re rendering (When a category is clicked)
   * @param {Object} _ic - json data
   */
    reRender: function( _ic ){
        // Wipe off the entire body
        var t = this;
        if ( String( _ic['content']) == 'NoRec' || String( _ic['content'] ) == 'Err' ){
            __vtnWU.beaconCall( 'error', this.publisherCode, this.widgetCode, this.sesID );
            this.wElement.innerHTML = "";
        }else{
            if(__venWidgetData){
                __venWidgetData = [];
            };
            __venWidgetData.push( {processed: false, wObj: {name: this.name, sesID: this.sesID, widgetCode: this.widgetCode, pubID: this.publisherCode, element: this.wElement, clickTrack: this.vtClickTrack, popupTrack: this.vtPopupTrack }, data: _ic } );
            if( typeof __vtnNeuvoBootup == "undefined"  ){
                __vtnWU.insertJS('widget_view', __vtnPaths.js_cdn + __vtnPaths.version +'/widget_view.min.js?ver='+__vtnWO.wVer);
                //__vtnWU.insertJS('widget_view', __vtnPaths.js_akami_host+'/widget_view.min.js?ver='+__vtnWO.wVer);
                //__vtnWU.insertJS('widget_view', 'widget/widget_view.min.js?ver='+__vtnWO.wVer);
                // __vtnWU.insertJS('widget_view', 'http://staging.ventunotech.com/plugins/widgets/lib/widget_view.js');
            } else {
                __vtnReBoot();
            };
        };
    },

   /**
   * Forms the contentApiPlugin path and makes an api call
   * Calls render() using the result obtained
   */
    loadData: function(){
      var url = __vtnPaths.contentApiPlugin_path + '/' + encodeURIComponent( this.publisherCode ) + '/' + this.widgetCode + '/' + encodeURIComponent( this.queryMeta ) + '/' + encodeURIComponent( this.wCategory ) + '/__vtnPWOs.' + this.name + '.render/';
      __vtnWU.insertJS( 'vt_load_result', url );
    }
};

// Globals
// __venWidgetData - used by widget_neuvo
if( typeof __vtnPWOs == "undefined" ){
   var __vtnPWOs = {};
};
if( typeof __venWidgetData == "undefined" ){
   var __venWidgetData = [];
};
if( typeof __venPublisherId == "undefined" ){
   var __venPublisherId = 0;
};
if( typeof __venWidgetCount == "undefined" ){
   var __venWidgetCount = 0;
};
if( typeof __venWidgetDefault == "undefined" ){
   var __venWidgetDefault = false;
};

/**
* Creates a VTNWidgetClass instance for every widget and sets them to __vtnPWOs
* @param {boolean} _oldcode
* @param {Array} _unPWO
*/
function __vtnObjectify( _oldcode, _unPWO ){
    var stamp = "",
        pid = 0,
        slotID = '0',
        rwObj,
        name = 'rwObj' + stamp,
        c_unPWO,
        len,
        i;

    if( _oldcode ){
      //check for old code
        if( ( typeof vt_widget_code != "undefined" && ( parseInt( vt_widget_code ) > 0 || vt_widget_code=='blend' ) ) && ( ( !__vtnWU.ua['ie'] || !(__vtnWU.ua['ie_ver'] < 7) ) ) ){
            stamp = (Math.random().toString()).replace(".","");

            if( __venPublisherId ){
                pid = __venPublisherId;
            } else if( typeof vt_publisher_code != "undefined" ){
                pid = __venPublisherId = encodeURIComponent( vt_publisher_code );
            };
            slotID = encodeURIComponent( vt_widget_code );
            if( pid && slotID ){
                rwObj = new __VTNWidgetClass( name, pid, slotID, __vtnWO.wElement, __vtnWU.generateUUID( pid ) );
                __vtnPWOs[name] = rwObj;
            };
        }
    } else{
        len = _unPWO.length;
        for( i = 0; i < len; i++ ){
            c_unPWO = _unPWO[i];
            stamp = ( Math.random().toString() ).replace( ".", "" );
            pid = c_unPWO['pid'];
            slotID = c_unPWO['slotID'];
            name = 'rwObj' + stamp;
            if( pid && slotID ){
                rwObj = new __VTNWidgetClass( name, pid, slotID, c_unPWO['holder'], __vtnWU.generateUUID( pid ) );
                __vtnPWOs[name] = rwObj;
            };
        };
    };
};

/**
* Checks if the p_id, w_c and holder_id are set
* If so, adds that object to tempWidget. Once all are added, calls __vtnObjectify
* @param {String} _inFrm
*/
function __vtnCheckWA( _inFrm ){
    var tempWidget = [],
        tempObj = {},
        widget_length,
        i,
        c_vtnWidget;

    if( typeof __ventunowidget !== "undefined" && __ventunowidget && __ventunowidget.length ){
        // __ventunowidget - array of objects - pc, wc and holder_id(div)
        widget_length = __ventunowidget.length;
        // Widgets are set
        for( i=0; i < widget_length; i++ ){
            c_vtnWidget = __ventunowidget[i];
            if( c_vtnWidget['flush'] ){
                __ventunowidget = [];
                __vtnObjectify( false, tempWidget );
            } else{
            // Flush not seen yet
                tempObj = {};
                if( __venPublisherId )
                    tempObj['pid'] = __venPublisherId;
                else if( c_vtnWidget['publisher_code'] )
                    tempObj['pid'] = __venPublisherId = c_vtnWidget['publisher_code'];
                if( c_vtnWidget['widget_code'] )
                    tempObj['slotID'] = c_vtnWidget['widget_code'];
                if( c_vtnWidget['holder_id'] && __vtnWU.$OBJ(c_vtnWidget['holder_id'] ) ){
                    tempObj['holder'] = __vtnWU.$OBJ(c_vtnWidget['holder_id']);
                    __venWidgetCount++;
                    tempObj['holder'].id = "vtnWO.wElement" + "_set" + __venWidgetCount;
                }
                if( tempObj['pid'] && tempObj['slotID'] && tempObj['holder'] )
                    tempWidget.push( tempObj );
            };
        };// End of for
    };
};

/**
* Starts the processing of widgets
* Calls __vtnCheckWA
*/
(function(){
    __vtnObjectify( true ); // OldCode
    __vtnCheckWA( 'inline' );
    __vtnWU.domReady.add( function(){
        __vtnCheckWA('domReady');
    } );
})();

/*
           _               _       _         _   _
          | |             (_)     (_)       | | | |
 __      _| |__  _   _     _  ___  _ _ __   | |_| |__   ___   _ __   __ ___   ___   _
 \ \ /\ / / '_ \| | | |   | |/ _ \| | '_ \  | __| '_ \ / _ \ | '_ \ / _` \ \ / / | | |
  \ V  V /| | | | |_| |   | | (_) | | | | | | |_| | | |  __/ | | | | (_| |\ V /| |_| |
   \_/\_/ |_| |_|\__, |   | |\___/|_|_| |_|  \__|_| |_|\___| |_| |_|\__,_| \_/  \__, |
                  __/ |  _/ |                                                    __/ |
                 |___/  |__/                                                    |___/
           _                                                        _                          _           _
          | |                                                      | |                        (_)         | |
 __      _| |__   ___ _ __    _   _  ___  _   _    ___ __ _ _ __   | |__   ___    __ _   _ __  _ _ __ __ _| |_ ___
 \ \ /\ / / '_ \ / _ \ '_ \  | | | |/ _ \| | | |  / __/ _` | '_ \  | '_ \ / _ \  / _` | | '_ \| | '__/ _` | __/ _ \
  \ V  V /| | | |  __/ | | | | |_| | (_) | |_| | | (_| (_| | | | | | |_) |  __/ | (_| | | |_) | | | | (_| | ||  __/
   \_/\_/ |_| |_|\___|_| |_|  \__, |\___/ \__,_|  \___\__,_|_| |_| |_.__/ \___|  \__,_| | .__/|_|_|  \__,_|\__\___|
                               __/ |                                                    | |
                              |___/                                                     |_|

Steve Jobs (1955 ~ 2011)
*/