import { Query } from 'react-native-appwrite';
import { tablesDB, DATABASE_ID, PRODUCTS_TABLE_ID } from './appwrite';

export async function listProducts(userId) {
  const response = await tablesDB.listRows({
    databaseId: DATABASE_ID,
    tableId: PRODUCTS_TABLE_ID,
    queries: [Query.equal('userId', userId), Query.orderDesc('$createdAt'), Query.limit(100)],
  });
  return response.rows;
}