const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (keyword) => {
  let output = 0
  const data1 = await promiseTheaterIXX()
  const data2 = await promiseTheaterVGC();

  const combinedData = data1.concat(data2)

  combinedData.forEach(item => {
    if (item.hasil === keyword) {
      output++
    }
  });

  return output
}

module.exports = {
  promiseOutput,
};
