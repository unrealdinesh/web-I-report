/**
 * AJAX Lab - Question 1 (16):
 * Write an AJAX program to fetch a JSON data object, parse it, and display its contents in HTML using a card layout.
 */

function fetchJsonAndDisplayCards() {
  const container = document.getElementById("json-card-container");
  if (!container) return;

  container.innerHTML = '<div class="loading">Fetching JSON data...</div>';

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try {
          // Parse fetched JSON string into JavaScript object
          const dataList = JSON.parse(xhr.responseText);
          renderCardLayout(dataList, container);
        } catch (error) {
          container.innerHTML = `<div class="error">JSON Parsing Error: ${error.message}</div>`;
        }
      } else {
        container.innerHTML = `<div class="error">Failed to fetch JSON data. Server Status: ${xhr.status}</div>`;
      }
    }
  };

  xhr.onerror = function () {
    container.innerHTML = '<div class="error">Network error occurred while fetching JSON.</div>';
  };

  xhr.send();
}

// Render parsed JSON array into HTML card layout
function renderCardLayout(items, containerElement) {
  if (!Array.isArray(items) || items.length === 0) {
    containerElement.innerHTML = '<div class="info">No data items found.</div>';
    return;
  }

  let htmlContent = '<div class="card-grid">';

  items.forEach((item) => {
    const skillsList = Array.isArray(item.skills)
      ? item.skills.map((skill) => `<span class="badge">${skill}</span>`).join(" ")
      : "";

    htmlContent += `
      <div class="user-card">
        <div class="card-header">
          <h3>${item.name}</h3>
          <span class="role-tag">${item.role}</span>
        </div>
        <div class="card-body">
          <p><strong>Faculty:</strong> ${item.faculty}</p>
          <p><strong>Email:</strong> ${item.email}</p>
          <div class="skills-container">
            <strong>Skills:</strong><br />
            ${skillsList}
          </div>
        </div>
      </div>
    `;
  });

  htmlContent += "</div>";
  containerElement.innerHTML = htmlContent;
}
