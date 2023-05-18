import './card.css'

export default function Card({ card,handleCard }){
    return (
        <div className='card'>
            <img className="front" src={card.src} alt="front card"/>  
            <img className="back" src="/img/cover.png" alt="back card" 
            onClick={handleCard}/>
        </div>
    ) 
}