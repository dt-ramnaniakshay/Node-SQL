const errorHandler = (res,error) => {
    console.log(error);
    res.status(500).json({ message: 'internal server error'})
}

module.exports = errorHandler