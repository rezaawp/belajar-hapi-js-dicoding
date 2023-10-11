const Hapi = require("@hapi/hapi");

// https://hapi.dev/tutorials/routing/?lang=en_US
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  }); // https://hapi.dev/api/?v=20.3.0#server.options

  server.route([
    {
      method: "get",
      path: "/about/{username?}", // ini path parameter bersifat opsional
      handler: function (request, h) {
        const { username } = request.params;
        return {
          page: "about",
          message: `Hai ${username}, ini adalah halaman about`,
        };
      },
    },
    {
      method: "get",
      path: "/profile/{username}", // ini path parameter bersifat wajib di isi
      handler: function (request, h) {
        const { username } = request.params;
        return {
          page: `Hai ${username}, ini adalah halaman profile`,
        };
      },
    },
  ]); // route ini sebaiknya di pisah (buat file baru agar lebih rapih)

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
