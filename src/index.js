import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro.jsx'
// import ComParametro from './components/ComParametro'
// import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

ReactDOM.render(
    <div>
        <Card titulo="Primeiro Componente">
            <Primeiro/>
        </Card>
        <Card titulo="Exercicio X">
            Conteudo
        </Card>
 {/*        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
  */}       {/* <Primeiro/>
        <ComParametro titulo="Esse é o titulo"
            subtitulo="Esse é o subtitulo"/>
        <ComParametro titulo="Opa" subtitulo="Epa"/> */}
    </div>,
    document.getElementById('root')
)