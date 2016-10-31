const Pure = {
  // lowest & highest not refactored for DRY to allow for future modifications and edgecase handling
  // These two are highly similar now, but I'm not sure they'd stay that way
  lowestGrade: function (arr) {
    return arr.reduce((preValue, curValue) => {
      if (preValue >= curValue) {
        return curValue;
      } else {
        return preValue;
      }
    });
  },

  highestGrade: function(arr) {
    return arr.reduce((preValue, curValue) => {
      if (preValue <= curValue) {
        return curValue;
      } else {
        return preValue;
      }
    });
  },

  averageGrade: function(arr) {
    let total = arr.reduce((preValue, curValue) => {
      return preValue + curValue;
    })
    let rawAverage = total / arr.length;
    return Math.round(rawAverage * 100) / 100;
  },

  flattenGrades: function(fullArray) {
    let flattened = [];
    fullArray.forEach((item) => {
      flattened.push(item.Grade)
    })
    return flattened;
  },

  // No idea why I can't have this function ootb, Javascript
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

}


export default Pure;
