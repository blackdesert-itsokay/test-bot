const http = require('http');
const Discord = require('discord.js');
const bot = new Discord.Client();

var default_time = "00:00";
var boss_next_time_a = default_time;
var boss_next_time_b = default_time;
var boss_next_time_a_2 = default_time;
var boss_next_time_b_2 = default_time;

var gtrade = "";

bot.on('message', function(message) {
    if(message.content === '!地圖') {
        // message.reply('<http://bd.youxidudu.com/map/index_tw.html>');
        message.channel.sendMessage('<http://bd.youxidudu.com/map/index_tw.html>');
    }
    if(message.content === '!克價卡') {
        message.channel.sendMessage('```下次克價卡出生時間：' + boss_next_time_a + ' ~ ' + boss_next_time_b + '```');
    }
    if(message.content === '!庫屯') {
        message.channel.sendMessage('```下次庫屯出生時間：' + boss_next_time_a_2 + ' ~ ' + boss_next_time_b_2 + '```');
    }
    if(message.content === '!皇室') {
        message.channel.sendMessage('```皇室納貢/釣魚更新分流：' + gtrade + '```');
    }
});

bot.on('ready', function(event) {
    intervalFunc();
});

bot.login('MzI0OTMwMDcxMTYyOTEyNzY4.DCRDdQ.jANi3kC1YfuQh2ZkMmauJFBmCVU');

function setBossTime() {
    console.log('this is data');
}

function getBossTime() {
    var o = {};
    
    var request = http.get("http://bd.youxidudu.com/mylike/app_get_boss_kejiaka.php", function(response) {
        var body = '';

        response.on('data', function(chunk) {
            body += chunk;
        });

        response.on('end', function() {
            o = JSON.parse(body); 
            console.log("got a response : " + JSON.stringify(o));
        });

    }).on('error', function(e) {
        console.log("got an error: ", e);
    });
}

function intervalFunc () {
    console.log('refresh boss data');
    getBossTime();
}

setInterval(intervalFunc, 60 * 1000);