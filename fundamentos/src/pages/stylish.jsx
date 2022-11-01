import styles from '../styles/Stylish.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Stylish() {
    return (
        <Layout titulo="Exemplo de css modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulo</h1>
            </div>            
        </Layout>
    )
}


