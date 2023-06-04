function findMe(haystack, needle) {
  if(haystack.includes(needle)){
    return haystack.indexOf(needle);
  }
  return -1;
};

console.log(findMe('manpizza', 'pizza'));
console.log(findMe('great', 'omg'));
