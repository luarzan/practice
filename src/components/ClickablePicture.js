import React,{useState} from 'react';

const ClickablePicture = ({img,imgClicked})=>{
    const [imgBg, setImgBg] = useState(img);
    const handleImg = ()=>{
        if(imgBg === img)
        setImgBg(imgClicked)
        else
        setImgBg(img)
    };
    const bg = {backgroundImage:`url(${imgBg})`}
    return(
    <div onClick={handleImg} className="ClickablePicture" style={bg}/>
    )
};
export default ClickablePicture;