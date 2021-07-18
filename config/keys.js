module.exports = (
    process.env.NODE_ENV === "production" ? require('./keys_prod') : require("./keys_dev")
)