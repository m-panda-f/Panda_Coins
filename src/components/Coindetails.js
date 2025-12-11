import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Coindetails() {
    const { id } = useParams();
    
    const [Details, setDetails] = useState(null); 
    
    
    
    const formatCurrency = (value, currency = 'USD') => {
        if (value === null || value === undefined) return 'N/A';
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        return formatter.format(value);
    };

    
    const formatLargeNumber = (value, currency = 'USD') => {
        if (value === null || value === undefined) return 'N/A';
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            notation: 'compact',
            compactDisplay: 'short',
            maximumFractionDigits: 2
        });
        return formatter.format(value);
    };

    useEffect(() => {
        
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((res) => {
            setDetails(res.data)
        })
        .catch((err) => console.log(err));
    }, [id]) 

    
    if (!Details) {
        return <div className="py-5 text-center">Loading coin details...</div>;
    }

    
 
    
    const changeSign =  Details.market_data?.price_change_percentage_24h > 0 ? '▲' : ( Details.market_data?.price_change_percentage_24h < 0 ? '▼' : '');
    const changeColor =  Details.market_data?.price_change_percentage_24h > 0 ? 'bg-success' : ( Details.market_data?.price_change_percentage_24h < 0 ? 'bg-danger' : 'bg-secondary');
    
    
    const descriptionHtml = { __html: Details.description?.en || 'No description available.' };

    document.title = `${Details.name}`

    return (
        <div className="py-5">
            {/* FIX 3: Change 'class' to 'className' */}
            <div className="container py-5"> 

                <div className="row mb-4 align-items-center border-bottom pb-3">
                    <div className="col-md-8">
                        <h1 className="display-4 fw-bold">
                            {/* FIX 4: Use dynamic image source from Details.image.small */}
                            <img 
                                src={Details.image?.small || "placeholder.png"} 
                                alt="Coin Icon" 
                                className="me-3"
                            />
                            {Details.name}
                            {/* Use .toUpperCase() for symbol convention */}
                            <small className="text-secondary fs-4 ms-2">
                                {Details.symbol?.toUpperCase()}
                            </small>
                        </h1>
                    </div>
                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                        <span className="badge bg-dark fs-5 p-2">
                            Rank #{Details.market_cap_rank}
                        </span>
                    </div>
                </div>

                <div className="row g-4">

                    {/* Current Price Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card shadow-lg h-100 border-primary">
                            <div className="card-body text-center">
                                <h4 className="card-title text-muted">Current Price</h4>
                                <h2 className="display-4 fw-bolder text-primary">
                                    {/* FIX 5: Use correct path and formatter for USD */}
                                    {formatCurrency(Details.market_data?.current_price?.usd, 'USD')}
                                </h2>
                                <p className="fs-5 mt-3">
                                    24h Change: 
                                    <span className={`badge ${changeColor} p-2 ms-2`}>
                                        {/* FIX 6: Use correct path, conditional arrow, and format to 2 decimals */}
                                        { Details.market_data?.price_change_percentage_24h !== undefined ? `${ Details.market_data?.price_change_percentage_24h.toFixed(2)}% ${changeSign}` : 'N/A'}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Market Statistics Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card shadow-sm h-100">
                            <div className="card-header card-header-custom fw-bold">Market Statistics (USD)</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Market Cap: 
                                    <span className="float-end detail-value">
                                        {/* FIX 7: Missing 'market_data' in path. Use formatter. */}
                                        {formatLargeNumber(Details.market_data?.market_cap?.usd, 'USD')}
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    Fully Diluted Valuation (FDV): 
                                    <span className="float-end detail-value">
                                        {/* FIX 8: Missing 'market_data' in path. Use formatter. */}
                                        {formatLargeNumber(Details.market_data?.fully_diluted_valuation?.usd, 'USD')}
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    All-Time High (ATH): 
                                    <span className="float-end detail-value">
                                        {/* FIX 9: Missing 'market_data' in path. Use formatter. */}
                                        {formatCurrency(Details.market_data?.ath?.usd, 'USD')}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Core Info Card */}
                    <div className="col-lg-4 col-md-12">
                        <div className="card shadow-sm h-100">
                            <div className="card-header card-header-custom fw-bold">Core Info</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Hashing Algorithm: 
                                    <span className="float-end">
                                        <span className="badge bg-info">
                                            {Details.hashing_algorithm || 'N/A'}
                                        </span>
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    Block Time: 
                                    <span className="float-end detail-value">
                                        {Details.block_time_in_minutes} minutes
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    Sentiment (Upvotes): 
                                    <span className="float-end detail-value text-success">
                                        {/* FIX 10: Corrected typo in property name ('sentiment_votes_up_percentage') */}
                                        {Details.sentiment_votes_up_percentage !== undefined ? `${Details.sentiment_votes_up_percentage.toFixed(2)}%` : 'N/A'}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* About the Coin (Description) */}
                    <div className="col-12">
                        <div className="card shadow-sm">
                            <div className="card-header bg-secondary text-white fw-bold">About the Coin</div>
                            <div className="card-body">
                                {/* FIX 11: Use dangerouslySetInnerHTML to render the HTML description */}
                                <p className="text-muted" dangerouslySetInnerHTML={descriptionHtml}></p>
                                
                                <div className="mt-3">
                                    <h6 className="text-muted">Categories:</h6>
                                    {Details.categories?.map((item, index) => (
                                      
                                       <> <span key={index} className="badge bg-primary me-2 my-1">{item}</span></>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Coindetails;