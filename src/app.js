//'use strict';
var exports = module.exports = {}

const fetch = require('node-fetch');
const co = require('co') ;

let settings={
    _endPoint: 'http://sandbox-cloudapi.imrworldwide.com/nmapi/v2/{{appid}}/{{sessionID}}/a?b=',/*, //https://cloudapi.imrworldwide.com/nmapi/v2/
        _appId: ins_brand('27BDDCBA-C8DF-4BA2-90DB-9C7FAE770A48'),*/
        _sessionID: Date.now() + String(Math.random() * 1000000 >> 0),
        _brands:['aetv','history','lifetime','fyi']
}


exports.hello = function() {
    return 'yo world'
}

exports.feedURI = function(brand){return `https://feeds.video.aetnd.com/api/${brand}/videos?filter%5BvideoType%5D=Episode&filter%5BisBehindWall%5D=false&perpage=500`}


exports.getResults = function(brand) {
    co(
        function *(){
            const uri= exports.feedURI(brand);
            const response = yield fetch(uri);
            const post = yield response.json();
            const results = yield post.results;

/*            for(var a=0;a<results.length;a++){
                console.log(`${brand} id: ${results[a].id}    ${results[a].seriesName}:${results[a].title} (S${results[a].tvSeasonNumber}:E${results[a].tvSeasonEpisodeNumber})`)
            }*/
            //console.log(brand+' '+results.length)
            return results

        }
    )
}

exports.run = async() {



            let returnObj={};

    console.log('hey'+JSON.stringify(returnObj));

            for(let i=0;i<settings._brands.length;i++){
                await returnObj[settings._brands[i]]=exports.getResults(settings._brands[i]);
                //returnObj[settings._brands[i]]=exports.getResults(settings._brands[i])
            }

            //return returnObj

            console.log('hey'+JSON.stringify(returnObj))


}

exports.run()
/*
exports={
    hello : function () {
        return 'yo world'
    }

}
*/



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
