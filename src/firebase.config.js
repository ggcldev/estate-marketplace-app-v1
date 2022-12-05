// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFireStore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYxPDywYh8779GB0YgfGCe20HSEu0P7S0',
  authDomain: 'estate-marketplace-app-aadad.firebaseapp.com',
  projectId: 'estate-marketplace-app-aadad',
  storageBucket: 'estate-marketplace-app-aadad.appspot.com',
  messagingSenderId: '786412160361',
  appId: '1:786412160361:web:e52e2c72161dc1e53929f8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFireStore()
