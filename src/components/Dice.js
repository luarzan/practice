import React,{useState} from 'react';
import diceEmpty from '../assets/img/dice-empty.png';
import dice1 from '../assets/img/dice1.png';
import dice2 from '../assets/img/dice2.png';
import dice3 from '../assets/img/dice3.png';
import dice4 from '../assets/img/dice4.png';
import dice5 from '../assets/img/dice5.png';
import dice6 from '../assets/img/dice6.png';

const Dice = ()=>{
    const diceImages = [dice1,dice2,dice3,dice4,dice5,dice6];

    const [imgBg,setImgBg] = useState(diceImages[Math.floor(Math.random() * (diceImages.length - 1))]);
   
    const generateRandomImg = ()=>{
        setImgBg(diceImages[Math.floor(Math.random() * (diceImages.length - 1))])
    }
    const bg = {backgroundImage:`url(${imgBg})`}
    
    const handleDiceNumber = ()=>{
             setImgBg(diceEmpty)
             setTimeout(()=>{
                 generateRandomImg();
                 },1000);
    }

    return(
        <div onClick={handleDiceNumber} className="Dice"  style={bg}/>
    )
};
export default Dice;