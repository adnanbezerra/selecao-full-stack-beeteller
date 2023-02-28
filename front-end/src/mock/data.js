function config(token) {
  return {
      headers: {
          "Authorization": `Bearer ${token}`
      }
  }
}

const BASE_URL = import.meta.env.REACT_APP_BASE_URL;

export { config, BASE_URL };
