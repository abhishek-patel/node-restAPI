var configuration = {
    connection: (process.env.ENV == 'TEST') ? 'mongodb://localhost/bookAPI_test' : 'mongodb://localhost/bookAPI'
};

module.exports = configuration;