const phrases = [
  "It is our choices, Harry, that show what we truly are, far more than our abilities. -Harry Potter and the Chamber of Secrets",
  "The only thing we have to fear is fear itself. -Franklin D. Roosevelt's Inaugural Address",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. -Ralph Waldo Emerson",
  "The only way out of the labyrinth of suffering is to forgive. -Looking for Alaska",
  "So we beat on, boats against the current, borne back ceaselessly into the past. -The Great Gatsby",
  "To be, or not to be, that is the question. -Hamlet",
  "It does not do to dwell on dreams and forget to live. -Harry Potter and the Sorcerer's Stone",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
  "The only book that people of all ages nod at and say, 'Yep, that's the way it is.' -To Kill a Mockingbird",
  "The world breaks everyone, and afterward, some are strong at the broken places. -A Farewell to Arms",
  "In three words I can sum up everything I've learned about life: it goes on. -Robert Frost",
  "The fault, dear Brutus, is not in our stars, but in ourselves. -Julius Caesar",
  "I am no bird, and no net ensnares me: I am a free human being with an independent will. -Jane Eyre",
  "There is no greater agony than bearing an untold story inside you. -I Know Why the Caged Bird Sings",
  "Life appears to me too short to be spent in nursing animosity or registering wrongs. -Jane Eyre"
]

const bookPhrase = () => {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)]
  console.log(`\x1b[34m${phrase}\x1b[89m`)
}

module.exports = {
  bookPhrase
}
