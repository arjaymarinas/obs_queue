import express from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/userRoutes.js'
import pageRoutes from './routes/pageRoutes.js'

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/api', userRoutes)

app.use('/', pageRoutes);
//app.use('/admin', adminRoutes);

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});

// 1. Config
// 2. Models
// 3. Services
// 4. Controller
// 5. Routes
// 6. App.js