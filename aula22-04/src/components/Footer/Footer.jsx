import style from './Footer.module.css'

function Footer(){
    return(
        <footer className={style.footer}>
              <p>&copy; {new Date().getFullYear()} Programação. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer