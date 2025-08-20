function submitData() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // imaginary data storage

    if (!name || !email) {
        alert("Please fill in both your name and email.");
        return;
    }
    else{
        alert("Your data has been submitted!");}
}