import './navBar.sass';


const NavBar = () => {
    return (
        <nav>
            <div className="container">
                <ul className="menu__list">
                    <li className="menu__link"><a href="http">About me</a></li>
                    <li className="menu__link"><a href="http">Tech-stack</a></li>
                    <li className="menu__link"><a href="http">My works</a></li>
                    <li className="menu__link"><a href="http">Prices</a></li>
                    <li className="menu__link"><a href="http">Contact me</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;