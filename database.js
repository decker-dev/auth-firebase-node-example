const mysql = require('mysql')
let connection;
function handleCon() {
    connection = mysql.createConnection({
        host: 'host',
        user: 'user',
        password: 'password',
        database: 'database',
        port:'port'
    });

    connection.connect((err) => {
        if (err) {
            console.error('[db err]', err);
            setTimeout(handleCon, 60000);
        } else {
            console.log('DB Connected!');
        }
    });

    connection.on('error', err => {
        console.error('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleCon();
        } else {
            throw err;
        }
    })
}
handleCon()
module.exports =connection