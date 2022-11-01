import { useState } from "react";
import Layout from "../components/Layout";

export default function State() {
    const [number, setNumber] = useState(0)

    function Increment() {
        setNumber(number + 1)
    }

    return (
        <Layout titulo="Componente com Estato">
            <div>{number}</div>
            <button onClick={Increment}>Incrementar</button>
        </Layout>
    )
}