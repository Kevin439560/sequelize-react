import '../styles/navbar.css';
export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navLinha">  
                <div className="d-flex">
                    <a className = 'navLink' href='/'><div className='navHome'>Home</div></a>
                    <a className = 'navLink' href='/Clientes'><div className='navHome'>Clientes</div></a>
                </div>  
                <div className="d-flex">
                    <a className = 'navLink' href='/Produtos'><div className='navHome'>Produtos</div></a>
                    <a className = 'navLink' href='/Pedidos'><div className='navHome'>Pedidos</div></a>
                </div>
                
            </div>
        </nav>
    )
}