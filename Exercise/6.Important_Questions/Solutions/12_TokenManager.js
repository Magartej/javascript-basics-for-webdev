const localStorage = {}; // simple object as storage

function setAuthToken(token, expiresInMinutes) {
  const now = new Date();
  const expiryTime = now.getTime() + expiresInMinutes * 60 * 1000;
  localStorage.authToken = JSON.stringify({ token, expiresAt: expiryTime });
}

function getAuthToken() {
  if (!localStorage.authToken) return null;
  const tokenData = JSON.parse(localStorage.authToken);
  const now = new Date();
  if (now.getTime() > tokenData.expiresAt) {
    delete localStorage.authToken;
    return null;
  }
  return tokenData.token;
}

// Example usage
setAuthToken("abc123", 30);
console.log(getAuthToken());
