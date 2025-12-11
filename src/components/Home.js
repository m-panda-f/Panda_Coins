

function Home() {
  document.title = "Panda Coins";
   
  return (
    <div>
      <section 
    className="d-flex align-items-center justify-content-center text-white text-center min-vh-100 hero-section"
>
    <div className="container">
        <div className="row align-items-center justify-content-between g-5">
            
            <div className="col-lg-6 text-lg-start">
                
                <h1 className="display-3 fw-bolder mb-3 text-warning">
                    Welcome to Panda Crypto Data
                </h1>
                
                <p className="lead mb-4 text-light-50">
                    Your real-time source for cryptocurrency market analysis, pricing, and decentralized intelligence. The future of finance starts here.
                </p>
                
                <a href="/coins" className="btn btn-warning btn-lg me-2 shadow-lg fw-bold">
                    View Live Data
                </a>
                <a href="/about" className="btn btn-outline-info btn-lg">
                    Learn More
                </a>
            </div>
            
            <div className="col-lg-5">
                <img 
                    src={require("../assets/Bitcoin.png")} 
                    className="img-fluid floating-element shadow-lg rounded-3" 
                    alt="Bitcoin Digital Graphic"
                />
            </div>
            
        </div>
    </div>
</section>
    </div>
  )
}

export default Home
