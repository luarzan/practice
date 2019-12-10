import React,{useState,useEffect,useCallback} from 'react';

const Carousel = ({imgs})=>{
    const [counter,setCounter] = useState(0)
    const [image,setImage] = useState(imgs[counter])

    useEffect(() => {
       setImage(imgs[counter])
    }, [counter]);

    const goLeft = useCallback(()=>{
        if(counter >=0)
        setImage(imgs[setCounter(counter - 1)])
    },[counter]);

    const goRight = useCallback(()=>{
        console.log(counter);
        setImage(imgs[setCounter(counter + 1)])
    },[counter]);

    const bg = {backgroundImage:`url(${image})`}
    
    return(
        <div className="Carousel">
            <button disabled={!(counter > 0)} onClick={goLeft}>
                LEFT
            </button>
                <div className="Carousel-img" style={bg}/>
            <button disabled={!(counter < imgs.length - 1)} onClick={goRight}>
                RIGHT
            </button>
        </div>
    )
};
export default Carousel;