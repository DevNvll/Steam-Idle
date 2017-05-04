import { execFile } from "child_process";
import { remote } from "electron";
import { resolve } from "path";

function formatTimeString(str) {
  return parseFloat(str.replace(",", ".").replace(" ", ""));
}

function toMs(num) {
  return num * 3600000;
}

export function legacyLaunch(appids) {
  const games = appids.split(",");
  games.forEach(entry => {
    execFile("./bin/idler.exe", [entry.trim()]);
  });
}

export function launch(games) {
  games.forEach(game => {
    execFile(
      "./bin/idler.exe",
      [game.appid.toString(), toMs(game.time).toString(), game.name],
      err => {
        console.log(err);
      }
    );
  });
}
