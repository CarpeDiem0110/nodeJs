const circleCircumference = (radius) => {
    const circleCircumference = 2 * Math.PI * radius;
    console.log(
      `Yarıçapı ${radius} olan dairenin çevresi : ${circleCircumference}'dır.`
    );
  };

module.exports = {circleCircumference};