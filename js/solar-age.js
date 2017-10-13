export class SolarAge {
  constructor(){
    this.birthday;
    this.now;
    this.secondsAge;
    this.earthYearsAge;
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    this.jupiterAge;
  }


// accepts age in format mm/dd/yyyy
  ageInSeconds(birthday,now ){
    let birthdayArray = birthday.split("/")
    let nowArray = now.split("/")
    let birthdayMonth = parseFloat(birthdayArray[0])
    let birthdayDay = parseFloat(birthdayArray[1])
    let birthdayYear = parseFloat(birthdayArray[2])
    let nowMonth = parseFloat(nowArray[0])
    let nowDay = parseFloat(nowArray[1])
    let nowYear = parseFloat(nowArray[2])
    let yearsAlive = nowYear - birthdayYear
    let monthsAlive = nowMonth - birthdayMonth
    let daysAlive = this.earthYearsToDays(yearsAlive) + this.earthMonthsToDays(monthsAlive)  + (nowDay - birthdayDay)
    let secondsAge = this.earthDaysToSeconds(daysAlive)
    this.secondsAge = secondsAge
    this.earthYearsAge = this.earthAgeSecondsToYears(secondsAge)
    // debugger;
    return secondsAge
  };
  // birthday(birthday){
  //   this.birthday = birthday
  // }
  // now(now){
  //   this.now = now
  // }

  earthMonthsToDays(months){
    let days = months * 30.5
    return days

  };

  earthYearsToDays(years){
    let days = years * 365.0
    return days
  };
  earthDaysToSeconds(days){
    let seconds =  days * 60.0 * 60.0 * 24.0
    return seconds
  };

  earthAgeSecondsToYears(seconds){
    let years = seconds/ (60*60*24*365)
    return years
  }

  ageInMercuryYears(earthYears){
    let mercuryAge = earthYears / .24
    this.mercuryAge = mercuryAge
    return mercuryAge;
  };

  ageInVenusYears(earthYears){
    let venusAge = earthYears / .62
    this.venusAge = venusAge
    return venusAge;
  }

  ageInMarsYears(earthYears){
    let marsAge = earthYears / 1.88
    this.marsAge = marsAge
    return marsAge;
  }

  ageInJupiterYears(earthYears){
    let jupiterAge = earthYears / 11.86
    this.jupiterAge = jupiterAge
    return jupiterAge;
  }


  planetaryAges(earthYears){
    this.ageInMercuryYears(earthYears);
    this.ageInVenusYears(earthYears);
    this.ageInMarsYears(earthYears);
    this.ageInJupiterYears(earthYears);
  }



};
