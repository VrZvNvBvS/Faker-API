const express = require('express');
const app = express();

let User = require('./User');
let Company = require('./Company');


//*** Implement Middleware in order to support JSON Post requests  ****************/
app.use(express.json())

/*****************************************
*************  User Routes **************
******************************************/

app.get("/api", (req, res) => {
    res.json({ "msg": "You have reached api" });
});


/***************************************************
 ************* CREATE fake user **************
 ****************************************************/

app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    res.status(201).json(newUser)
});

/***************************************************
 ************* CREATE fake COMPANIES **************
 ****************************************************/
app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    res.status(201).json(newCompany)
});

/***************************************************
 ************* CREATE fake USER COMPANY ************
 ****************************************************/
app.get("/api/user/company", (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    res.status(201).json({newUser, newCompany})
});

// PORT OUTPUT
app.listen(8000, () => console.log('listening on port ' + 8000));




