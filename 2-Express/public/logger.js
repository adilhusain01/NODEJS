const logger = (req, res, next) => {
    //passing to the next middleware can be done or we can stop by sending something already
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}

module.exports = logger;