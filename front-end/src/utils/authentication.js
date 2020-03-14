// A function to check if the user is authenticated
export function checkAuthedUser() {
  const cookies = Object.fromEntries(
    document.cookie.split(";").map((e) => e.trim().split("="))
  )

  return !!cookies["SID"]
}
