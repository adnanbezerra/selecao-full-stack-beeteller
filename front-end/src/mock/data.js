function config(token) {
  return {
      headers: {
          "Authorization": `Bearer ${token}`
      }
  }
}

const BASE_URL = process.env.BASE_URL;

export { config, BASE_URL }