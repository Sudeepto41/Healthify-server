const functions = require('firebase-functions');
const firebase = require('firebase');
const config = require('./utils/config')
firebase.initializeApp(config);

const { admin, db } = require("./utils/admin");

const {
    validateSignupData,
    validateLoginData,
    reduceUserDetails,
} = require("./utils/validators");

const app = require('express')();

app.post('/signup', (req, res) => {

    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        ChronicDisease: req.body.ChronicDisease,
        FamilyDisease: req.body.FamilyDisease
    };

    const { valid, errors } = validateSignupData(newUser);

    if (!valid) return res.status(400).json(errors);

    let token, userId;

    firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((data) => {
            console.log(0)
            userId = data.user.uid;
            console.log(userId)
            return data.user.getIdToken();
        })
        .then((idToken) => {
            console.log(1)
            token = idToken;
            const userCredentials = {
                name: newUser.name,
                email: newUser.email,
                createdAt: new Date().toISOString(),
                age: newUser.age,
                gender: newUser.gender,
                ChronicDisease: newUser.ChronicDisease,
                FamilyDisease: newUser.FamilyDisease,
                JOE: 'MAMA'
            };
            return db.collection('users').doc(userId).set(userCredentials);
        })
        .then(() => {
            return res.status(201).json({ token });
        })
        .catch((err) => {
            console.error(err);
            if (err.code === "auth/email-already-in-use") {
                return res.status(400).json({ email: "Email is already is use" });
            } else {
                return res
                    .status(500)
                    .json({ general: "Something went wrong, please try again" });
            }
        });
});



app.post('/login', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };

    const { valid, errors } = validateLoginData(user);

    if (!valid) return res.status(400).json(errors);

    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            return data.user.getIdToken();
        })
        .then((token) => {
            return res.json({ token });
        })
        .catch((err) => {
            console.error(err);
            // auth/wrong-password
            // auth/user-not-user
            return res
                .status(403)
                .json({ token: "error" });
        });
});
exports.api = functions.region('asia-south1').https.onRequest(app);