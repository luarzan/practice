import React,{useState} from 'react';

const LikeButton = ({value,onPush,colors})=>{
    const [color,setColor] = useState("")
    const sum = ()=>{
        setColor(colors[Math.floor(Math.random() * colors.length - 1)])
        onPush(value + 1);
    }
    return(
        <button style={{backgroundColor:color}} onClick={sum} className="LikeBtn">
            {value}
        </button>
    )

};
export default LikeButton;