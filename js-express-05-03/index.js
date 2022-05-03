import express from "express";
import { create } from "express-handlebars";
import session from "express-session";

import fs from "fs/promises";
const app = express();
const hbs = create({
  /* config */
});

const credentials = {
    login: 'man',
    password: '123'
}

// bazinio adreso konstravimas
const port = 3000
const url = 'http://localhost:' + port 

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.use(express.urlencoded({
    extended: false
}))

// sesiijos prisijungimas ir konfiguracija
app.use(session({
    secret: 'auth',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 86400000 // cookio galiojimo laikas
    }
}))

app.use('/assets', express.static('assets/'))

app.get('/', (req, res) => {
    if (req.session.loggedin != undefined && req.session.loggedin){
        res.redirect(url + '/clients')
        return
    } 
        res.render('login')
})

app.post('/login-submit', (req, res) => {
    // req.query gauna duomenis is address bar
    // req.params gauna duomenis uz kiekvieno slash
    // req.body gauna duomenis is post metodo
    // req.session issaugota info cookies
    if(parseInt( Object.keys(req.body).length ) > 0) {
        if(
          req.body.username != '' &&
          req.body.password != '' &&
          req.body.username === credentials.login &&
          req.body.password === credentials.password
        ) {
            res.session.loggedin = true
          res.redirect(url + '/clients')
        } else {
          res.send('Neteisingi prisijungimo duomenys')
        }
   
      } else {
        res.redirect(url) //Peradresavimas
      }
})





app.get('/clients', (req, res) => {
    if (res.session.loggedin != undefined && res.session.loggedin){
        res.render(url + '/clients')
    } else {
        res.render(url)
    }
})

app.listen(3000);