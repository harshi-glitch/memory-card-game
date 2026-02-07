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
  const [matchedCards, setMatchedCards] = useState([]);

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
        setTimeout(() => {
        setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
        
        

    setCards((prev) => 
      prev.map((c) => {
      if (c.id === card.id || c.id === firstCard.id) {
        return {...c, isMatched: true};
      } else {
          return c;
      }
    })
    );
    setFlippedCards([]);
      }, 500);

      } else {
        // flip back card1 and card 2 
        
        setTimeout(() => {

        
        const flippedBackCard = newCards.map((c) => {
            if (newFlippedCards.includes(c.id) || c.id === card.id) {
              return {...c, isFlipped: false};
            } else {
              return c;
            }
        });

        setCards(flippedBackCard);

        setFlippedCards([]);
        }, 1000);
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
