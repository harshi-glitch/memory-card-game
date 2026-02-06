import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";

const cardValues = [
  "🍇",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🍒",
  "🍓",
  "🍇",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🍒",
  "🍓",
];




function App(){
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([]);

const initializeGame = () => {
  //for shuffling the cards

  const finalCards = cardValues.map((value, index) => (
    {
      id:index,
      value,
      isFlipped: false,
      isMatched: false,
    }
  ));

  setCards(finalCards);
  
  };

  useEffect(() => {
    initializeGame();
  }, [])

  const handleCardClick = (card) => {
    // don't allow clicking if card is already flipped, matched
    if (card.isFlipped || card.isMatched){
      return;
    }

    // update card flipped state
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return {...c, isFlipped: true};
      } else {
          return c;
      }
    });

    setCards(newCards);

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    // check for match if two cards are flipped

    if (newFlippedCards.length === 2) {
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value === card.value) {
        alert("matched")
      }

    }
  };

  return(
    <div className="app">
      <GameHeader score={23} moves={10}/>

      <div className="card-grid">
        {cards.map((card) => (
            <Card  card={card} onClick={handleCardClick} />
        ))}
      </div>
       
    </div>
  )
}

export default App;
