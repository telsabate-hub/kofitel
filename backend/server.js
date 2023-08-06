const express = require( 'express' );
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', require( './routes/productRoute' ));

app.use('/', (req, res) => {
    res.status(200).end('<h1>Welcome to Kofitel</h1>');
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))