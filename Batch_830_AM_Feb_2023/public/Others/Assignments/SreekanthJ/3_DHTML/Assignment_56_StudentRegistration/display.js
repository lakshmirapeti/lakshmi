function displayDetails() {
    // Get input values using query selector
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const location = document.querySelector('#location').value;
    const country = document.querySelector('#country').value;
    
    // Display input values in table
    const table = document.querySelector('table tbody');
    const newRow = table.insertRow();
    newRow.innerHTML = `
      <td>${table.rows.length}</td>
      <td>${name}</td>
      <td>${age}</td>
      <td>${gender}</td>
      <td>${location}</td>
      <td>${country}</td>
      <td><button onclick="deleteRow(this)">Delete</button>
      <button onclick="editRow(this)">Edit</button></td>
    `;
    
    // Clear input values
    document.querySelector('#rname').value = '';
    document.querySelector('#rage').value = '';
    document.querySelector('#rmale').checked = true;
    document.querySelector('#rlocation').value = '';
    document.querySelector('#rcountry').value = 'America';
  }
  
  function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

  function editRow(btn) {
  
  }
  