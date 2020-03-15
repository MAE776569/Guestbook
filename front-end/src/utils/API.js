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

export function getUsers() {
  return fetch(`${API_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json())
}

export function getConversation(sender, receiver) {
  return fetch(
    `${API_URL}/conversation?sender=${sender}&receiver=${receiver}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  ).then((res) => res.json())
}

export function createConversation(data) {
  return fetch(`${API_URL}/conversation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then((res) => res.json())
}

export function deleteMessage(messageID) {
  return fetch(`${API_URL}/messages/${messageID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json())
}

export function updateMessage(messageID, text) {
  return fetch(`${API_URL}/messages/${messageID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  }).then((res) => res.json())
}
