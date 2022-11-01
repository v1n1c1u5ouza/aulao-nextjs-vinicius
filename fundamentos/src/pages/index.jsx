import Link from "next/link"
import Navegator from "../components/Navegator"

export default function Initial() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
           <Navegator text="Estiloso" destiny="/stylish"/>
           <Navegator text="exemplo" destiny="/exemple" cor="#9400d3"/>
           <Navegator text="jsx" destiny="/jsx" cor="crimson"/> 
           <Navegator text="Navegação #01" destiny="/navegation/" cor="green"/> 
           <Navegator text="Navegação #02" destiny="/client/SP-2/321" cor="blue" />
           <Navegator text="Componente com Estado" destiny="/state" cor="pink" />
        </div>
    )
}