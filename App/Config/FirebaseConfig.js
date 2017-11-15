// Initialize Firebase
export const config = {
  apiKey: "AIzaSyAiMj5OqL4r2zwlEHIegHvFrj3MGxSHYAw",
  authDomain: "navneeta-ac60d.firebaseapp.com",
  databaseURL: "https://navneeta-ac60d.firebaseio.com",
  projectId: "navneeta-ac60d",
  storageBucket: "navneeta-ac60d.appspot.com",
  messagingSenderId: "1009768976898"
};

export const reduxConfig = {
  enableLogging: true, // enable/disable Firebase Database Logging
  enableRedirectHandling: false // disabled due to issue here:
}

export default { config, reduxConfig }
