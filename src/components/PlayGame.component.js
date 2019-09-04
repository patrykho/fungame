import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

import randomNumber from '../method/randomNumber.method'

const PlayGame = (props) => {
const {logged} = props
const [status, setStatus] = useState(false)
const [userNumber, setUserNumber] = useState()
const [guessNumber, setGuessNumber] = useState()
const [lable, setLabel] = useState("Clik button to Start New Game")

const handleInputChange = (event)=> {
event.preventDefault()
const newNumber = event.target.value
if (newNumber){
    setUserNumber(parseInt(newNumber,10))
}
else {
    setUserNumber()
}
} 

const handleStart = (event) => {
    event.preventDefault()
    setGuessNumber(randomNumber(100))
    setLabel("")
    setStatus(true)
}

const handleShot = (event) =>{ 
    event.preventDefault()
    if(userNumber){
        if(userNumber > guessNumber) {
            setLabel(`Target between 0 - ${userNumber-1}`)
        }

       else  if(userNumber < guessNumber) {
            setLabel(`CTarget between ${userNumber+1} - 100`)
        }
        else if(userNumber == guessNumber ) {
            setLabel("Congratulations Hit. End of the game!")
            setStatus(false)
            setUserNumber()
        }
    }

}

const renderUserInterface = () => {
    return (<>

          {/* <h1>Guess Number: {guessNumber}</h1> */}
         <h1>Your Number: {userNumber}</h1>
       <form onSubmit={handleShot}>
        <label htmlFor="userNumber">Guess number:</label>
    <input onChange={handleInputChange} type="number" id="userNumber" name="userNumber" min="0" max="100"/>
    <button type="submit" >Shot</button>
    </form>
    </>)
}


  

    return (<>
    {!logged &&<Redirect exact from="/login" to="/" />}
   {lable&&<h1>Message: {lable}</h1>} 
        {status ? (renderUserInterface()): (<><button onClick={handleStart}>Start New Game</button></>)}
        </>)
        
        
  
}

export default PlayGame