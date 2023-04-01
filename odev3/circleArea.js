
const circleArea = (radius) => {
  const area = Math.PI * Math.pow(radius, 2);
  console.log(`Yarıçapı ${radius} olan dairenin alanı : ${area}'dır.`);
};


module.exports = { circleArea };