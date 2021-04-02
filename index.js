// initalizing express
const express = require('express');
const app = express();
// try to use cloud port if available default to port 3000 if not
const PORT = process.env.PORT || 3000;
// requiring path
const path = require('path');

// setting view engine to use ejs
app.set('view engine', 'ejs');
// handle form post requests to server
app.use(express.urlencoded({ extended: true }));
// handle AJAX post requests containing JSON data
app.use(express.json({ limit: '100mb' }));

// start server on available port and log start msg
app.listen(PORT, () => {
	console.log(`>>> Server Running On Port ${PORT} <<<`);
});

// get request to root
app.get('/', (req, res) => {
	res.send('home');
});

// get request to home
app.get('/home', (req, res) => {
	res.send('home');
});

// get request login
app.get('/login', (req, res) => {
	res.send('login');
});

// get request dashboard
app.get('/dashboard', (req, res) => {
	res.send('dashboard');
}); 

app.post('/save', (req, res) => {
	const id = req.body.id;
	const img = req.body.img;
})

// get request to public
app.get('/public/*', (req, res) => {
	res.sendFile(path.join(__dirname, req.url));
});

// get 404 catch all
app.get('*', (req, res) => {
	res.send('404');
});

