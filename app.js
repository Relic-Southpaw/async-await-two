// part 1 Number Facts
let favNum = 4
async function numOne() {
    let res = await $.getJSON(`http://numbersapi.com/${favNum}?json`)
    console.log(res);
}

let numsFacts = [1, 2, 3]
async function numTwo() {
    let res = await $.getJSON(`http://numbersapi.com/${numsFacts}?json`);
    console.log(res)
    for(let i = 1;i<=(numsFacts.length);i++){
        $('#numOl').append(`<li>${res[i]}</li>`)
    }
}
// numThree()
async function numThree() {
    let facts = await Promise.all(
      Array.from({ length: 4 }, () => $.getJSON(`http://numbersapi.com/${favNum}?json`))
    );
    facts.forEach(res => {
      $('#numUl').append(`<li>${res.text}</li>`);
    });
  }
numOne()
numTwo()
numThree()