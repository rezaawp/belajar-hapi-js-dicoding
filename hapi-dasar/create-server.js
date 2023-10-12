const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  }); // https://hapi.dev/api/?v=20.3.0#server.options

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
