import NewContext from "./Createcontextapi";
import axios from "axios";


import React, { useEffect, useState } from "react";

function Contextapi(props) {
  const [coins, setcoins] = useState([]);
  
  const [currenty, setcurrenty] = useState("inr");
  const [symbol, setSymbol] = useState("₹");
  const handlechange = (currenty, symbol) => {
    setcurrenty(currenty);
    setSymbol(symbol);
  };
  const Api = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currenty}`,
        {
          params: {
            "x-cg-demo-api-key": `${Api}`,
          },
        }
      )
      .then((res) => setcoins(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currenty]);

  const [Exchange, setExchange] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/exchanges", {
        params: {
          "x-cg-demo-api-key": `${Api}`,
        },
      })
      .then((res) => setExchange(res.data))
      .catch((err) => console.log(err));
  });
  const [NFTs, setNFTs] = useState([]);
  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/nfts/list",
      {
        params:{
          key:`${Api}`
        }
      }
    )
    .then((res)=>setNFTs(res.data))
    .catch((err)=>console.log(err))
  })


  

  return (
    <div>
      <NewContext.Provider
        value={{ coins, currenty, handlechange, Exchange, symbol, NFTs}}
      >
        {props.children}
      </NewContext.Provider>
    </div>
  );
}

export default Contextapi;
