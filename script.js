function checkPass() {
    // Retrieve values from input fields
    let assignment1 = parseInt(document.getElementById('assignment1').value);
    let assignment2 = parseInt(document.getElementById('assignment2').value);
    let midTerm = parseInt(document.getElementById('midTerm').value);

    // Get the result element
    let resultElement = document.getElementById('result');

    // Validate if all fields are filled
    if (isNaN(assignment1) || isNaN(assignment2) || isNaN(midTerm)) {
        resultElement.innerHTML = "Please fill in all marks!";
        resultElement.style.color = "yellow";
        return;
    }

    // Check if the marks pass the criteria
    let assignmentPass1 = assignment1 >= 15;
    let assignmentPass2 = assignment2 >= 15;
    let midTermPass = midTerm >= 15;

    if (assignmentPass1 && assignmentPass2 && midTermPass) {
        resultElement.innerHTML = "Congratulations! You passed all components.";
        resultElement.style.color = "limegreen";
    } else {
        resultElement.innerHTML = "Sorry, you failed. Please check your marks.";
        resultElement.style.color = "red";
    }
}
