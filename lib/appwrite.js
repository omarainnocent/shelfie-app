import { Client, Account, Databases, Storage, Avatars, ID, Permission, Role } from 'react-native-appwrite';

export { ID, Permission, Role };

export const config = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    projectName: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME,
};

const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
