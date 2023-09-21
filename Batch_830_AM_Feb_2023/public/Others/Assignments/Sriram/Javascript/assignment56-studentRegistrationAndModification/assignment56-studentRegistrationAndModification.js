var selectedRow = null;

        function onFormSubmit(e) {
            event.preventDefault();
            var formData = readFormData();
            if (selectedRow == null) {
                insertNewRecord(formData);
            }
            else {
                updateRecord(formData);
            }
            resetForm();
        }

        //Retrieve the data
        function readFormData() {
            var formData = {};
            formData["sName"] = document.querySelector("#sName").value;
            formData["sAge"] = document.querySelector("#sAge").value;
            formData["sGender"] = document.querySelector("input[name=gender]:checked").value;
            formData["sLocation"] = document.querySelector("#sLocation").value;
            formData["sCountry"] = document.querySelector("#select").value;

            return formData;
        }

        //Insert the data
        function insertNewRecord(data) {
            var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.sName;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.sAge;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.sGender;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.sLocation;
            cell5 = newRow.insertCell(4);
            cell5.innerHTML = data.sCountry;
            cell6 = newRow.insertCell(5);
            cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
        }

        //Edit the data
        function onEdit(td) {
            selectedRow = td.parentElement.parentElement;
            document.querySelector("#sName").value = selectedRow.cells[0].innerHTML;
            document.querySelector("#sAge").value = selectedRow.cells[1].innerHTML;
            var editGender = document.querySelectorAll('input[name="gender"]');
            for (var i = 0; i < editGender.length; i++) {
                if (editGender[i].value == selectedRow.cells[2].innerHTML) {
                    editGender[i].checked = true;
                }
            }
            document.querySelector("#sLocation").value = selectedRow.cells[3].innerHTML;
            document.querySelector("#select").value = selectedRow.cells[4].innerHTML;
        }
        function updateRecord(formData) {
            selectedRow.cells[0].innerHTML = formData.sName;
            selectedRow.cells[1].innerHTML = formData.sAge;
            selectedRow.cells[2].innerHTML = formData.sGender;
            selectedRow.cells[3].innerHTML = formData.sLocation;
            selectedRow.cells[4].innerHTML = formData.sCountry;
        }

        //Delete the data
        function onDelete(td) {
            if (confirm('Do you want to delete this record?')) {
                row = td.parentElement.parentElement;
                document.getElementById('storeList').deleteRow(row.rowIndex);
                resetForm();
            }
        }

        //Reset the data
        function resetForm() {
            document.querySelector("#sName").value = "";
            document.querySelector("#sAge").value = "";
            document.querySelector("input[name=gender]").checked = true;
            document.querySelector("#sLocation").value = "";
            document.querySelector("#select").value = "India";

            selectedRow = null;
        }