import styles from "./ContentComponent.module.css"
import Button from "../Button/Button"
import privacityLogo from "../../assets/img/privacitySecurityIcon.svg"
import googleLogo from "../../assets/img/logoGoogle.svg"
import searchIcon from "../../assets/img/searchIcon.svg"
import keyboardIcon from "../../assets/img/keyboardicon.svg"
import microphoneIcon from "../../assets/img/microphoneIcon.svg"

function ContentComponent(){
    return (
        <>
        <section className={styles.googleLogo}>
            <img src={googleLogo} alt=""></img>
        </section>

        <section className={styles.searchBar}>
            <div className={styles.leftSearchBar}>
                <img src={searchIcon} alt=""/>
            </div>
            <div className={styles.rightSearchBar}>
                <img src={keyboardIcon} alt=""/>
                <img src={microphoneIcon} alt=""/>
            </div>
        </section>

        <section className={styles.buttons}>
            <Button text="Pesquisa Google"/>
            <Button text="Estou com sorte"/>
        </section>

        <section className={styles.privacityArea}>
            <div>
                <img src={privacityLogo} alt=""/>
            </div>
            <div>
                <span>Faça o Check-up de privacidade</span>
            </div>
        </section>
        </>
    )
}

export default ContentComponent