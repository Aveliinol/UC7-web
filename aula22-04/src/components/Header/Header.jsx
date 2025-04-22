import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <h1>Programação</h1>

            <nav>
                <ul>
                    <li><a href="#">Introdução</a></li>
                    <li><a href="#">Linguagens Recursos</a></li>
                    <li><a href="#">Frameworks</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header