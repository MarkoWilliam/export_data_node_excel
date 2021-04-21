const express = require("express");
const mysql = require("mysql");
const dotenv = require('dotenv');
const app = express();
const exportUsersToExcel = require('./exportService');

dotenv.config({ path: './.env' });







// })


//-------Connection avec la base de donnée---------
const db = mysql.createConnection({
    //--On a déclarer tous dans .env et l'appelle seulement
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});

//-------Tester la connexion avec la base de donnée-----------
db.connect((error) => {
    if (error) {
        console.log("Connexion refused", error)
    } else {
        console.log("MYSQL Connected..")
    }
})



db.query(" SELECT num.id, num.nom, num.n_carte, num.code_postal, num.code_postal, num.ville, num.telephone, num.email, num.date_creation, num.ne_le  FROM apk_kwizatz_customer AS num WHERE num.n_carte = 0 ", async(error, results) => {
    if (results) {
        //console.log(results)
        const users = results;
        const workSheetColumnName = [
            "Nom",
            "Numéro carte metisse",
            "Code postal",
            "Ville",
            "Télephone",
            "email",
            "Date de création",
            "ne_le"
        ];
        const workSheetName = 'Users';
        const filePath = './outputFiles/carteMetisse.xlsx';
        exportUsersToExcel(users, workSheetColumnName, workSheetName, filePath);
    } else {
        console.log("error")
    }
})


// // --------Port du server------------------
// app.listen(process.env.PORT, 'http://apk.test.kenza.re/');

// --------Port du server------------------
app.listen(process.env.PORT);