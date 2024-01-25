const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];
let gg1 = document.querySelector("#pw1");
let gg2 = document.querySelector("#pw2");
  function generating(){
    gg1.textContent = get15();
    gg2.textContent = get15();
  }

  function getRandom(){
    let ola = Math.floor(Math.random() * characters.length);
    return ola;
  }


  function get15(){
    let varg = "";
    for(let i = 0; i <15; i++){
      varg += characters[getRandom()];
    }
    return varg;
  }

  get15();
  get15();
