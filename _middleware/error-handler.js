module.exports = errorHandler;

function errorHandler(err, req, res, next){
    console.error(err); // Log the error for debugging purposes
    switch(true){
        case typeof err === 'string':
            const is404 = err.toLocaleLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({message : err})
        default:
            // Send the actual error message caught by the middleware
            return res.status(500).json({ message: err.message || 'Internal Server Error' });
    }
}