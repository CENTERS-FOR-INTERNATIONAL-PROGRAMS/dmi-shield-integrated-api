import * as dotenv from 'dotenv';
dotenv.config();

import Role from '../api/models/Role';
import User from '../api/models/User';
import Document503 from '../api/models/Document503';
import DocumentSari from '../api/models/DocumentSari';
import DocumentEbs from '../api/models/DocumentEBS';

const syncTables = () => {
    try {
        User.sync();
        Role.sync();
        Document503.sync();
        DocumentSari.sync();
        DocumentEbs.sync();
        console.log('Tables synchronized successfully.');
    } catch (error) {
        console.error('Error synchronizing tables:', error);
    }
};

syncTables();
