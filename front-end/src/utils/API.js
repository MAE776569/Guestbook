const API_URL = "http://localhost:8000/api"

export function login(data) {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then((res) => res.json())
}
