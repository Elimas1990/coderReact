const Navbar = ()=>{
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">E-commers</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarEcommer" aria-controls="navbarEcommer" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarEcommer">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Categoria 1</a>
                            <a className="nav-link" href="#">Categoria 1</a>
                            <a className="nav-link" href="#">Categoria 1</a>
                        </ul>
                        <ul className="navbar-nav">
                            <button type="button" className="btn btn-primary position-relative shadow" id="button-carrito" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i className="fas fa-shopping-cart"></i> Total: $<span id="carrito_subtotal">0</span>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="notificador_articulos">0</span>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar