import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

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
  const {cards, score, moves, initializeGame, handleCardClick, isGameComplete} = useGameLogic (cardValues)
  return(
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame}/>

      {isGameComplete && <WinMessage moves = {moves} />}

      <div className="card-grid">
        {cards.map((card) => (
            <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
       
    </div>
  )
}

export default App;
