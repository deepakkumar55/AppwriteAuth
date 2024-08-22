import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66c5c67400072b8b612b'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
