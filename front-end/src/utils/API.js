const API_URL = "http://localhost:8000/api"

export function login(username, password) {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    body: {
      username,
      password
    }
  })
  .then((res) => res.json)
}