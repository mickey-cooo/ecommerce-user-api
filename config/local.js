module.exports = {
  serverEndpoint: 'http://localhost:8080',
  clientId: 'template',
  clientSecret: 'template',
  database: {
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'e-commerce_db',
  },
  jwtExpiration: 24 * 60 * 60 * 1000,
  jwtConstants: '1234!@#$',
  isoFrontendEndpoint: 'http://localhost:3000',
};
