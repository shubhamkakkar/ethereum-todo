import React, { useEffect, useState } from 'react';
import Web3 from "web3"
function App() {

  const [account, setAccount] = useState("");

  useEffect(
    () => {
      loadBlockData();
    },
    [],
  )



  async function loadBlockData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    const [account] = await web3.eth.getAccounts()
    setAccount(account)
  }

  return (
    <div className="continer">
      eth-todo  : {account}
    </div>
  );
}

export default App;
