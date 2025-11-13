// Preload script to expose APIs to renderer process in a secure way
// Not directly exposing 'ipcRenderer' to prevent security risks by wrapping it in a helper function
const { contextBridge, ipcRenderer } = require('electron')

// Expose protected methods that allow the renderer process to use ipcRenderer without exposing entire object
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => console.log('ping')

  // Can also expose variables, not just functions
})