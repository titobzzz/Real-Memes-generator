
import React from "react"

export default function Sec(){
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/345v97.jpg"
    })
    const[allMemes, setAllMemes]=React.useState([])

    function getMemesImage(){
        const memes = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memes.length)
        const link = memes[randomNumber].url
       
        setMeme(prevState=>({
            ...prevState,
            randomImage:link}))
    }

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemes(data))
    },[allMemes])

    function  handleChange (event){   
        const {name,value}=event.target     
        setMeme(prevState=>({
            ...prevState,
            [name]:value
        }))
       }

       console.log(meme)
       function handleClick(event){ 
         event.preventDefault()
       }
    return(
        <div className="form">
            <form  onClick={handleClick}>
                <div className="input">
                    <input 
                    type="text"
                     onChange={handleChange} 
                     name="topText" 
                     value={meme.topText}
                     placeholder="meme here"
                     />
                    <input 
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    placeholder="meme here"
                    onChange={handleChange} 
                    />
                </div>
                <button onClick={getMemesImage} >Get a new meme <img src="kkk" alt=""/></button>
            </form>
            <div className="display">
                <h2 className="text top-text" >{meme.topText}</h2>
                <h2 className="text bottom-text">{meme.bottomText}</h2>
                <img className="memeimg" src={meme.randomImage} alt="gvyvyu"/>
            </div>
        </div>
    )
}
