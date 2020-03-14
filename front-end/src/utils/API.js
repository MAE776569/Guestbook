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

export function signup(data) {
  return fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then((res) => res.json())
}

export function logout() {
  return fetch(`${API_URL}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json())
}

export function getLoggedUser() {
  return fetch(`${API_URL}/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json())
}