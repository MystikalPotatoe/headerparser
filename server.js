'use strict';
const express = require('express');
const useragent = require('useragent');
const languageList = require('./accept-language');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req,res) {
    const agent = useragent.parse(req.headers['user-agent']);
    const body = {
        "ip address": req.ip,
        "language": languageList(req.headers['accept-language']),
        "software": agent.os.family
    };
    res.end(JSON.stringify(body));
});

app.listen(app.get('port'),() => {
    console.log('headerparser running');
})