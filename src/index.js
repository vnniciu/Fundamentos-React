import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro.jsx'
import ComParametro from './components/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro/>
        <ComParametro titulo="Esse é o titulo"
            subtitulo="Esse é o subtitulo"/>
        <ComParametro titulo="Opa" subtitulo="Epa"/>
    </div>,
    document.getElementById('root')
)