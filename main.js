/** Import necessary modules from Electron 
 *  app - controls application event lifecycle
 *  browserwindow - creates and manages app windows */ 
const { app, BrowserWindow, ipcMain } = require('electron/main');
const path = require('path');

// Reusable function to create a new browser window with browserwindow module
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'), // Preload script to be loaded before other scripts run in the window
        contextIsolation: true, // Security measure to isolate context between main and renderer processes
        nodeIntegration: false // Security measure to prevent Node.js integration in renderer process
    }
  })

  win.loadFile('index.html')
}

// On macOS, re-create a window when the dock icon is clicked and there are no other windows open
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit the app when all windows are closed, calls the app.quit() method to exit app if user is not on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})