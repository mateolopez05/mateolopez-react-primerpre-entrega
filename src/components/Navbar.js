import CartWidget from "./CartWidget/cartwidget"

const Navbar = () => {
    return(
        <nav>
            <h3>Kasnya</h3>
            <div>
                <button>Cilindradas</button>
                <button>Marcas</button>
                <button>Proposito</button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default Navbar