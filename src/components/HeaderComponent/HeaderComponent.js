import iconMenu from "../../assets/img/iconMenu.svg"
import logoHeader from "../../assets/img/logoHeader.svg"
import styles from "./HeaderComponent.module.css"


function HeaderComponent(){

    return (
        <div className={styles.HeaderMaster}>
            <div className={styles.divLeftHeader}></div>
            <div className={styles.divRightHeader}>
                <li className={styles.listHeader}>
                    <ul>Gmail</ul>
                    <ul>Imagens</ul>
                    <ul><img src={iconMenu}></img></ul>
                    <ul><img src={logoHeader}></img></ul>
                </li>
            </div>
            
        </div>
    )
}

export default HeaderComponent