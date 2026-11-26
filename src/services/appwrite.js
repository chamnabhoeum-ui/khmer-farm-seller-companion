import { Client, Account, Databases, Storage } from 'react-native-appwrite';

const client = new Client()
  .setEndpoint('https://sgp.cloud.appwrite.io/v1')
  .setProject('6b0782ef002a1f6c40e9')
  .setPlatform('com.chamnab.khmerfarm');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);