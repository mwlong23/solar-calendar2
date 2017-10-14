import { SolarAge } from './../js/solar-age.js';

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    let solarAge = new SolarAge;
    let birthday = $('#birthday').val();
    let date = new Date;
    let formattedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

    let ageInSeconds = solarAge.ageInSeconds(birthday,formattedDate);
    let ageInYears = solarAge.earthYearsAge;
    solarAge.planetaryAges(ageInYears);

    $('#age-in-seconds').text(ageInSeconds);
    $('#mercury').text(solarAge.mercuryAge);
    $('#venus').text(solarAge.venusAge);
    $('#mars').text(solarAge.marsAge);
    $('#jupiter').text(solarAge.jupiterAge);
    $('#entry-form').hide();
    $('#results').show();
  });
});
