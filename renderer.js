// Uses 'document.GetByElementId' DOM API to display HTML content with Electron version info, Node.js info, and Chrome version info
const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

// Async function to demonstrate IPC communication between renderer and main process through 'ping' channel we defined in main.js + renderer.js
const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

// Call  function to see the result in console
func()