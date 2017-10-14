(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SolarAge = exports.SolarAge = function () {
  function SolarAge() {
    _classCallCheck(this, SolarAge);

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


  _createClass(SolarAge, [{
    key: "ageInSeconds",
    value: function ageInSeconds(birthday, now) {
      var birthdayArray = birthday.split("/");
      var nowArray = now.split("/");
      var birthdayMonth = parseFloat(birthdayArray[0]);
      var birthdayDay = parseFloat(birthdayArray[1]);
      var birthdayYear = parseFloat(birthdayArray[2]);
      var nowMonth = parseFloat(nowArray[0]);
      var nowDay = parseFloat(nowArray[1]);
      var nowYear = parseFloat(nowArray[2]);
      var yearsAlive = nowYear - birthdayYear;
      var monthsAlive = nowMonth - birthdayMonth;
      var daysAlive = this.earthYearsToDays(yearsAlive) + this.earthMonthsToDays(monthsAlive) + (nowDay - birthdayDay);
      var secondsAge = this.earthDaysToSeconds(daysAlive);
      this.secondsAge = secondsAge;
      this.earthYearsAge = this.earthAgeSecondsToYears(secondsAge);
      // debugger;
      return secondsAge;
    }
  }, {
    key: "earthMonthsToDays",

    // birthday(birthday){
    //   this.birthday = birthday
    // }
    // now(now){
    //   this.now = now
    // }

    value: function earthMonthsToDays(months) {
      var days = months * 30.5;
      return days;
    }
  }, {
    key: "earthYearsToDays",
    value: function earthYearsToDays(years) {
      var days = years * 365.0;
      return days;
    }
  }, {
    key: "earthDaysToSeconds",
    value: function earthDaysToSeconds(days) {
      var seconds = days * 60.0 * 60.0 * 24.0;
      return seconds;
    }
  }, {
    key: "earthAgeSecondsToYears",
    value: function earthAgeSecondsToYears(seconds) {
      var years = seconds / (60 * 60 * 24 * 365);
      return years;
    }
  }, {
    key: "ageInMercuryYears",
    value: function ageInMercuryYears(earthYears) {
      var mercuryAge = earthYears / .24;
      this.mercuryAge = mercuryAge;
      return mercuryAge;
    }
  }, {
    key: "ageInVenusYears",
    value: function ageInVenusYears(earthYears) {
      var venusAge = earthYears / .62;
      this.venusAge = venusAge;
      return venusAge;
    }
  }, {
    key: "ageInMarsYears",
    value: function ageInMarsYears(earthYears) {
      var marsAge = earthYears / 1.88;
      this.marsAge = marsAge;
      return marsAge;
    }
  }, {
    key: "ageInJupiterYears",
    value: function ageInJupiterYears(earthYears) {
      var jupiterAge = earthYears / 11.86;
      this.jupiterAge = jupiterAge;
      return jupiterAge;
    }
  }, {
    key: "planetaryAges",
    value: function planetaryAges(earthYears) {
      this.ageInMercuryYears(earthYears);
      this.ageInVenusYears(earthYears);
      this.ageInMarsYears(earthYears);
      this.ageInJupiterYears(earthYears);
    }
  }]);

  return SolarAge;
}();

;

},{}],2:[function(require,module,exports){
'use strict';

var _solarAge = require('./../js/solar-age.js');

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    var solarAge = new _solarAge.SolarAge();
    var birthday = $('#birthday').val();
    var date = new Date();
    var formattedDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

    var ageInSeconds = solarAge.ageInSeconds(birthday, formattedDate);
    var ageInYears = solarAge.earthYearsAge;
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

},{"./../js/solar-age.js":1}]},{},[2]);
