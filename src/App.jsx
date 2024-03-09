import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  
  const QnA = [
    { 
      question:"In Castle in the Sky, what is the name of the floating city that the characters are searching for?",
      answer: "Laputa"
    },
    {
      question:"Which Studio Ghibli movie was inspired by the children’s book The Borrowers, a story about tiny people living secretly in the homes of humans?",
      answer:"The Secret World of Arrietty"
    },
    {
      question:"In Kiki’s Delivery Service, what kind of animal is Kiki’s familiar, Jiji?",
      answer:"A cat"
    },
    {
      question:"Which Studio Ghibli movie is about a boy who befriends a fish with a human face?",
      answer:"Ponyo",
    },
    {
      question:"In Spirited Away, what does the main character Chihiro’s name mean in Japanese?",
      answer:"A thousand springs"
    },
    {
      question:"Which Studio Ghibli movie tells the story of a man who dreams of flying and becomes an aircraft designer?",
      answer:"The Wind Rises"
    },
    {
      question:"In Howl’s Moving Castle, what does Howl do for a living?",
      answer:"He's a wizard"
    },
    {
      question:"Who is the main villain in Princess Mononoke?",
      answer:"Lady Eboshi"
    },
    {
      question:"What are the giant insects called that Nausicaa communicates with?",
      answer:"Ohmu"
    },
    {
      question:"How many legs does the Catbus have in My Neighbour Totoro?",
      answer:"12"
    },
  ]

  const [currentQuestionIndex, setQuestion] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const updateCard = () => {

      const randomIndex = Math.floor(Math.random() * QnA.length);
      setQuestion(randomIndex);
      setIsFlipped(false)
  }

  return (
    <div className = "App">
      <div className = "container">
        <h1>Ghibli's Academic Weapon</h1>
        <h2>Test your Ghibli Studio movie's knowledge here!</h2>
        <h3>Number of Cards: {QnA.length}</h3>
        <Card 
        question={QnA[currentQuestionIndex].question} 
        answer={QnA[currentQuestionIndex].answer} 
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
        />
        <br></br>
        <button onClick={updateCard}>Next</button>
      </div>
    </div>
  )
}

export default App
