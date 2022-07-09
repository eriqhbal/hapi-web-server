const routes = [
   {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
         return 'Homepage';
      }
   },
   {
      method: '*',
      path: '/',
      handler: (request, h) => {
         return 'Halaman Tidak Dapat Diakses Menggunakan Method Tersebut';
      }
   },
   {
      method: 'GET',
      path: '/about',
      handler: (request, h) => {
         return 'About Page';
      }
   },
   {
      method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
   },
   {
      method: 'GET',
      path: '/hello/{username?}',
      handler: (request, h) => {
         const { username="Stranger"} = request.params;
         return `hello ${username}`;
      }
   },
   {
        method: '*',
        path: '/juragan',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];

module.exports = routes;