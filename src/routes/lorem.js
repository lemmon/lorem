import { loremIpsum } from 'lorem-ipsum'

export default function lorem() {
  return loremIpsum({
    count: rand(3, 5),
    format: 'plain',
    paragraphLowerBound: 3,
    paragraphUpperBound: 7,
    random: Math.random,
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
    suffix: '\n',
    units: 'paragraphs',
  })
}

function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}
