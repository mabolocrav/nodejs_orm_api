module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    switch (true) {
        case typeof err ==='string':
            //custom application error
            const is404 = err.toLocaleLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({ message: err});
        default:
            return res.status(500).json({ message: err.message });           
    }
}