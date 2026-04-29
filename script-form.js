/* ===========================
   script-form.js
   JavaScript for form.html (Registration Page)
   =========================== */

// Load existing session members (if any)
let sessionMembers = [];
const saved = sessionStorage.getItem('members');
if (saved) {
  sessionMembers = JSON.parse(saved);
}

// Show saved count on page load
document.getElementById('counter').textContent = sessionMembers.length;

/**
 * Handle form submission:
 *  - Validate inputs
 *  - Save to sessionStorage array
 *  - Display result section
 *  - Show alert confirmation
 */
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  var nama  = document.getElementById('nama').value.trim();
  var email = document.getElementById('email').value.trim();
  var minat = document.getElementById('minat').value;

  // Clear previous error messages
  document.querySelectorAll('.error').forEach(function (el) {
    el.classList.remove('show');
  });

  var valid = true;

  // Validate name
  if (!nama) {
    document.getElementById('err-nama').classList.add('show');
    valid = false;
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('err-email').classList.add('show');
    valid = false;
  }

  // Validate interest selection
  if (!minat) {
    document.getElementById('err-minat').classList.add('show');
    valid = false;
  }

  if (!valid) return;

  // Save new member to session array
  var member = { nama: nama, email: email, minat: minat };
  sessionMembers.push(member);
  sessionStorage.setItem('members', JSON.stringify(sessionMembers));

  // Display result card
  document.getElementById('r-nama').textContent  = nama;
  document.getElementById('r-email').textContent = email;
  document.getElementById('r-minat').textContent = minat;
  document.getElementById('result').classList.add('show');

  // Update member counter
  document.getElementById('counter').textContent = sessionMembers.length;

  // Confirmation alert
  alert('✓ Selamat ' + nama + '!\nPendaftaran berhasil.\n\nData tersimpan di array sementara.');

  // Reset form fields
  this.reset();
});
