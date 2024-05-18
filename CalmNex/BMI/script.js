function calculateBMI() {
    var heightInput = document.getElementById("height").value;
    var weightInput = document.getElementById("weight").value;
  
    // Convert height to meters
    var heightInMeters = heightInput / 100;
  
    // Calculate BMI
    var bmi = weightInput / (heightInMeters * heightInMeters);
  
    // Display result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your BMI is: " + bmi.toFixed(2);
  
    // Determine weight category
    var weightCategory;
    if (bmi < 18.5) {
      weightCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      weightCategory = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      weightCategory = "Overweight";
    } else {
      weightCategory = "Obese";
    }
  
    // Add weight category to the result
    resultElement.innerHTML += "<br>Your weight category: " + weightCategory;
  }
  