import React, { useContext } from "react";
import NewContext from "../context/Createcontextapi";

function Exchange() {
  const c = useContext(NewContext);
  document.title = "Exchange";

  return (
    <div className="py-5">
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold text-vibrant-gold">
          Top Market Movers
        </h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {/* Conditional Loading State (using Bootstrap Spinner) */}
          {!c.Exchange ? (
            <div className="text-center w-100 p-5">
              <div className="spinner-border text-vibrant-gold" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Fetching latest market data...</p>
            </div>
          ) : (
            /* Mapping through the coins array (This is the dynamic part) */
            c.Exchange.map((item) => (
              <div key={item.id || item.name} className="col">
                {/* Vibrant Card Style */}
                <div className="card h-100 vibrant-card shadow-lg">
                  <a
                    href={`${item.url}`}
                    target="blank"
                    className="btn btn-sm btn-outline-warning w-100"
                  >
                    <div
                      className="card-header border-0 text-center pt-4 pb-0"
                      style={{ backgroundColor: "transparent" }}
                    >
                      {/* Coin Image: Fixed size and centered */}
                      <img
                        src={item.image}
                        className="img-fluid mb-2"
                        alt={item.name}
                        style={{ width: "48px", height: "48px" }}
                      />
                    </div>

                    {/* Card Body: Name and Price */}
                    <div className="card-body pt-2 text-center">
                      <h5 className="card-title fw-bold text-black mb-1">
                        {item.name}
                        <small className="text-muted ms-2 fw-normal">
                          {item.symbol}
                        </small>
                      </h5>
                    </div>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Exchange;
