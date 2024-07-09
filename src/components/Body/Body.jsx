import React from 'react'
import './Body.css'


const arr = [
    {
      "Quote": "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      "Author": "Adam Scott"
    },
    {
      "Quote": "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
      "Author": "Adelle Davis"
    },
    {
      "Quote": "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
      "Author": "Adelle Davis"
    },
    {
      "Quote": "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
      "Author": "Albert Einstein"
    },
    {
      "Quote": "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
      "Author": "Alice May Brock"
    },
    {
      "Quote": "Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, \"Your fatness is an affront to me, so we have the right to treat you as offensively as you appear.\" Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.",
      "Author": "Anthelme Brillat-Savarin"
    }
    // Removed trailing comma and commented out entry
    // {
    //   "Quote": "",
    //   "Author": ""
    // }
  ];
export const Body = () => {
  return (
    <div className="section1">
        <div className="main">
            {arr.map((ele)=>{
                return(
                    <div className="para">
                        <p className='quote'>{ele.Quote}</p>
                        <p className='author'>{ele.Author}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
