import { SolarAge } from './../js/solar-age.js';


describe('SolarAge', function(){
  let solarAge

  beforeEach(function(){
     solarAge = new SolarAge()
    });

  it('should take a persons age and convert it to seconds', function(){
    // let solarAge = new SolarAge()
    expect(solarAge.ageInSeconds("11/17/1989",'11/18/1989')).toEqual(86400)
  });
  it('should return the age of a human in Mercury years', function(){
    expect(solarAge.ageInMercuryYears(1.0)).toEqual(1/.24 )
  });
  it('should return the age of a human in Venus years', function(){
    expect(solarAge.ageInVenusYears(1.0)).toEqual(1/.62 )
  });
  it('should return the age of a human in Mars years', function(){
    expect(solarAge.ageInMarsYears(1.0)).toEqual(1/1.88 )
  });
  it('should return the age of a human in Jupiter years', function(){
    expect(solarAge.ageInJupiterYears(1.0)).toEqual(1/11.86)
  });



});
