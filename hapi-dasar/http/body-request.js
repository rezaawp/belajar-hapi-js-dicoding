const Hapi = require("@hapi/hapi");

// https://hapi.dev/tutorials/routing/?lang=en_US
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  }); // https://hapi.dev/api/?v=20.3.0#server.options

  server.route([
    {
      method: "POST",
      path: "/login",
      handler: (request, h) => {
        const { username, password } = request.payload;
        return `Welcome ${username}!`;
      },
    },
  ]); // route ini sebaiknya di pisah (buat file baru agar lebih rapih)

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
