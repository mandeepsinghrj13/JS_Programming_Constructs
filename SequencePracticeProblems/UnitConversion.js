//Question-04 Unit Conversion
{
  //given 1ft = 12 in 42 in = ? ft
  console.log("The 42 inch in feet  = " + 42 / 12);

  //1 sq  ft  = 0.092903 sq meters
  //Rectangular Plot of 60 feet x 40 feet in meters
  let area_in_meters = 60 * 40 * 0.092903;
  console.log("Area of rectangular plot is " + 60 * 40 * 0.092903);

  //Calculate area of 25 such plots in acres
  let area_of_25_plots = area_in_meters * 25;
  console.log("Area of 25 plots in acres = " + area_of_25_plots * 0.000247105);
}
