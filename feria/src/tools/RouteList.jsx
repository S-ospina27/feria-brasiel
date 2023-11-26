const host = import.meta.env.VITE_SERVER_URL;

export default {
  host: host,
  api: {
    auth: {
      login: `${host}/api/auth`,
    },
    briefcase: {
      index: `${host}/api/briefcase-getAll`,
      create: `${host}/api/briefcase`,
      update: `${host}/api/briefcase-update`,
    },
    categories: {
      index: `${host}/api/categories-getAll/`,
      get: `${host}/api/categories-get`,
      create: `${host}/api/categories`,
      update: `${host}/api/categories-update`,
      delete: `${host}/api/categories-delete/`,
    },
    products: {
      index: `${host}/api/products-getAll`,
      by_category: `${host}/api/products-get-by-category/`,
      create: `${host}/api/products`,
      update: `${host}/api/products-update`,
      delete: `${host}/api/products-delete`,
    },
  },
};
