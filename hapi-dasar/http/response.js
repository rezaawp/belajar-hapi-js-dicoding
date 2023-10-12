const Hapi = require('@hapi/hapi');

// https://hapi.dev/tutorials/routing/?lang=en_US
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  }); // https://hapi.dev/api/?v=20.3.0#server.options

  server.route([
    {
      method: 'GET',
      path: '/login',
      handler: (request, h) => h
        .response({
          hello: 'world',
        })
        .code(200) // https://hapi.dev/api/?v=21.3.2#response-toolkit
      ,
    },
  ]); // route ini sebaiknya di pisah (buat file baru agar lebih rapih)

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
