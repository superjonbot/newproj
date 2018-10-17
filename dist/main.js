/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exports = module.exports = {};

var fetch = __webpack_require__(2);

var co = __webpack_require__(3);

var settings = {
  _endPoint: 'http://sandbox-cloudapi.imrworldwide.com/nmapi/v2/{{appid}}/{{sessionID}}/a?b=',

  /*, //https://cloudapi.imrworldwide.com/nmapi/v2/
  _appId: ins_brand('27BDDCBA-C8DF-4BA2-90DB-9C7FAE770A48'),*/
  _sessionID: Date.now() + String(Math.random() * 1000000 >> 0),
  _brands: ['aetv', 'history', 'lifetime', 'fyi']
  /*
  
  exports.hello = function() {
      return 'yo world'
  }
  
  */

};
_exports = {
  hello: function hello() {
    return 'yo world';
  }
  /*
  exports={
      uri:function(brand){return `https://feeds.video.aetnd.com/api/${brand}/videos?filter%5BvideoType%5D=Episode&filter%5BisBehindWall%5D=false&perpage=500`},
      hello : function() {
          return 'yo world'
      },
      hellofile : function(brand) {
          co(
              function *(){
                  const uri= exports.uri(brand);
                  const response = yield fetch(uri);
                  const post = yield response.json();
                  const results = yield post.results;
  
                  for(var a=0;a<results.length;a++){
                      console.log(`${brand} id: ${results[a].id}    ${results[a].seriesName}:${results[a].title} (S${results[a].tvSeasonNumber}:E${results[a].tvSeasonEpisodeNumber})`)
                  }
  
  
              }
          )
      }
  }
  
  
  
  
  
  
  for(let i=0;i<settings._brands.length;i++){
  
      console.log(exports.hellofile(settings._brands[i]));
  }
  
  */

  /*
  
  
  
  */

  /*
  
  
  
  let nielsen = {
      settings:{
          _endPoint: 'http://sandbox-cloudapi.imrworldwide.com/nmapi/v2/{{appid}}/{{sessionID}}/a?b=', //https://cloudapi.imrworldwide.com/nmapi/v2/
          _appId: ins_brand('27BDDCBA-C8DF-4BA2-90DB-9C7FAE770A48'),
          _sessionID: Date.now() + String(Math.random() * 1000000 >> 0)
      },
      playerLoading:()=>{
  
      nielsen.trackSessionStart();
  },
  initialize:()=>{
      // var parent=this;
      //   if(!atv.sessionStorage.getItem('_defaultPayload')){
      _c.trace('[app.src.js] [tracking:nielsen] initialized');
      //     atv.sessionStorage.setItem('_defaultPayload',parent._defaultPayload);
      //     atv.sessionStorage.setItem('_timelineTracking',[]);
      // }
  },
  timelineTrack:()=>{
      /!*                var parent=this;
              parent._defaultPayload = atv.sessionStorage.getItem('_defaultPayload');
  
              trace('setPayLoad received: '+JSON.stringify(options));
  
  
              if(typeof options.calc_position!='undefined'){
                  trace('options.calc_position received!: '+options.calc_position);
                  var timeNOADS= atv.sessionStorage.getItem('timeNOADS');
                  trace('setting position received '+timeNOADS[options.calc_position])
                  options.position=timeNOADS[options.calc_position];
                  options.calc_position=undefined;
  
              }
  
              if(typeof options.position=='undefined'){options.position=0}
              //options.note=undefined;  //uncomment to debug
              parent._defaultPayload = deepExtend(parent._defaultPayload, options)
  
  
              atv.sessionStorage.setItem('_defaultPayload',parent._defaultPayload);*!/
  },
  heartbeat:()=>{},
  
  content_Payload:()=>{
      return {
          "metadata": {
              "static": {}, // object for measuring static content
              "content": { // object for measuring video content
                  "type": "content", // "content" for video
                  "assetid": _c.getValueELSE(videoObj, 'feedData.id'), // unique ID for video
                  "isfullepisode": "y", // full episode flag
                  "program": _c.getValueELSE(videoObj, 'feedData.seriesName','Untitled'), // program name
                  "title": `${_c.getValueELSE(videoObj, 'feedData.title')} S${_c.getValueELSE(videoObj, 'feedData.tvSeasonNumber','0')} - EP${_c.getValueELSE(videoObj, 'feedData.tvSeasonEpisodeNumber','0')}`, // episode name
                  "length": _c.getValueELSE(videoObj, 'feedData.duration'), // content duration in seconds
                  "segB": "Custom Segment B", // custom segment
                  "segC": "Custom Segment C", // custom segment
                  "crossId1": _c.getValueELSE(videoObj, 'feedData.programId','Untitled'), // episode ID
                  //"crossId2": "Content Originator ID", // content orginator (required for distributors)
                  "airdate": _c.getValueELSE(videoObj, 'feedData.originalAirDate',undefined), // airdate
                  //"adloadtype": "2", //ad load flag
                  //"hasAds": "1", // content contains ads = 1 / no ads = 0
                  "progen": "GV" // program genre abbreviation
              }
          }
      }
  
  },
  page_Payload:()=>{   //page
      /!*
             let adSlotData = _c.getValue(aePlayer, 'e_vars.session.currentAdSlotDa;
  
      /!*       return {
                 "type": "static",
                 "assetid": _c.getValue(videoObj, 'id'),
                 "assetName": "Page-Asset",
                 "section": "videoplayer",
                 "segA": _c.getValue(videoObj, 'feedData.title')
             }*!/
      /!*  "segB": "segmentB",
          "segC": "segmentC"*!/
  
  },
  ad_Payload:()=>{   //ad
      let adSlotData = _c.getValue(aePlayer, 'e_vars.session.currentAdSlotData');
      //   "length": _c.getValue(adSlotData, 'duration'),
      return {
          "metadata": {
              "ad": {
                  "type": _c.getValue(adSlotData, 'podIndex')?"midroll":"preroll", // type of ad   //val.ad_break_position, // type of ad
                  "assetid": _c.getValue(adSlotData, 'adId') // unique ID for ad    // "assetid": val.ad_break_id // unique ID for ad
              }
          }
      }
  },
  stdPayload:()=>{
      return {
          "devInfo": {
              "devId": _c.getValueELSE(videoObj, 'sender.trackingData.origin_visitor_id'),
              "apn": ins_brand('path'),
              "apv": '1.0',
              "uoo": false
          },
          "metadata": {
              "static": {}, // object for measuring static content
              "content": {
                  "adloadtype": "2", //ad load flag
                  "hasAds": "1"//, // content contains ads = 1 / no ads = 0
              },
              "ad":{}
          }/!*,
              "event": undefined,
              "position": undefined,
              "type": undefined,
              "utc": undefined*!/
  
      }
  },
  evtPayload:()=>{
      return {
          "event": "playhead", //event name
          "position": aePlayer.e_vars.session.currentTime, // position in seconds
          "type": "content", //"content" or "ad"
          "utc": _c.getEpochdate() //unix timestamp in milliseconds
      }
  
  },
  
  track:(getEvent, options)=>{
      _c.trace('[app.src.js] [tracking:nielsen] track: ' + JSON.stringify(getEvent)+':'+JSON.stringify(options));
      /!*  switch (method) {
              case 'getEvent':
                  let time = parseFloat(message[1]);
                  bookmark(time);
                  break;
              case 'seek':
                  time = parseFloat(message[1]);
                  seek(time);
                  break;
              case 'snapback':
                  time = parseFloat(message[1]);
                  snapback(time);
                  break;
              case 'getContentTime':
                  const contentTime = getContentTime();
                  broadcast('contentTime,' + contentTime);
                  break;
              default:
                  broadcast('Message not recognized');
                  break;
          }*!/
      /!*
  
              var payload = nielsen.stdPayload(),
              payload = _c.deepExtend( payload, nielsen[getEvent+'_Payload']());
              payload = _c.deepExtend( payload, options);
  
              let _urlStructure= nielsen.settings._endPoint +'/'+ nielsen.settings._appId + '/' + nielsen.settings._sessionID + '/a?b=';
              let getUrl = _urlStructure+ encodeURI(JSON.stringify(payload));
  
              _c.readJSON(getUrl).then((xhr) => {
  
                  _c.trace('** Successfully sent Nielsen request **');
                  _c.trace('Nielsen SUCCESS :',xhr)
  
  
              }).catch((err) => {
  
                  _c.trace('** Error in Nielsen request **');
                  _c.trace('Nielsen ERROR :',err)
  
              })
      *!/
  
  
  
  },
  trackAdEvent: function(adType, adInfo, context) {
      _c.trace('[app.src.js] [tracking:nielsen] Ad: '+adType);
      switch (adType){
          case 'AdStart':
              _c.trace('[app.src.js] [tracking:nielsen] Start Ad');
              break;
          case 'AdComplete':
              _c.trace('[app.src.js] [tracking:nielsen] End Ad');
              break;
          default:
              _c.trace('[app.src.js] [tracking:nielsen] ERROR');
      }
  
  
  },
  // trackC function(chapterType, chapterInfo, context) {
  //     _c.trace('[app.src.js] [tracking] Nielsen Chapter: ' + chapterType);
  //     //chapter start/complete
  // },
  trackSessionStart:function() {
      _c.trace('[app.src.js] [tracking:nielsen] trackSessionStart');
  },
  trackSessionEnd: function() {
      _c.trace('[app.src.js] [tracking:nielsen] trackSessionEnd');
  }
  
  
  };
  */

};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = exports = self.fetch;

// Needed for TypeScript and Webpack.
exports.default = self.fetch.bind(self);

exports.Headers = self.Headers;
exports.Request = self.Request;
exports.Response = self.Response;


/***/ }),
/* 3 */
/***/ (function(module, exports) {


/**
 * slice() reference.
 */

var slice = Array.prototype.slice;

/**
 * Expose `co`.
 */

module.exports = co['default'] = co.co = co;

/**
 * Wrap the given generator `fn` into a
 * function that returns a promise.
 * This is a separate function so that
 * every `co()` call doesn't create a new,
 * unnecessary closure.
 *
 * @param {GeneratorFunction} fn
 * @return {Function}
 * @api public
 */

co.wrap = function (fn) {
  createPromise.__generatorFunction__ = fn;
  return createPromise;
  function createPromise() {
    return co.call(this, fn.apply(this, arguments));
  }
};

/**
 * Execute the generator function or a generator
 * and return a promise.
 *
 * @param {Function} fn
 * @return {Promise}
 * @api public
 */

function co(gen) {
  var ctx = this;
  var args = slice.call(arguments, 1)

  // we wrap everything in a promise to avoid promise chaining,
  // which leads to memory leak errors.
  // see https://github.com/tj/co/issues/180
  return new Promise(function(resolve, reject) {
    if (typeof gen === 'function') gen = gen.apply(ctx, args);
    if (!gen || typeof gen.next !== 'function') return resolve(gen);

    onFulfilled();

    /**
     * @param {Mixed} res
     * @return {Promise}
     * @api private
     */

    function onFulfilled(res) {
      var ret;
      try {
        ret = gen.next(res);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    /**
     * @param {Error} err
     * @return {Promise}
     * @api private
     */

    function onRejected(err) {
      var ret;
      try {
        ret = gen.throw(err);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    /**
     * Get the next value in the generator,
     * return a promise.
     *
     * @param {Object} ret
     * @return {Promise}
     * @api private
     */

    function next(ret) {
      if (ret.done) return resolve(ret.value);
      var value = toPromise.call(ctx, ret.value);
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
        + 'but the following object was passed: "' + String(ret.value) + '"'));
    }
  });
}

/**
 * Convert a `yield`ed value into a promise.
 *
 * @param {Mixed} obj
 * @return {Promise}
 * @api private
 */

function toPromise(obj) {
  if (!obj) return obj;
  if (isPromise(obj)) return obj;
  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
  if ('function' == typeof obj) return thunkToPromise.call(this, obj);
  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
  if (isObject(obj)) return objectToPromise.call(this, obj);
  return obj;
}

/**
 * Convert a thunk to a promise.
 *
 * @param {Function}
 * @return {Promise}
 * @api private
 */

function thunkToPromise(fn) {
  var ctx = this;
  return new Promise(function (resolve, reject) {
    fn.call(ctx, function (err, res) {
      if (err) return reject(err);
      if (arguments.length > 2) res = slice.call(arguments, 1);
      resolve(res);
    });
  });
}

/**
 * Convert an array of "yieldables" to a promise.
 * Uses `Promise.all()` internally.
 *
 * @param {Array} obj
 * @return {Promise}
 * @api private
 */

function arrayToPromise(obj) {
  return Promise.all(obj.map(toPromise, this));
}

/**
 * Convert an object of "yieldables" to a promise.
 * Uses `Promise.all()` internally.
 *
 * @param {Object} obj
 * @return {Promise}
 * @api private
 */

function objectToPromise(obj){
  var results = new obj.constructor();
  var keys = Object.keys(obj);
  var promises = [];
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var promise = toPromise.call(this, obj[key]);
    if (promise && isPromise(promise)) defer(promise, key);
    else results[key] = obj[key];
  }
  return Promise.all(promises).then(function () {
    return results;
  });

  function defer(promise, key) {
    // predefine the key in the result
    results[key] = undefined;
    promises.push(promise.then(function (res) {
      results[key] = res;
    }));
  }
}

/**
 * Check if `obj` is a promise.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isPromise(obj) {
  return 'function' == typeof obj.then;
}

/**
 * Check if `obj` is a generator.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */

function isGenerator(obj) {
  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
}

/**
 * Check if `obj` is a generator function.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */
function isGeneratorFunction(obj) {
  var constructor = obj.constructor;
  if (!constructor) return false;
  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
  return isGenerator(constructor.prototype);
}

/**
 * Check for plain object.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isObject(val) {
  return Object == val.constructor;
}


/***/ })
/******/ ]);