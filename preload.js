const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('api', {
processFont: (data) => ipcRenderer.invoke('process-font', data)
});
