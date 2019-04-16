let express = require('express');
let app = express();
let cors = require('cors');

// app.use(express.static(__dirname));

app.use(cors({ credentials: true, origin: 'http://localhost:8082' }));

// app.all('*', function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8082');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
//   res.header('X-Powered-By', ' 3.2.1');
//   res.header('Content-Type', 'application/json;charset=utf-8');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   next();
// });

app.get('/api/clock', (req, res) => {
  res.end(new Date().toLocaleString());
});

app.get('/api/count', (req, res) => {
  console.log(req.query);
  const { name, city, number } = req.query;
  res.json({ user: 'tobi', name, city, number });
  // res.status(422).json({ errmessage: '验证失败' });
});

app.listen(8081, () => {
  console.log('listen on 8081');
});
