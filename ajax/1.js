/**
 * AJAX Lab - Question 1 (16):
 * Write an AJAX program to fetch a JSON data object, parse it, and display its contents in HTML using a card layout.
 */

// Fallback JSON data if browser blocks local XMLHttpRequest over file:// protocol
const FALLBACK_JSON_DATA = [
  {
    id: 1,
    name: "Dinesh Basnet",
    role: "Web Developer",
    email: "dinesh.basnet@example.com",
    faculty: "BCA 4th Semester",
    skills: ["JavaScript", "HTML5", "CSS3", "AJAX"],
  },
  {
    id: 2,
    name: "Aarav Sharma",
    role: "Frontend Designer",
    email: "aarav.sharma@example.com",
    faculty: "BIT 4th Semester",
    skills: ["UI/UX", "jQuery", "CSS Grids", "Figma"],
  },
  {
    id: 3,
    name: "Sophia Karki",
    role: "Database Administrator",
    email: "sophia.karki@example.com",
    faculty: "CSIT 4th Semester",
    skills: ["MySQL", "JSON API", "Node.js", "MongoDB"],
  },
];

function fetchJsonAndDisplayCards() {
  const container = document.getElementById("json-card-container");
  if (!container) return;

  container.innerHTML = '<div class="loading">Fetching JSON data asynchronously...</div>';

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      // In HTTP servers status is 200; on file:// protocol status can be 200 or 0 with responseText
      if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText)) {
        try {
          // Parse fetched JSON string into JavaScript object
          const dataList = JSON.parse(xhr.responseText);
          renderCardLayout(dataList, container);
        } catch (error) {
          container.innerHTML = `<div class="status-badge error">JSON Parsing Error: ${error.message}</div>`;
        }
      } else {
        // Fallback for file:// CORS restrictions in standard browsers
        if (window.location.protocol === "file:") {
          renderCardLayout(FALLBACK_JSON_DATA, container);
        } else {
          container.innerHTML = `<div class="status-badge error">Failed to fetch JSON data. Server Status: ${xhr.status}</div>`;
        }
      }
    }
  };

  xhr.onerror = function () {
    // When browser blocks file:// XHR via CORS
    if (window.location.protocol === "file:") {
      renderCardLayout(FALLBACK_JSON_DATA, container);
    } else {
      container.innerHTML = '<div class="status-badge error">Network error occurred while fetching JSON.</div>';
    }
  };

  try {
    xhr.send();
  } catch (e) {
    // Catch synchronous file:// security error
    if (window.location.protocol === "file:") {
      renderCardLayout(FALLBACK_JSON_DATA, container);
    } else {
      container.innerHTML = `<div class="status-badge error">AJAX Request Error: ${e.message}</div>`;
    }
  }
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
