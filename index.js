// QUESTION 1

function InstagramPost(
  authorHandle,
  content,
  imageLink,
  numberViews,
  numberLikes
) {
  this.authorHandle = authorHandle
  this.content = content
  this.imageLink = imageLink
  this.numberViews = numberViews
  this.numberLikes = numberLikes
}

// QUESTION 2

const post1 = new InstagramPost(
  'ella',
  'welcome to my page',
  'www.imageLink/qohqicnoiq/post.jpeg',
  30000,
  40000
)

const post2 = new InstagramPost(
  'ella_lawrie',
  'cats and moots',
  'www.imageLink/qohqicnoiq/post.jpeg',
  20000,
  40000
)

// QUESTION 3
// Question 3a
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  }
}
const personMusa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State')

// Question 3b
function createJambScores(eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
  }
}
const musaJambScores = createJambScores(70, 85, 82, 94)

// QUESTION 4
// - Use the spread operator.
// - Call the Object.assign() function.
// - Use JSON parsing.
// - Use the structuredClone() function.
//Examples of each
const data = { name: 'Ella', age: 12 }
// 1
const copy1 = { ...data }
// 2
const copy2 = Object.assign({}, data)
// 3
const copy3 = JSON.parse(JSON.stringify(data))
// 4
const copy4 = structuredClone(data)

// QUESTION 5
const presidentialCandidates = {
  AAC: 'Omoyele Sowore',
  ACCORD: 'Christopher Imumolen',
  APC: 'Bola Ahmed Tinubu',
  LP: 'Pter Obi',
  NNPP: 'Rabiu Kwankwaso',
  PDP: 'Atiku Abubakar',
}

for (party in presidentialCandidates) {
  console.log(
    `${presidentialCandidates[party]} is the presidential candiate of ${party}`
  )
}
