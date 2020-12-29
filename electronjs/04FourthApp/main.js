const { app,  BrowserWindow } = require('electron')


let win
function createWindow() {
  win = new BrowserWindow({
    width: 1080, height: 800,
    webPreferences: { nodeIntegration: true }
  })
  win.loadFile('./index.html')
  win.webContents.openDevTools();
}
app.on('ready', createWindow)
let desktopPath = app.getPath('desktop')
console.log(desktopPath);
console.log("app Version: "+app.getVersion());