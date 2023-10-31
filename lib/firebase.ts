import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: 'gathr-store.firebaseapp.com',
	projectId: 'gathr-store',
	storageBucket: 'gathr-store.appspot.com',
	messagingSenderId: '772942109554',
	appId: '1:772942109554:web:7596ae8ddfb9955ee31beb',
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
