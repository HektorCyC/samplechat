# Sample Livechat using Socket.io Project

[Demo🏃](https://samplechatfront.firebaseapp.com/)

 - [x] [Angular Material design](https://material.angular.io/)✔️
 - [x] Mobile friendly ✔️
 - [x] Lightweight ✔️
 - [x] [Socket.io](https://socket.io) UserAuth Integrated✔️
 - [x] Angular Observables✔️
 - [x] Angular Services✔️
 - [x] Modular design✔️

## How to run the project in localhost

### Instructions for FrontEnd
 1. Place yourself into the chat-FE folder
 2. NodeJs **minimum 10.15.0 is required**
 3. Setup your own URL at the webservice file or replace with localhost
 4. Install dependecies `npm i`
 5. Serve the project `ng serve`

### Instructions for Backend
 1. Place yourself into the chat-BE folder
 2. NodeJs **minimum 10.15.0 is required**
 4. Install dependecies `npm i`
 5. Serve the project `node lib/index.js`
 6. Service will run on port 3000 by default

## Deploy to Firebase

 1. Login with Firebase CLI `firebase login`
 2. Initialize Firebase project -> Follow the instrucctions at the CLI `firebase init` *point to your "dist" folder for further deployments*
 3. Build your production package `ng build --prod`
 4. Deploy the project to your choosen Firebase project `firebase deploy --hosting`
Further information about deployment 
[**Angular deployment**](https://angular.io/start/deployment) 
[**Firebase Deploy**](https://firebase.google.com/docs/hosting/deploying)

Made with ❤️ in 🇲🇽