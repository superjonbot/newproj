const app = require('../build/app');


app.getResults('aetv').then((entries)=>{
    console.log(entries.length)
})