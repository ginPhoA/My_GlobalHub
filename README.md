# My_GlobalHub

## Table of Content's
1. [Overview](#overview)
2. [Tech Stack](#tech-stack)

## Overview
<b>My_GlobalHub</b> is a <u>locally-hosted</u> Electron desktop application which acts as a central hub for launching and managing daily-used applications (e.g., Spotify, Chrome, Steam, etc.).   
The aim of the project is to rebuild and strengthen my individual coding skills by working on something fun and practical, while developing and using what I've learnt during my time at University.

### Tech Stack
- <b>Electron</b> - Desktop application framework
- <b>HTML / CSS / JavaScript</b> - UI + UX logic 
- <b>Node.js</b> - Backend JavaScript runtime
- <b>npm</b> - Dependency Manager
- <b>Git + Github</b> - Source and Version control

### Project Structure
```graphql
MY_GLOBALHUB/
│
├── app/
│   ├── home_page/
│   ├── css/
│   └── scripts/
│
├── main.js            # Main Electron process
├── preload.js         # Exposes secure APIs to renderer
├── renderer.js        # Renderer logic for the UI
├── package.json
├── package-lock.json
├── index.html         # Initial page loaded by Electron
└── README.md          # Project documentation
```

---

### Getting Started
I recommend using a text-editor like <b>Visual Studio Code</b>, however feel free to use what you're comfortable with

<b>Node.js + npm</b>  
| [Windows Installer (.msi)](https://nodejs.org/en/download) | macOS 12+ ([Homebrew](https://brew.sh/), [nvm](https://github.com/nvm-sh/nvm)) |--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ------------- | ------------- | ------------- |

#### Verify Installation
```bash
node -v
npm -v
```

<b>Expected Output</b>
```bash
node v24.11.1
npm  11.6.2
```

---

### Running Locally
1. Install Required Dependencies
```bash
npm install
```

2. Start the Electron Desktop Application
```bash
npm start
```

