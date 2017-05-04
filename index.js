"use strict";
const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const { autoUpdater } = require("electron-updater");
const path = require("path");

let mainWindow, aboutWindow, legacyWindow;

process.env.NODE_ENV = process.env.NODE_ENV || "production";
const isProduction = process.env.NODE_ENV === "production";

function logToRender(msg) {
  mainWindow.webContents.send("log", msg);
}

function createWindow() {
  const browserOptions = {
    width: 500,
    height: 625,
    minWidth: 500,
    minHeight: 625,
    frame: !isProduction,
    backgroundColor: "#222",
    show: false
  };
  mainWindow = new BrowserWindow(browserOptions);
  mainWindow.loadURL("file://" + __dirname + "/public/index.html");
  mainWindow.on("close", () => {
    mainWindow = null;
  });
  mainWindow.once("ready-to-show", () => {
    if (!isProduction) mainWindow.openDevTools();
    mainWindow.show();
  });
}

function createAboutWindow() {
  const browserOptions = {
    width: 485,
    height: 175,
    backgroundColor: "#222",
    show: false,
    parent: mainWindow
  };
  aboutWindow = new BrowserWindow(browserOptions);
  aboutWindow.loadURL("file://" + __dirname + "/public/about.html");
  aboutWindow.on("close", () => {
    aboutWindow = null;
  });
  aboutWindow.once("ready-to-show", () => {
    aboutWindow.show();
  });
}

function createLegacyWindow() {
  const browserOptions = {
    width: 490,
    height: 225,
    backgroundColor: "#222",
    resizable: false,
    show: false
  };
  legacyWindow = new BrowserWindow(browserOptions);
  legacyWindow.loadURL("file://" + __dirname + "/public/legacy.html");
  legacyWindow.on("close", () => {
    legacyWindow = null;
  });
  legacyWindow.once("ready-to-show", () => {
    legacyWindow.show();
  });
}

ipcMain.on("open-about", () => {
  createAboutWindow();
});

ipcMain.on("open-legacy", () => {
  createLegacyWindow();
});

function onReady() {
  createWindow();
  if (isProduction) autoUpdater.checkForUpdates();
}

app.on("ready", onReady);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

autoUpdater.on("update-available", (ev, info) => {
  logToRender("update-available");
  mainWindow.webContents.send("UPDATE_AVAILABLE");
});

autoUpdater.on("download-progress", (ev, progressObj) => {
  logToRender("download-progress");
  mainWindow.webContents.send("DOWNLOAD_PROGRESS", ev);
});

autoUpdater.on("update-downloaded", (ev, info) => {
  logToRender("update-downloaded");
  mainWindow.webContents.send("UPDATE_READY");
  ipcMain.on("ACCEPT_UPDATE", () => {
    autoUpdater.quitAndInstall();
  });
});
