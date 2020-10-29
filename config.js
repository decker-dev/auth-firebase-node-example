module.exports = {
    api: {
        port: process.env.PORT || 3050,
    },
    firebase: {
        token: process.env.FRB_TOKEN || '',
    },
    mysql: {
        host: process.env.MYSQL_HOST || '',
        user: process.env.MYSQL_USER || '',
        password: process.env.MYSQL_PASS || '',
        database: process.env.MYSQL_DB || '',
        port: process.env.MYSQL_PORT || '',
    },

}