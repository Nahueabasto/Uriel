const adminCredentials = {
    username: 'admin',
    password: 'password123' // Cambia esto a una contraseña más segura
};

export const verificarAdmin = (req, res, next) => {
    const { username, password } = req.body;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        next(); // Si las credenciales son correctas, continúa a la siguiente función
    } else {
        res.status(401).json({ message: 'Acceso no autorizado' }); // Si no, devuelve un error
    }
};