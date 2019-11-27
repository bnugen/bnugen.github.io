//Script To Calculate Keto Macros for people on a Ketogenic Diet
//The equations used in the caluclator are based on the formulas
//presented on the following website https://www.cnet.com/how-to/how-to-track-your-macros-guide/

//This function calculates the users daily calorie limits, then displays them to the user.
function calculateCalories() {
  document.getElementById("totalGrams").style.display = "none";
  var dailyCalories = document.getElementById("dailyCalories").value;
  var carbRatio = document.getElementById("carbRatio").value;
  var fatRatio = document.getElementById("fatRatio").value;
  var proteinRatio = document.getElementById("proteinRatio").value;
  var totalRatio = (carbRatio * 1) + (fatRatio * 1) + (proteinRatio * 1);
 
  //Check to make sure no empty inputs
  if (dailyCalories <=0 || carbRatio <= 0 || fatRatio <= 0 || proteinRatio <= 0) {
    alert("Please enter values");
    return;
  }
 
//Display an alert if the user enters a value less than 1200, doctors recommend an individual eat at least 1200 calories a day.
 if (dailyCalories < 1200) {
	  alert("You should not eat less than 1200 calories a day!");
	  return;
  }

   //Check for valid macro precentages
  if (totalRatio != 100) {
	   alert("Make sure your daily precentages equal 100%");
	  return;
  }

  //Calculate Macros
  var carbCals = (dailyCalories * (carbRatio/100));
  var fatCals = (dailyCalories * (fatRatio/100));
  var proteinCals = (dailyCalories * (proteinRatio/100));
  
  //round results to two decimal places
  carbCals = Math.round(carbCals * 100) / 100;
  fatCals = Math.round(fatCals * 100) / 100;
  proteinCals = Math.round(proteinCals * 100) / 100;
    
  // //Make sure display results on show two decimal places
  carbCals = carbCals.toFixed(2);
  fatCals = fatCals.toFixed(2);
  proteinCals = proteinCals.toFixed(2);
   
  //Display the results to the user
  document.getElementById("totalCalories").style.display = "block";
  document.getElementById("carbCals").innerHTML = carbCals;
  document.getElementById("fatCals").innerHTML = fatCals;
  document.getElementById("proteinCals").innerHTML = proteinCals;

}

//This function calculates the users daily grams of food to be eaten.
function calculateGrams() {
document.getElementById("totalCalories").style.display = "none";  
  
  var dailyCalories = document.getElementById("dailyCalories").value;
  var carbRatio = document.getElementById("carbRatio").value;
  var fatRatio = document.getElementById("fatRatio").value;
  var proteinRatio = document.getElementById("proteinRatio").value;
  var totalRatio = (carbRatio * 1) + (fatRatio * 1) + (proteinRatio * 1);
  
//Check to make sure no empty inputs
  if (dailyCalories <=0 || carbRatio <= 0 || fatRatio <= 0 || proteinRatio <= 0) {
    alert("Please enter values");
    return;
  }

//Display an alert if the user enters a value less than 1200, doctors recommend an individual eat at least 1200 calories a day.
  if (dailyCalories < 1200) {
	  alert("You should not eat less than 1200 calories a day!");
	  return;
  }

  //Check for valid macro precentages
  if (totalRatio != 100) {
	   alert("Make sure your daily precentages equal 100%");
	  return;
  }
  
  //Calculate Daily Grams
  var carbCals = (dailyCalories * (carbRatio/100));
  var fatCals = (dailyCalories * (fatRatio/100));
  var proteinCals = (dailyCalories * (proteinRatio/100));
 
  //round result to two decimal places
  carbCals = Math.round(carbCals * 100) / 100;
  fatCals = Math.round(fatCals * 100) / 100;
  proteinCals = Math.round(proteinCals * 100) / 100;
 
  var carbGrams = (carbCals / 4);
  var fatGrams =  (fatCals / 9);
  var proteinGrams = (proteinCals / 4);

  //round result to two decimal places
  carbGrams = Math.round(carbGrams * 100) / 100;
  fatGrams = Math.round(fatGrams * 100) / 100;
  proteinGrams = Math.round(proteinGrams * 100) / 100;
    
  //Make sure display results on show two decimal places
  carbGrams = carbGrams.toFixed(2);
  fatGrams = fatGrams.toFixed(2);
  proteinGrams = proteinGrams.toFixed(2);
  
  
  //Display the results to the user
  document.getElementById("totalGrams").style.display = "block";
  document.getElementById("carbGrams").innerHTML = carbGrams;
  document.getElementById("fatGrams").innerHTML = fatGrams;
  document.getElementById("proteinGrams").innerHTML = proteinGrams;

}

//Hide the results on page load
document.getElementById("totalCalories").style.display = "none";
document.getElementById("totalGrams").style.display = "none";

//Function called when the user clicks the "Show Calories" button
document.getElementById("calorieCalculate").onclick = function() {
  calculateCalories();

};

//Function called when the user clicks the "Show Grams" button
document.getElementById("gramCalculate").onclick = function() {
  calculateGrams();

};