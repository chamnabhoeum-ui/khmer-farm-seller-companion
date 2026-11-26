import { createContext, useContext, useEffect, useState } from 'react';
import { ID } from 'react-native-appwrite';
import { account } from '../services/appwrite';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    account
      .get()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  async function signUp(name, email, password) {
    await account.create({ userId: ID.unique(), email, password, name });
    await account.createEmailPasswordSession({ email, password });
    setUser(await account.get());
  }

  async function logIn(email, password) {
    await account.createEmailPasswordSession({ email, password });
    setUser(await account.get());
  }

  async function logOut() {
    await account.deleteSession({ sessionId: 'current' });
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
