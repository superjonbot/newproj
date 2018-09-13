'use strict';


var fetch = require('node-fetch');
var co = require('co') ;

co(
    function *(){
       const uri= "https://feeds.video.aetnd.com/api/aetv/videos?filter%5BisBehindWall%5D=false&perpage=500";
       const response = yield fetch(uri);
       const post = yield response.json();
       const results = yield post.results;

       for(var a=0;a<results.length;a++){
           console.log(`id: ${results[a].id}    ${results[a].seriesName}:${results[a].title} (S${results[a].tvSeasonNumber}:E${results[a].tvSeasonEpisodeNumber})`)
       }


    }
)

