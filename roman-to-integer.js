
symbols = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

var romanToInt = function (s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    console.log('a==',s[i], symbols[s[i]], 'b==', s[i+1], symbols[s[i + 1]])
    if (symbols[s[i]] < symbols[s[i + 1]]) {
      console.log(' B  is bigger');
    } else {
      console.log('A is bigger');
    }
    symbols[s[i]] < symbols[s[i + 1]] ? value -= symbols[s[i]] : value += symbols[s[i]]
    console.log('value', value)
  }
  return value
};

romanToInt('MCMXCIV')
