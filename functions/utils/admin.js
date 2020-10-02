const admin = require('firebase-admin');
var serviceAccount = require("../utils/key/healthify-server-firebase-adminsdk-km3ik-2554bc13f3.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://healthify-server.firebaseio.com"
});

const db = admin.firestore();
module.exports = { admin, db };
