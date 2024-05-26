const copyrightElement = document.getElementById('copyright');
const lastModifiedElement = document.getElementById('last-modified');

const currentYear = new Date().getFullYear();
copyrightElement.textContent = `Copyright © ${currentYear} 🌴 Jose Manuel Rodas 🌴 La Paz, Bolivia`;

lastModifiedElement.textContent = `Document last modified: ${document.lastModified}`;



const temperature = 20; 
const windSpeed = 5; 

const windchillFormula = (temp, windSpeed) => {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
};

let windChill;
if (temperature <= 10 && windSpeed > 4.8) {
  windChill = windchillFormula(temperature, windSpeed).toFixed(1); 
} else {
  windChill = "N/A";
}

const windChillElement = document.getElementById("wind-chill");
windChillElement.textContent = windChill + "°C";
