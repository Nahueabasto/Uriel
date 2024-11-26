const auth = (req, res, next) => {
    if (req.session && req.session.admin) {
        return next();
    } else {
        return res.status(403).send('Forbidden');
    }
};

export default auth;