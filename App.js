import { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { account } from './src/services/appwrite';

export default function App() {
  useEffect(() => {
    account
      .get()
      .then(() => console.log('Appwrite: user found'))
      .catch((e) => console.log('Appwrite result:', e.message));
  }, []);

  return <AppNavigator />;
}