import { useState } from 'react'
import { VStack } from '@chakra-ui/react'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core'
import ConnectButton from './connectButton'
import TextArea from './textArea'
import SignButton from './signButton'
import Signature from './Signature'

//const {account} = useWeb3React()
function Form() {
  const [MessageState, setMessageState] = useState('')
  const [SignatureState, setSignatureState] = useState('')
  function writeMessage(e) {
    setMessageState(e.target.value)
  }
  function signMessage() {
    var web3 = new Web3('http://localhost:5173/')
    //setSignatureState(web3.eth.sign(MessageState, account));
    console.log(MessageState)
    //console.log(SignatureState)
  }
  return (
    <VStack>
      <ConnectButton />
      <TextArea onChange={writeMessage} />
      <SignButton onClick={signMessage} />
      <Signature value={SignatureState}></Signature>
    </VStack>
  )
}

export default Form
