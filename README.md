# Raffle App

Welcome to the Raffle App! This application allows you to conduct raffles by inputting participant names and randomly selecting a winner. This README provides instructions on how to clone, install, and configure the app.

## Live Demo

Visit the live demo [here](https://iamgutz.github.io/raffle-app/).

## Getting Started
### Prerequisites
Node.js and npm installed on your machine

### Clone the Repository
```bash
git clone https://github.com/your-username/raffle-app.git
cd raffle-app
```

### Install Dependencies
```bash
npm install
```

## Running the App
To start the app, use the following command:
```bash
npm run start
```
Visit http://localhost:3000 in your browser to access the Raffle App.

## Configuration
The app comes with a configuration file located at **src/config/index.js**. You can customize the following settings:

### Forced Winner
Set a forced winner by changing the forcedWinner value.

### Theme Settings
Adjust the visual appearance of the app with the following theme options:

-`appLogoImgSrc`: Path to the app logo image
-`bgColor`: Background color
-`buttonColor`: Button color
-`listItemBgColorEven`: Background color for list items (even)
-`textColor`: Text color

### Text Settings
Modify the text content displayed in the app:

Various titles, button labels, and messages are customizable.

## Usage
1. Configure settings in the config file.
2. Start the app
3. Access the app in your browser.
4. Add participants.
5. Conduct the raffle.
6. View the winner.

License
This project is licensed under the MIT License.