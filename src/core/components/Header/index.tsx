import LanguageSelector from "../LanguageSelector";
import Text from "../Text";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../store/reducer";

const Header = () => {
    const {localeLang, browserLang} = useSelector((state:AppState) => state)
    return (
        <header>
            <div className='_container'>
                <div className={styles.headerWrap}>
                    <span className={styles.left}>
                        <Text fontWeight="bold" fontSize="lg" tag="h1">Dataguess Multi-Lang Case - {localeLang}</Text>

                        <nav>
                            <NavLink to={`/${localeLang === browserLang ? '' : localeLang }`}>Home</NavLink>
                            <NavLink to={`${localeLang === browserLang ? '' : '/'+localeLang}/about`}>About</NavLink>
                        </nav>
                    </span>
                    

                    <div>
                        <LanguageSelector />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header