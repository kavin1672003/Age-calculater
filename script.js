function calculateAge() {
    // Get the input values
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const year = document.getElementById("year").value;
  
    // Calculate age
    const dob = new Date(`${month}/${day}/${year}`);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
  
    // Display the result
    document.getElementById("result").value = `Your age is ${age} years.`;
  }
  