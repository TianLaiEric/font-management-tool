const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { processFont } = require('./backend/fontWorker');


function createWindow() {
const win = new BrowserWindow({
width: 1100,
height: 750,
webPreferences: {
preload: path.join(__dirname, 'preload.js')
}
});


win.loadFile('renderer/index.html');
}


app.whenReady().then(createWindow);


ipcMain.handle('process-font', async (_, args) => {
return await processFont(args);
});
