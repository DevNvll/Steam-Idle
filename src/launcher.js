const {execFile} = require('child_process');
const {remote} = require('electron');

function formatTimeString(str) {
  return parseFloat(str.replace(',','.').replace(' ',''));
}

function toMs(num) {
  return num*360000;
}

const launch = function(appid) {
  const games = appid.split(',');
  games.forEach(function(entry) {
    execFile("./idler.exe", [entry.trim()]);
  });
}

module.exports.launch = launch;