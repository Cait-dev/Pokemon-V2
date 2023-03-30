import { Link } from 'react-router-dom'
import styles from './footer.module.css'
//assets imports 
import PokemonPic from '../assets/pikachu.png';
import LocationPic from '../assets/pointer.png';
import ItemsPic from '../assets/pokeball.png';


export const Footer = () => {
    return <footer className={styles.footer}>
        <Link className={styles.footerLink} to="/pokemons">
            <img className={styles.footerIcon} src={PokemonPic} alt='Pokeball' />
            Pokemons
        </Link>

        <Link
            onClick={(event) => event.preventDefault()}
            className={styles.footerLink}
            to="/items">

            <img className={styles.footerIcon}src={ItemsPic} alt='Pokeball' />
            Items

        </Link>

        <Link onClick={(event) => event.preventDefault()} 
        className={styles.footerLink} to="/location">
            <img className={styles.footerIcon} src={LocationPic} alt='Pokeball' />
            Map
        </Link>
    </footer>
}
