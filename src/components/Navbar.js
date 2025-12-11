function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i className="bi bi-currency-bitcoin"></i> Panda Coins
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/coins">
                  Coin Data
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/exchange">
                  {" "}
                  Exchange
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/nfts">
                  {" "}
                  NFTs
                </a>
              </li>
            </ul>

            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
