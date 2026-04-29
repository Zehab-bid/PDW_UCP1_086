/* ===========================
   script-index.js
   JavaScript for index.html (Home Page)
   =========================== */

// Static member data (default)
let members = [
  { nama: "Andi Prasetyo",   email: "andi@tech.com",  minat: "Web Dev"       },
  { nama: "Budi Santoso",    email: "budi@tech.com",  minat: "AI/ML"         },
  { nama: "Citra Dewi",      email: "citra@tech.com", minat: "Cybersecurity" },
  { nama: "Dian Rahmawati",  email: "dian@tech.com",  minat: "Mobile"        },
  { nama: "Eka Wijaya",      email: "eka@tech.com",   minat: "Data Science"  }
];

// Merge with any members registered during this session (from form.html)
const saved = sessionStorage.getItem('members');
if (saved) {
  members = members.concat(JSON.parse(saved));
}

/**
 * Render the member table and update the member count stat.
 */
function renderTable() {
  const tbody = document.getElementById('tbody');
  tbody.innerHTML = '';

  members.forEach(function (m, i) {
    tbody.innerHTML +=
      '<tr>' +
        '<td>' + (i + 1) + '</td>' +
        '<td>' + m.nama + '</td>' +
        '<td>' + m.email + '</td>' +
        '<td><span class="tag">' + m.minat + '</span></td>' +
      '</tr>';
  });

  document.getElementById('memberCount').textContent = members.length;
}

// Run on page load
renderTable();
