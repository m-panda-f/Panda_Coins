import React, { useContext } from "react";
import NewContext from "../context/Createcontextapi";

function Coins() {
  const c = useContext(NewContext);
  document.title = "Coins";

  return (
    <div className="py-5">
      <div className="container py-5">
        <div className="d-flex mx-5 px-5 ">
          <label>
            {" "}
            <input
              type="radio"
              name="USD"
              checked={c.currenty === "usd"}
              onChange={(e) => c.handlechange("usd", "$")}
            />{" "}
            USD
          </label>
          <label className="mx-3">
            {" "}
            <input
              type="radio"
              name="INR"
              checked={c.currenty === "inr"}
              onChange={(e) => c.handlechange("inr", "₹")}
            />
            INR
          </label>
          <label>
            {" "}
            <input
              type="radio"
              name="EUR"
              checked={c.currenty === "eur"}
              onChange={(e) => c.handlechange("eur", "€")}
            />
            EUR
          </label>
        </div>
        <h2 className="text-center mb-5 fw-bold text-vibrant-gold">
          Top Coins
        </h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {/* Conditional Loading State (using Bootstrap Spinner) */}
          {!c.coins ? (
            <div className="text-center w-100 p-5">
              <div className="spinner-border text-vibrant-gold" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Fetching latest market data...</p>
            </div>
          ) : (
            /* Mapping through the coins array (This is the dynamic part) */
            c.coins.map((item) => (
              <div key={item.id || item.name} className="col">
                {/* Vibrant Card Style */}
                <div className="card h-100 vibrant-card shadow-lg">
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
                    <h5 className="card-title fw-bold text-dark mb-1">
                      {item.name}
                      <small className="text-muted ms-2 fw-normal">
                        {item.symbol.toUpperCase()}
                      </small>
                    </h5>

                    {/* Price Display (Vibrant Gold) */}
                    <p className="fs-4 fw-bolder text-vibrant-gold mb-1">
                      {c.symbol}
                      {item.current_price.toLocaleString()}
                    </p>
                  </div>

                  <div
                    className="card-footer border-0"
                    style={{ backgroundColor: "transparent" }}
                  >
                   
                    <a
                      href={`/coins/${item.id}`}
                      className="btn btn-sm btn-outline-warning w-100"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Coins;
