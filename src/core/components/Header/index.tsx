import LanguageSelector from "../LanguageSelector";
import Text from "../Text";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import styles from "./header.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../store/reducer";
import { renderClasses } from "../../utils/renderClasses";
import { useEffect } from "react";

const Header = () => {
    const { localeLang, browserLang } = useSelector((state: AppState) => state)
    const location = useLocation();
    const pathname = location.pathname;

    function isActivePage(isPath: string) {
        let active = true;
        const pathArr = pathname.split('/').filter((item: string) => item !== "");
        console.log(pathArr);
        if ((isPath === 'home') && ((pathArr[0] === localeLang && pathArr.length === 1) || pathArr.length === 0)) {
            return active;
        } else if ((isPath === 'about') && (pathArr[1] === isPath || pathArr[0] === isPath)) {
            return active;
        }
    }

    return (
        <header>
            <div className='_container'>
                <div className={styles.headerWrap}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            <Text fontWeight="bold" fontSize="lg" tag="h1"><Link to={'https://www.dataguess.com/career-mid-level-frontend-developer-assignment'} target="_blank">Dataguess Multi-Lang Case</Link></Text>
                        </div>
                        <div className={styles.right}>
                            <Text fontWeight="normal" fontSize="lg" tag="h1"><Link to={'https://www.mesuttutsak.dev/'} target="_blank">Mesut Tutsak - Frontend Developer</Link></Text>
                        </div>
                    </div>
                    <div className={styles.bottom}>

                        <nav className={styles.left}>
                            <NavLink className={isActivePage('home') ? styles.active : ""} to={`/${localeLang === browserLang ? '' : localeLang}`}>Home</NavLink>
                            <NavLink className={isActivePage('about') ? styles.active : ""} to={`${localeLang === browserLang ? '' : '/' + localeLang}/about`}>About</NavLink>
                        </nav>

                        <div className={styles.right}>
                            <LanguageSelector />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header