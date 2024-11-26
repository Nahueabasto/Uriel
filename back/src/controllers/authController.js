export const login = (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password123') {
        req.session.user = username;
        req.session.admin = true;
        res.send('Login successful');
    } else {
        res.status(401).send('Login failed');
    }
};