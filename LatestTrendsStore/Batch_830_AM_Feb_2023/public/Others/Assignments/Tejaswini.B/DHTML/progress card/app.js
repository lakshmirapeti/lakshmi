function calculateTotal() {
            // Get the input values
            const name = document.querySelector("#name").value;
            const age = document.querySelector("#age").value;
            const className = document.querySelector("#class").value;
            const m1 = parseInt(document.querySelector("#m1").value);
            const m2 = parseInt(document.querySelector("#m2").value);
            const m3 = parseInt(document.querySelector("#m3").value);
            const m4 = parseInt(document.querySelector("#m4").value);
            const m5 = parseInt(document.querySelector("#m5").value);

            // Calculate total marks
            const totalMarks = m1 + m2 + m3 + m4 + m5;

            // Display result
            const resultElement = document.querySelector("#result");
            resultElement.innerHTML = `   
  <div class="row">
                    <div class="column">
                        <p>Name: ${name}</p>
                        <p>Age: ${age}</p>
                        <p>Class: ${className}</p>
                    </div>
                    <div class="column">
                        <p>Marks:</p>
                        <ul>
                            <li>m1: ${m1}</li>
                            <li>m2: ${m2}</li>
                            <li>m3: ${m3}</li>
                            <li>m4: ${m4}</li>
                            <li>m5: ${m5}</li>
                        </ul>
                        <p>Total marks: ${totalMarks}</p>
                    </div>
                </div>`;
        }
    