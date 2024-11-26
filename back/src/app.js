import express from "express";
import productRoutes from './routes/productRoutes.js';
import morgan from 'morgan';
import session from 'express-session';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

app.use('/', productRoutes);
app.use('/', authRoutes);
app.use(morgan('dev'));



app.use((err, req, res, next) => {
    console.error(err.stack); // Imprime el error en la consola
    res.status(500).send('Algo salió mal!'); // Respuesta genérica
});

export default app;
