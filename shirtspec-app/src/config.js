// export default {
//     API_ENDPOINT: 'http://localhost:3000/api',
//     TOKEN_KEY: 'shirtspec-app-auth-token',
//   }

  module.exports = {
    PORT: process.env.PORT || 8000,
    API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT ||
      "http://localhost:3000/api",
    TOKEN_KEY: 'shirtspec-app-auth-token'
  };