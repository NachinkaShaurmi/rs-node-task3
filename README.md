# Debug in Node.js

## Сompilation errors

1.
*ошибка: ReferenceError: Router is not defined
*исправление: var router = require('express').Router();
*Исправлена(ы) строка(и) 1 в файле ./controllers/usercontroller.js

2.
*ошибка: Error: Cannot find module 'bcrypt'
*исправление: npm i bcrypt
*Исправлена(ы) строка(и) 2 в файле ./controllers/usercontroller.js

3.
*ошибка: SyntaxError: Function statements require a function name
*исправление: module.exports = function(sequelize, DataTypes) {
*Исправлена(ы) строка(и) 1 в файле ./models/game.js

4.
*ошибка: ReferenceError: Router is not defined
*исправление: module.exports = router;
*Исправлена(ы) строка(и) 116 в файле ./controllers/gamecontroller.js

5.
*ошибка: TypeError: db.sync is not a function
*исправление: module.exports = sequelize;
*Исправлена(ы) строка(и) 24 в файле ./db.js

6.
*ошибка: TypeError: require(...).import is not a function
*исправление: var User = require('../models/user');
*Исправлена(ы) строка(и) 2 в файле ./middleware/validate-session.js

---------------------------------------

## Logic errors

1.
*ошибка: app.use(require('body-parser'));
*исправление: app.use(express.json());
*Исправлена(ы) строка(и) 9 в файле ./app.js

2.
*ошибка: passwordhash: bcrypt.hashSync(req.body.user.password, 10),
*исправление: passwordHash: bcrypt.hashSync(req.body.user.password, 10),
*Исправлена(ы) строка(и) 11 в файле ./controllers/usercontroller.js

3.
*ошибка: sequelize.authenticate()
*исправление: 
```
sequelize
.authenticate()
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(`Error: ${err}`))
```
*Исправлена(ы) строка(и) 15 - 18 в файле ./db.js

4 .
*ошибка: не указан порт сервера
*исправление: 
```
const SERVER_PORT = process.env.SERVER_PORT || 4000;
app.listen(SERVER_PORT, function() {
    console.log(`App is listening on ${SERVER_PORT}`);
})
```
*Исправлена(ы) строка(и) 7, 13 - 15 в файле ./app.js

5.
*ошибка: не указан порт базы данных
*исправление: port: process.env.DB_PORT || 5433,
*const SERVER_PORT = process.env.SERVER_PORT || 4000;
*Исправлена(ы) строка(и) 11 в файле ./db.js

6.
*ошибка: games: games
*исправление: games: data
*Исправлена(ы) строка(и) 9 в файле ./controllers/gamecontroller.js
(также можно было исправить в обратную сторону, переименовать параметр в games)

7.
*ошибка: owner_id: req.body.user.id,
*исправление: owner_id: req.user.id,
*Исправлена(ы) строка(и) 42 в файле ./controllers/gamecontroller.js

8.
*ошибка: owner_id: req.user,
*исправление: owner_id: req.user.id,
*Исправлена(ы) строка(и) 73 в файле ./controllers/gamecontroller.js

---------------------------------------

## Refactoring

*Исправлены var на let/const
*Исправлено форматирование кода
*Вероятно часть пунктов ошибок является рефакторингом

## Result

#### Сompilation errors 30/30
#### Logic errors 30/30
#### Refactoring 10/10
#### Amount 70/70
