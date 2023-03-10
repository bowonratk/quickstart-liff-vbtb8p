// Import stylesheets
import "./style.css"

// Body element
const body = document.getElementById('body')

// Button elements
const btnSend = document.getElementById("btnSend")
const btnClose = document.getElementById("btnClose")
const btnShare = document.getElementById("btnShare")
const btnLogIn = document.getElementById("btnLogIn")
const btnLogOut = document.getElementById("btnLogOut")
const btnScanCode = document.getElementById("btnScanCode")
const btnOpenWindow = document.getElementById("btnOpenWindow")

// Profile elements
const email = document.getElementById("email")
const userId = document.getElementById("userId")
const pictureUrl = document.getElementById("pictureUrl")
const displayName = document.getElementById("displayName")
const statusMessage = document.getElementById("statusMessage")

// QR element
const code = document.getElementById("code")
const friendShip = document.getElementById("friendShip")

async function main() {
  await liff.init({ liffId: "1660657007-yQRAr96e" })
  async function getUserProfile() {
    const profile = await liff.getProfile()
    pictureUrl.src = profile.pictureUrl
    userId.innerHTML = "<b>userId:</b> " + profile.userId
    statusMessage.innerHTML = "<b>statusMessage:</b> " + profile.statusMessage
    displayName.innerHTML = "<b>displayName:</b> " + profile.displayName
  }
  // ...
  getUserProfile()
  // ...
  if (!liff.isInClient()) {
    btnLogIn.style.display = "block"
    btnLogOut.style.display = "block"
  }
}