module.exports = {
    api: {
        port: process.env.PORT || 3050,
    },
    firebase: {
        token: process.env.FRB_TOKEN || '',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '',
        database: process.env.MYSQL_DB || 'db',
        port: process.env.MYSQL_PORT || '3306',
    },

}