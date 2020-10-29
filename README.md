# auth-firebase-node-mysql

In this project, I show you how to create a user and authenticate it against your Firebase app, using her email and password.

# Run

In the file `config.js` you have to add the credentials of firebase and your database

### development
```
$ npm install
$ npm run dev
```
### production
```
$ npm install
$ npm start
```
# API

## Create a user
```
POST /signup
{ 
	"full_name":"Example Name",
	"email": "example@mail.com",
	"password": "123456789"
}
```

## Login
```
POST /signin
{ 
	"email": "example@mail.com",
	"password": "123456789"
}
```

# Database

![](https://github.com/decker-dev/auth-firebase-node-mysql/blob/main/public/images/tables.png?raw=true)


Both endpoint return a Firebase UserCredential (https://firebase.google.com/docs/reference/js/firebase.auth#usercredential)