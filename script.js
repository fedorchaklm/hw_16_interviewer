const questionsList = [
  { question: "How much will 2+2 be?", type: "prompt", expected: "4" },
  { question: "Does the sun rise in the east?", type: "confirm", expected: true},
  { question: "How much will 5 / 0 be?", type: "prompt", expected: "infinity"},
  { question: "What color is the sky?", type: "prompt", expected: "blue"},
  { question: "What is the correct answer to the main question of life, the universe and everything?", type: "prompt",expected: "42"}
];

let points = 0;

for (const item of questionsList) {
  const { expected, question, type } = item;
  const answer = type === "prompt" ? prompt(question) : confirm(question);
  points += answer === expected ? 10 : 0;
}

alert(`Your result is ${points} points.`);

