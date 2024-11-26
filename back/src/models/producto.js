// import mongoose from 'mongoose';

// const productoSchema = new mongoose.Schema({
//     nombre: {
//         type: String,
//         required: true
//     },
//     descripcion: {
//         type: String,
//         required: true
//     },
//     precio: {
//         type: Number,
//         required: true
//     },
//     categoria: {
//         type: String,
//         required: true
//     },
//     imagen: {
//         data: Buffer,
//         contentType: String
//     },
//     fechaCreacion: {
//         type: Date,
//         default: Date.now
//     }
// });

// const Producto = mongoose.model('Producto', productoSchema);

// export default Producto;

import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    imagen: {
        data: Buffer,
        contentType: String
    }
});

const Producto = mongoose.model('Producto', productoSchema);
export default Producto;

// import mongoose from 'mongoose';

// const productoSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     // Otros campos que necesites
// });

// const Producto = mongoose.model('Producto', productoSchema);

// export default Producto;