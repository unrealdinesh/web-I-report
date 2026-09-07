/**
 * AJAX Lab - Question 2 (17):
 * Write an AJAX program to read a file asynchronously and render its contents in HTML.
 * - Use proper server response handling.
 * - Process the file only if the status code is 200 (OK).
 */

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
      } else {
        // Proper error response handling for non-200 status codes
        targetElement.innerHTML = `
          <div class="status-badge error">✖ Request Failed: HTTP Status ${xhr.status} (${xhr.statusText || "Error"})</div>
          <p class="error-desc">The requested file could not be processed because the server returned a status other than 200 OK.</p>
        `;
      }
    }
  };

  // Network error handler
  xhr.onerror = function () {
    targetElement.innerHTML = `
      <div class="status-badge error">✖ Network Error</div>
      <p class="error-desc">Could not complete asynchronous request due to a network connection failure.</p>
    `;
  };

  // Send asynchronous request
  xhr.send();
}

// Utility function to escape HTML special characters
function escapeHtml(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div.innerHTML;
}
