const sumaDeArray = (arr1, arr2) => {
  var r = [];
  for (i = 0; i < arr1.length; i++) {
    r[i] = arr1[i] + arr2[i];
  }
  return r;
};
const stringToArray = (string) => {
  const quitarTag = [
    "el",
    "los",
    "la",
    "las",
    "lo",
    "un",
    "una",
    "unos",
    "unas",
    "a",
    "ante",
    "cabe",
    "contra",
    "de",
    "desde",
    "durante",
    "en",
    "hacia",
    "hasta",
    "mediante",
    "por",
    "según",
    "segun",
    "so",
    "sobre",
    "tras",
    "versus",
  ];
  let arrayTag = string
    .toLowerCase()
    .split(" ")
    .filter((tag, index) => {
      if (tag !== "" && !quitarTag.includes(tag)) return tag;
    });
  arrayTag = arrayTag.filter((tag, index) => {
    return arrayTag.indexOf(tag) === index;
  });
  arrayTag = arrayTag.map((tag) => `%${tag}%`);
  arrayTag.unshift(`%${string}%`);
  return arrayTag;
};

module.exports = { sumaDeArray, stringToArray };
