const endpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';
module.exports = endpoint;
