// import Producto from '../models/producto.js'; 

// export const crearProducto = async (req, res) => {
//     const { nombre, descripcion, precio, categoria } = req.body;
//     const imagen = {
//         data: req.file.buffer,
//         contentType: req.file.mimetype
//     };

//     const nuevoProducto = new Producto({
//         nombre,
//         descripcion,
//         precio,
//         categoria,
//         imagen
//     });

//     try {
//         await nuevoProducto.save();
//         res.status(201).send({ mensaje: 'Producto creado con éxito', producto: nuevoProducto });
//     } catch (error) {
//         res.status(400).send({ mensaje: 'Error al crear el producto', error });
//     }
// };
import Producto from '../models/producto.js';

export const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        console.error(error); // Imprime el error en la consola
        res.status(400).json({ message: error.message });
    }
};