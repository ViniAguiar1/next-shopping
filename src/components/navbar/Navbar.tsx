import styles from './styles.module.css'

export function Navbar(){
    return(
        <nav className={styles.nav}>
            <p>MKS Sistemas </p> 
            <button><img src="./cart.svg" alt="" width={25}/></button>
        </nav>
    )
}