/**
 * Question 12:
 * Write a JavaScript program to set a cookie, get a cookie, and delete a cookie.
 */

// 1. Function to set a cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  const days = exdays || 1;
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${cname}=${encodeURIComponent(cvalue)};${expires};path=/;SameSite=Lax`;
  return `Cookie '${cname}' set with value '${cvalue}' (Expires in ${days} day(s)).`;
}

// 2. Function to get a cookie by name
function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

// 3. Function to delete a cookie
function deleteCookie(cname) {
  // Setting expires date in the past deletes the cookie
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=Lax`;
  return `Cookie '${cname}' has been deleted.`;
}

// Interactive handler for testing cookie management
function testCookieManagement(action, name, value, days) {
  const cookieName = name || "username";
  let message = "";

  if (action === "set") {
    const val = value || "DineshBasnet";
    message = setCookie(cookieName, val, days || 7);
  } else if (action === "get") {
    const cookieVal = getCookie(cookieName);
    if (cookieVal !== null) {
      message = `Cookie Found!\nName: ${cookieName}\nValue: ${cookieVal}`;
    } else {
      message = `Cookie '${cookieName}' does not exist or has expired.`;
    }
  } else if (action === "delete") {
    message = deleteCookie(cookieName);
  } else {
    message = "Invalid cookie action.";
  }

  const currentCookies = document.cookie || "(No active cookies)";
  message += `\n\nAll Active Cookies: "${currentCookies}"`;

  return message;
}
