import React, {useState} from 'react'
import { BrowserRouter,Route } from 'react-router-dom'

import Header from '../components/Header.component'
import HomeView from '../components/HomeView.component'
import FormLogin from '../components/FormLogin.component'
import Footer from '../components/Footer.component'
import PlayGame from '../components/PlayGame.component'

const Game = () => {
const [logged, setLogged] = useState(false)

    return (
        <BrowserRouter>
        <Header  />
     
    <Route path="/" exact component={HomeView} />
    <Route path="/login" exact 
    render={() => <FormLogin  logged={logged} setLogged={setLogged}/>} />
    <Route path="/play" exact 
    render={() => <PlayGame  logged={logged} />}
/>
  
    <Footer />
    </BrowserRouter>
    )

}

export default Game