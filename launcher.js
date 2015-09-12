var spawn = require('child_process').exec;
var remote = require('remote')
var app = remote.require('app')

var launch = function(appid) {
  var games = appid.split(',');
  console.log($.map(games, $.trim));
  var gamesList = $.map(games, $.trim);

  gamesList.forEach(function(entry) {
    var launchGame = spawn("start idler.exe " + entry)
  });
}
