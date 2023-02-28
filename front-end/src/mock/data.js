function config(token) {
  return {
      headers: {
          "Authorization": `Bearer ${token}`
      }
  }
}

const BASE_URL = import.meta.env.VITE_BASE_URL;

export { config, BASE_URL };
