// Import the 'idb' package to use with IndexedDB.
import { openDB } from 'idb';

const newVersion = 2;
// Create a function that can be used to start up the database.
const initdb = async () =>
  // Create a database named demo-db and we will use version 1.
  openDB('demo-db', newVersion, {
    // Sets the database schema if it isn't already defined.
    upgrade(db, oldVersion) { //oldVersion is 0 if never created
      if (oldVersion !== newVersion) {
        if (db.objectStoreNames.contains('demo-object-store')) {
          console.log('demo-object-store already exists');
        }
        else {
          // Create an object store for our data inside of the 'demo-db'.
          // We create a key named 'id' which will automatically be incremented for us.
          db.createObjectStore('demo-object-store', { keyPath: 'id', autoIncrement: true });
          console.log('demo-object-store database created');
        }

        if (db.objectStoreNames.contains('products')) {
          console.log('products already exists');
        }
        else {
          // Create an object store for our data inside of the 'demo-db'.
          // We create a key named 'id' which will automatically be incremented for us.
          db.createObjectStore('products', { keyPath: 'idx', autoIncrement: true });
          console.log('products database created');
        }

      }

    },
  });

// Call our database function.
initdb();
Collapse










