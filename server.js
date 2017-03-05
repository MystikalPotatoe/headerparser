'use strict';
const express = require('express');
const useragent = require('useragent');
const languageList = require('./accept-language');
const app = express();

app.get('/api/whoami', function(req,res) {
    const agent = useragent.parse(req.headers['user-agent']);
    const body = {
        "ip address": req.ip,
        "language": languageList(req.headers['accept-language']),
        "software": agent.os.family
    };
    res.end(JSON.stringify(body));
});

app.listen(8080,() => {
    console.log('headerparser running');
})