"use strict";

// Modules
var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow; // Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.


var mainWindow; // Create a new BrowserWindow when `app` is ready

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  }); // Load index.html into the new BrowserWindow
  // mainWindow.loadFile('index.html')

  mainWindow.loadFile('./index.html'); // Open DevTools - Remove for PRODUCTION!

  mainWindow.webContents.openDevTools(); // Listen for window being closed

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
} // Electron `app` is ready


app.on('ready', createWindow); // Quit when all windows are closed - (Not macOS - Darwin)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
}); // When app icon is clicked and app is running, (macOS) recreate the BrowserWindow

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
"use strict";

var colours = require('colours');

console.log(colours.rainbow('Hello World'));
console.log(colours.rainbow('Hello '));