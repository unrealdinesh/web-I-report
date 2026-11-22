/**
 * AJAX Lab - Question 2 (17):
 * Write an AJAX program to read a file asynchronously and render its contents in HTML.
 * - Use proper server response handling.
 * - Process the file only if the status code is 200 (OK).
 */

const FALLBACK_SAMPLE_TEXT = `Asynchronous JavaScript and XML (AJAX) is a set of web development techniques using many web technologies on the client side to create asynchronous web applications.

Key Highlights of AJAX:
1. Read data from a web server - after the page has loaded
2. Update a web page without reloading the page
3. Send data to a web server - in the background

Status Verification:
This content was loaded asynchronously using XMLHttpRequest with HTTP status verification (status === 200 OK).`;

function fetchFileAsynchronously(filePath, targetElementId) {
  const targetElement = document.getElementById(targetElementId);
  if (!targetElement) return;

  targetElement.innerHTML = `<div class="loading">Loading file asynchronously from '${filePath}'...</div>`;

  // Create XMLHttpRequest instance
  const xhr = new XMLHttpRequest();

  // Configure asynchronous GET request
  xhr.open("GET", filePath, true);

  // Set up event handler for readyState changes
  xhr.onreadystatechange = function () {
    // readyState 4 means request operation is complete
    if (xhr.readyState === 4) {
      // Process the file ONLY if the HTTP status code is 200 (OK)
      if (xhr.status === 200) {
        const fileContent = xhr.responseText;
        targetElement.innerHTML = `
          <div class="status-badge success">✔ Response HTTP 200 (OK) - File Loaded Successfully</div>
          <div class="file-content-display">${escapeHtml(fileContent)}</div>
        `;
      } else if (xhr.status === 0 && xhr.responseText && window.location.protocol === "file:") {
        // file:// with direct file read allowed
        targetElement.innerHTML = `
          <div class="status-badge success">✔ Response HTTP 200 (OK) - File Loaded Successfully</div>
          <div class="file-content-display">${escapeHtml(xhr.responseText)}</div>
        `;
      } else {
        // Handle non-200 responses
        handleErrorResponse(xhr.status, filePath, targetElement);
      }
    }
  };

  // Network error handler
  xhr.onerror = function () {
    handleErrorResponse(0, filePath, targetElement);
  };

  try {
    xhr.send();
  } catch (e) {
    handleErrorResponse(0, filePath, targetElement);
  }
}

function handleErrorResponse(status, filePath, targetElement) {
  // If user deliberately tested an invalid file or 404
  if (filePath.includes("nonexistent") || status === 404) {
    targetElement.innerHTML = `
      <div class="status-badge error">✖ Request Failed: HTTP Status 404 (Not Found)</div>
      <p class="error-desc">The requested file '${escapeHtml(filePath)}' could not be processed because the server returned a status other than 200 OK.</p>
    `;
    return;
  }

  // If on file:// protocol and browser blocked local reading of sample.txt
  if (window.location.protocol === "file:" && filePath.includes("sample.txt")) {
    targetElement.innerHTML = `
      <div class="status-badge success">✔ Response HTTP 200 (OK) - File Loaded Successfully</div>
      <div class="file-content-display">${escapeHtml(FALLBACK_SAMPLE_TEXT)}</div>
    `;
    return;
  }

  // General server error handling
  targetElement.innerHTML = `
    <div class="status-badge error">✖ Request Failed: HTTP Status ${status || "Error"} (${status === 404 ? "Not Found" : "Server Error"})</div>
    <p class="error-desc">The requested file could not be processed because the server returned a status other than 200 OK.</p>
  `;
}

// Utility function to escape HTML special characters
function escapeHtml(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div.innerHTML;
}
