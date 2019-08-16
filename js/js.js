function toCelsius(fahrenheit){
    fahrenheit = window.prompt("Enter a degree in Fahrenheit");
    /* 
    trim method will remove the white spaces in the input if there is any
    and compare with the empty string 
    to check wether the user entered a value or not
    */
    if (fahrenheit.trim() == ''){
        fahrenheit = alert("You didn't enter a value");
    }
    if (fahrenheit.trim() != ''){
        result = (5/9) * (fahrenheit-32);
        document.getElementById("result").innerHTML = result + " &deg;C"
    }
}

function toFahrenheit(celsius){
    celsius = window.prompt("Enter a degree in Celsius");
    if (celsius.trim() == ''){ 
        celsius = alert("You didn't enter a value");
    }
    if (celsius.trim() != ''){
        result = (celsius * (9/5)) +32;
        document.getElementById("result").innerHTML = result + " &deg;F"
    }
}