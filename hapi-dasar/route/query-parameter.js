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
      path: '/hello/{name?}', // http://localhost:5000/hello/reza?lang=en
      handler: (request, h) => {
        const { name = 'stranger' } = request.params; // jika path param tidak di isi, maka param name di isi (secara default) "stranger" contoh url : http://localhost:5000/hello?lang=en
        const { lang } = request.query;

        if (lang === 'id') {
          return `Hai, ${name}!`;
        }
        return `Hello, ${name}!`;
      },
    },
  ]); // route ini sebaiknya di pisah (buat file baru agar lebih rapih)

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
