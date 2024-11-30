// import admin from "firebase-admin";
// import serviceAccount from "./config/serviceAccountKey.json" assert { type: "json" };

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// export default admin;


import admin from "firebase-admin";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Decode the base64 string stored in your .env
const serviceAccountBase64 = process.env.SERVICE_ACCOUNT_KEY;
if (!serviceAccountBase64) {
  throw new Error("SERVICE_ACCOUNT_KEY not found in .env file");
}

// Decode base64 and parse the JSON object
const serviceAccount = JSON.parse(Buffer.from(serviceAccountBase64, 'base64').toString('utf-8'));

// Initialize Firebase Admin SDK with the service account credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
