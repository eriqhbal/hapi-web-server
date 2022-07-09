// Import Framework
const Hapi = require('@hapi/hapi');

// Import Class
const routes = require('./routes');

const init = async () => {
   const server = Hapi.server({
      port: 5000,
      host: 'localhost',
   });

   server.route(routes);

   await server.start();
   console.log(`server berjalan pada ${server.info.uri}`);
}



init();

