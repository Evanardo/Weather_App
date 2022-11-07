const apiKey = "120332d188132ff07663d436850d8432";
// const form = document.querySelector(".cityForm");
// const input = document.querySelector(".cityForm input");
// const list = document.querySelector(".cityOutput .cityWeather")

// form.addEventListener("submit", event =>{
//     event.preventDefault();
//     let inputVal = input.value;
// })

// const pathURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

// fetch(pathURL)
//     .then(res => res.json())
//     .then(data =>{
//         const {main, name, sys} = data;
//         const li = document.createElement("li");
//         li.classList.add("city");
//         const itemMaker = 
//         `<h2 class="city-name" data-name="${name},${sys.country}">
//           <span>${name}</span>
//           <sup>${sys.country}</sup>
//         </h2>
//         <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>`;
//         li.innerHTML = itemMaker;
//         list.appendChild(li);
//     })
//     .catch(()=> {
//         alert("The city you've entered was not found. Please try again.")
//     });
//     form.reset();
//     input.focus();



// function convert(val){
//     return ((val - 273)× 9/5 + 32).toFixed(2)
// };
let form = document.querySelector('.something');
form.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event.value)
    let cityInputs = document.getElementById('cityInput').value;
    console.log(cityInputs);
    getCityOutput(cityInputs);
    // form.reset();
});

let getCityWeather = async (cityInputs) => {
    try {
        // const apiKey = "120332d188132ff07663d436850d8432";
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputs}&appid=${apiKey}&units=imperial`);
        // console.log(response.data)
        return response.data;
    }
    catch (error) {
        alert("You've entered the city incorrectly.");
    }
};

let getCityOutput = async (cityInputs) => {
    let data = await getCityWeather(cityInputs);
    console.log(data);
    let cityWeather = `${data['name']}`+` ${data['main']['temp']} F `+`${data['weather'][0]['description']} `;
    document.getElementById('cityOutput').insertAdjacentHTML('afterbegin', cityWeather);
};

let clearCityData = () => {
    document.getElementById('cityOutput').innerHTML = '';
};


// btn.addEventListener('submit', function(){
//         fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&appid='+apiKey)
//         .then((res) => { return res.json() })
//         .then(data => {
//             cityOutput.innerHTML`${data['name']}`
//             temp.innerHTML = `${data['main']['temp']}`
//         })
//         .catch(error => alert("You've entered the city incorrectly."));
// });