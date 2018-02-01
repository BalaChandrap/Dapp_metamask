# Dapp_metamask
This is the same sample dapp as Dapp_testrpc in my profile, but here I am using ropsten and metamask instead of testrpc

Steps for connecting the contract to UI:

    Get the ABI of the contract.
    Get the contract address from the blockchain
    Include web3.js in your html file.
    Initialize a web3 object with metamask provider or the blockchain RPC address in which you have deployed your contract
    Create a contract object using ABI.
    Get the deployed contract instance into this object.
    Then call your methods uisng the contract instance object.
    
    
    Note: Metamask will serve the web3 object only to the pages which are being served by a proper server like xamp, http-server or python server.
          So,to test this serve the UI files from a server and then test in browser.
          
          Go to this link, to know more about metamask : https://metamask.io/
          
          I am using Ropsten test network, the contract address I used is already present in the ropsten. So you can use directly.
          
          

