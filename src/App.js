import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';



  const cardSource = [
    {src:'/img/helmet-1.png'},
    {src:'/img/potion-1.png'},
    {src:'/img/ring-1.png'},
    {src:'/img/scroll-1.png'},
    {src:'/img/shield-1.png'},
    {src:'/img/sword-1.png'}
  ];
  
function App() {
  
  const [cards,setCards] = useState([...cardSource,...cardSource]
    .map((card)=>({id:Math.random(),...card})));
  const [turn,setTurn] = useState(0);
  const [clickOne,setClickOne] = useState(null);
  const [clickTwo,setClickTwo] = useState(null);

  const shuffleCards = ()=>{
    const newCards = [...cardSource,...cardSource]
      .map((card)=>({id:Math.random(),...card}))
      .sort(()=>Math.random() - 0.5);
    setCards(newCards);  
    setTurn(0);
  }
  
  const handleCard = (card)=>{
    console.log(card.src)
    clickOne ? setClickTwo(card) : setClickOne(card);
  }

  useEffect(()=>{
    if(clickOne&&clickTwo){
      if(clickOne.src === clickTwo.src){
          console.log('match');
          console.log(turn)
          setClickOne(null);
          setClickTwo(null);
          setTurn(prevTurn=>prevTurn+1)
      }
      else{
        console.log('not match')
      }
    }
   
  },[clickOne,clickTwo]);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card)=>(
          <Card key={card.id} 
          card={card}
          handleCard={()=>handleCard(card)}/>
        ))}
      </div>
    </div>
  );
}

export default App