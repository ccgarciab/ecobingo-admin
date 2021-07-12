function getRandom(arr, n) {
  var result = new Array(n),
  len = arr.length,
  taken = new Array(len);
  if (n > len){

    throw new RangeError("getRandom: taking too much");
  }

  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function range(a, b, step){

  if(b === undefined){

    b = a;
    a = 0;
  }
  if(step === undefined){

    step = 1;
  }

  let result = [];

  for(let i = a; i < b; i += step){

    result.push(i);
  }

  return result;
}

function getRandomCard(){

  let placeholder = [];

  for(let l of "BINGO"){

    placeholder.push(getRandom(codesByLetter[l], 5));
  }

  let codes = [];

  for(let i = 0; i < 5; ++i){

    for(let sublist of placeholder){

      codes.push(sublist[i]);
    }
  }
  
  return codes;
}

function getRandomCode(){

  let [l] = getRandom("BINGO", 1);
  let [code] = getRandom(codesByLetter[l], 1);
  return code;
}

let codesByLetter = {};

for(let i = 0; i < 5; ++i){

  let [l, n] = ["BINGO"[i], i * 15 + 1];
  codesByLetter[l] = range(n, n + 15).map((m) => `${l}${m}`);
}

let allCodes = [];

for(let i = 0; i < 5; ++i){

  let [l, n] = ["BINGO"[i], i * 15 + 1];
  allCodes = allCodes.concat(range(n, n + 15).map((m) => `${l}${m}`));
}

export {getRandomCard, getRandomCode, allCodes};
