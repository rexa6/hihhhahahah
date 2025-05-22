export async function saveUserInfo() {
  const alreadySaved = localStorage.getItem('user_info_saved')
  if (alreadySaved) return

  const userAgent = navigator.userAgent
  const language = navigator.language
  const screenWidth = window.screen.width
  const screenHeight = window.screen.height
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  let ip = 'Unavailable'
  try {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    ip = data.ip
  } catch (e) {
    console.warn('Could not fetch IP address', e)
  }

  const info = {
    ip,
    userAgent,
    language,
    screenWidth,
    screenHeight,
    timezone,
    date: new Date().toISOString()
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]')
  users.push(info)
  localStorage.setItem('users', JSON.stringify(users))

  localStorage.setItem('user_info_saved', 'true')
}
