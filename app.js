//celsius to fahrenheit calculetor method (0°C × 9/5) + 32 = 32°F 

var celInput = parseFloat(prompt("Input your Celsius value here: "));

var output =  (celInput * 9/5) + 32;

output = output.toFixed(2);
document.write("Your Fahrenheit value is: " + output);