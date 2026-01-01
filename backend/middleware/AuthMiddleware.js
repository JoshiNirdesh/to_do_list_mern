const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1];
        console.log(token);
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: "Unauthorize User",
                })
            }
            else {
                req.body = req.body || {};
                req.body.id = decode.id;
                next();

            }
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Please provide auth token",
            error: error.message
        })
    }
}