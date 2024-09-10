export const URLBASE = import.meta.env.VITE_URL_BACKENT_HOST ?? 'http://localhost:3000'

export const ENDPOINT = {
  login: `${URLBASE}/login`,
  users: `${URLBASE}/usuarios`
}
