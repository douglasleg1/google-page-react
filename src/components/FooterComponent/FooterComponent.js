import styles from "./FooterComponent.module.css"

function FooterComponent(){
    return (
        <div className={styles.GeneralFooter}>
            <div className={styles.Footer1}>
                <span>Brasil</span>
            </div>
            <div className={styles.Footer2}>
                <div className={styles.leftDivFooter}>
                    <span>Sobre</span>
                    <span>Publicidade</span>
                    <span>Negócios</span>
                    <span>Como funciona a Pesquisa</span>
                </div>
                <div className={styles.middleDivFooter}>

                </div>
                <div className={styles.rightDivFooter}>
                    <span>Privacidade</span>
                    <span>Termos</span>
                    <span>Configurações</span>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent