import mongoose from "mongoose";
// src/models/producto.js

const mongoose = require('mongoose');

// Definir el esquema del producto
const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

// Crear el modelo a partir del esquema
const Producto = mongoose.model('3D', productoSchema);

// Exportar el modelo
module.exports = Producto;