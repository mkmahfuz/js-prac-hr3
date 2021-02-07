fetch('https://restcountries.eu/rest/v2/name/united')
.then(response=>response.json())
.then(data=>displayCountry(data))

function displayCountry(data) {
    console.log(data);
    // data.forEach(item=>{
    //     const countryName = item.name;
    //     const countryCapital = item.capital;
    //     //console.log(item.name);
    //     //console.log(item.capital)
    //     console.log(countryCapital)
    //     showData(countryName,countryCapital);
// });
    const countryName = data[1].name;
    const countryCapital = data[1].capital;
    console.log(countryCapital)
    showData(countryName,countryCapital);
    
    
}

//required items
const country = document.getElementById("country-name");
const capital = document.getElementById("country-capital");
const test1 = document.getElementById("test1");
country.addEventListener("click",showCapital);
function showData(countryName,countryCapital){
    country.innerText = countryName;    
}


function showCapital() {
    console.log("helo")
    capital.innerText = data[1].capital;    
}