const config = {
    app: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost'
    },
    db: {
        uri: process.env.DB_URI || 'mongodb://localhost:27017/contact-book_db'
    },
};

module.exports = config;