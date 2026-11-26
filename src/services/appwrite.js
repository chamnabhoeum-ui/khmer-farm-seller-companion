import { Client, Account, Databases, Storage, TablesDB } from 'react-native-appwrite';

const client = new Client()
  .setEndpoint('https://sgp.cloud.appwrite.io/v1')
  .setProject('6b0782ef002a1f6c40e9')
  .setPlatform('com.chamnab.khmerfarm');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const tablesDB = new TablesDB(client);

export const DATABASE_ID = '6b079f0d001fdff39d04';
export const PRODUCTS_TABLE_ID = '6b079f910018ddc57057';