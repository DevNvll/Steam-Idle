'use strict';
const { app, BrowserWindow } = require('electron')

const path = require('path')

let mainWindow;

function createWindow () {
  const browserOptions = {
    width: 600,
    height: 305
  }
  mainWindow = new BrowserWindow(browserOptions)
  mainWindow.loadURL('file://' + __dirname + '/src/index.html')
  mainWindow.on('closed', function() {
    mainWindow = null
  });
}
app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})