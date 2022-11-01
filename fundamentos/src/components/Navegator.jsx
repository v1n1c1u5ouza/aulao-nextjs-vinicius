import Link from "next/link"
import styles from '../styles/Navegator.module.css'

export default function Navegator(props) {
    return (
        <Link  href={props.destiny}>
            <div className={styles.navegator} style={{
                backgroundColor: props.cor ?? 'dodgerblue' 
            }}>
                {props.text}
            </div>
        </Link>
    )
}