# React Bootstrap basic kick starter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The form will persist the data to firebase. In order to get the persistence working please create an app in firebase:

https://firebase.google.com/

Create an app in firebase and generate the config and save the file into **src/firebase/firebase-config.ts**

```
const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_project_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_project_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id",
  measurementId: "your_measurement_id"
};

export default firebaseConfig;

```

If there is permission error then grant the permission to read write to respective documents.

In https://console.firebase.google.com/,  select your project, go to:

Firestore Database > Data > Rules

Grant following permission to your collection:

```
  rules_version = '2';
    service cloud.firestore {
    match /databases/{database}/documents {
    match /{document=**} {
    allow read, write;
   }
  }
}
```

Remember to revert back the permissions to authenticated users only once you are done with testing.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
