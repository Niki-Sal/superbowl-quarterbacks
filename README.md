# superbowl-quarterbacks

### Express-Setup


npm init -y
ls
touch index.js
echo "node_modules/" >> .gitignore
ls -a
npm i express ejs express-ejs-layouts axios sequelize pg dotenv
ls
code .
npm i method-override
node index.js


```js
// 1 - environment
require('dotenv').config();

```


```js
// 2 - imports
const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

```



```js
// 2 - imports
const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

```

```js
// 3 - App set up
const app = express();
app.set('view engine', 'ejs');
```


```js
// 4 - App Middleware (app.use)
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
```


```js
// 5 - Routes (controllers)
app.get('/', (req, res) => {
    res.send('Welcome to my App'); // Yo, Rome: what is this doing?
});
```

```js
///Listening on a PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});

```










