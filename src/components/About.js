import React from 'react'

function About() {
  return (
    <div>
      <section id="about" class="py-5 bg-dark">
        <div class="container">
            <h2 class="text-center mb-5 fw-bold text-vibrant-gold">
                <i class="bi bi-patch-question me-2"></i> About Panda Crypto Data
            </h2>

            <blockquote class="blockquote border-start border-warning border-5 ps-3 py-2 mx-auto" style={{maxWidth: "800px"}}>
                <p class="mb-0 fs-5 fw-medium text-white">
                    In the vast, fast-moving world of cryptocurrency, our mission is simple: **To provide clear, complete, and reliable data that helps you thrive.** We cut through the noise so you can focus on what matters—your investment strategy.
                </p>
                <footer class="blockquote-footer mt-2 text-warning">Panda Crypto Data: Your Trusted Tracker</footer>
            </blockquote>

            <h3 class="text-center mt-5 mb-4 fw-bold text-info">Why Choose Our Platform?</h3>

            <div class="row row-cols-1 row-cols-md-3 g-4">
                
                <div class="col">
                    <div class="card h-100 shadow-sm vibrant-card">
                        <div class="card-body text-center">
                            <i class="bi bi-coin display-4 text-vibrant-gold mb-3"></i>
                            <h5 class="card-title fw-bold text-white">Full Market Visibility</h5>
                            <p class="card-text text-muted">
                                We track thousands of digital assets. Get real-time pricing, historical charts, and key metrics all in one place.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="col">
                    <div class="card h-100 shadow-sm vibrant-card">
                        <div class="card-body text-center">
                            <i class="bi bi-arrow-left-right display-4 text-vibrant-gold mb-3"></i>
                            <h5 class="card-title fw-bold text-white">Exchange Integration & Comparison</h5>
                            <p class="card-text text-muted">
                                Access data feeds from leading crypto exchange companies globally to compare trading volumes and liquidity.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="col">
                    <div class="card h-100 shadow-sm vibrant-card">
                        <div class="card-body text-center">
                            <i class="bi bi-bar-chart-line-fill display-4 text-vibrant-gold mb-3"></i>
                            <h5 class="card-title fw-bold text-white">Intelligent Tracking Page</h5>
                            <p class="card-text text-muted">
                                Monitor your favorite coins and build a custom portfolio watchlist. Get alerts on price changes effortlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="market" >
    <div class="container justify-content-center">
        
        
        {/* Start Grid Row for Text and Image */}
        <div class="row align-items-center justify-content-center pt-5">
           
            <div class="col-12 col-md-2 col-lg-2 d-flex justify-content-center justify-content-lg-end pt-lg-0">
                
                {/* The image is now consistently styled and sized within its column */}
                <img
                    src={require("../assets/Developer.png")}
                    alt="Developer Profile"
                    className="rounded-circle shadow-lg"
                    style={{
                        width: "100px", /* Increased size for visibility */
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid #0d6efd", /* Vibrant blue border */
                    }}
                />
            </div>
            

            <div class="col-12 col-md-10 col-lg-9 text-center text-lg-start">
                
                {/* Ensure the text is formatted nicely */}
                <p class="lead mb-0 text-muted fs-6">
                    Designed and Developed By <a href="https://faizan-q87s.onrender.com/" target='blank'><span class="fw-semibold text-primary">Mohammed Faizan </span> </a>
                </p>
                <p class="text-muted small mt-1">
                    Your real-time data intelligence source, built with passion.
                </p>
            </div>

           
            

        </div>
        
    </div>
</section>
    </div>
  )
}

export default About
