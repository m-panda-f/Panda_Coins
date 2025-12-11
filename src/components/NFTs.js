import Newcontext from "../context/Createcontextapi";
import { useContext } from "react";

function NFTs() {
  const c = useContext(Newcontext);
  return (
    <div>
      <div className="py-5">
        <div className="container py-5">
          <h2 className="text-center mb-5 fw-bold text-vibrant-gold">
            Asset Listing Details
          </h2>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {c.NFTs.map((item, index) => (
              <div key={index} className="col">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body py-4 px-3 text-start">
                    <h5 className="card-title fw-bolder text-dark mb-1 text-truncate">
                      {item.name}
                    </h5>

                    <p
                      className="mb-0 text-uppercase fw-bold"
                      style={{ color: "var(--vibrant-gold-color, #B8860B)" }}
                    >
                      {item.symbol}
                    </p>

                    <div className="mt-3 pt-3 border-top">
                      <small className="text-secondary d-block">
                        Platform:{" "}
                        <span className="fw-medium">
                          {item.asset_platform_id || "N/A"}
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTs;
