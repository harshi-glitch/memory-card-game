import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";

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
  return(
    <div className="app">
      <GameHeader score={23} moves={10}/>

      <div className="card-grid">
        {cardValues.map((card) => (
            <Card  card={card} />
        ))}
      </div>
       
    </div>
  )
}

export default App;
