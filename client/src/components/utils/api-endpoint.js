const endpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';
console.log('ANTON', process.env);
module.exports = endpoint;
