const { app, BrowserWindow } = require('electron')
let screen = require('electron')
let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000, height: 800,
    webPreferences: { nodeIntegration: true }
  })
  mainWindow.loadFile('./index.html')
  mainWindow.webContents.openDevTools();

}
app.on('ready', createWindow)



var colours = require('colours');
console.log(colours.rainbow('Hello World'));
console.log(colours.rainbow('Hello '));

// function printCrash() {
//   console.log("Crashing the server in 5 sec")
// }
// function crashMe() {

//   setTimeout(printCrash, 4000)
//   console.log("Crash");
//   process.crash()
// }
// setTimeout(crashMe, 10000)

console.log("electron version: "+process.versions.electron);
function Screen(){
  screen.createWindow()
}