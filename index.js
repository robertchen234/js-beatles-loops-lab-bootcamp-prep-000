// add solution here
function theBeatlesPlay(musicians, instruments) {
  let list = []
  for (let index = 0; index < musicians.length; index++) {
    list.push(musicians[index] + ' plays ' + instruments[index])
  }
  return list
}

function johnLennonFacts(facts) {
  let yellFacts = []
  let index = 0
  while (index < facts.length) {
    yellFacts.push(facts[index] + '!!!')
    index++
  }
  return yellFacts
}

/*
function iLoveTheBeatles(num) {
    var array = [];
    do {
      array.push("I love the Beatles!");
      num++;
    } while (num < 15);
    return array;
}
*/