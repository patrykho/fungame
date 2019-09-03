import React from 'react'
import { Redirect } from 'react-router-dom'

const PlayGame = (props) => {

    const {logged} = props

    return (<>
        {!logged ? (<Redirect exact from="/login" to="/" />) : (<p>Play</p>)}
</>
    )
}

export default PlayGame