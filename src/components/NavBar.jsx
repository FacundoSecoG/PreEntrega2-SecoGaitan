import CartWidget from "./CartWidget"


const NavBar = () => {
    return (
        <nav className="NavBar-Container">
            <div className="Brand-Categorias-Container">
                <h1>Mi Tienda</h1>
                <ul>
                    <a href="#"><li>INICIO</li></a>
                    <a href=""><li>Seccion2</li></a>
                    <a href=""><li>Seccion3</li></a>
                    <a href=""><li>Seccion4</li></a>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar