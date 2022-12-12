import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import './App.css'
import Form from './components/Form'

function getLibrary(provider: any, connector: any) {
  return new Web3(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

function App() {
  //const { activate } = useWeb3React()

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider>
        <Form />
      </ChakraProvider>
    </Web3ReactProvider>
  )
}

export default App
