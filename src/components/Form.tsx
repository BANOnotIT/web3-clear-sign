import { useState } from 'react'
import { VStack, Text } from '@chakra-ui/react'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import ConnectButton from './connectButton'
import TextArea from './textArea'
import SignButton from './signButton'
import Signature from './Signature'

const injected = new InjectedConnector({ supportedChainIds: [0x13881] })
function Form() {
  const [messageState, setMessageState] = useState('')
  const [signatureState, setSignatureState] = useState('')
  const [errState, setErrState] = useState('')
  const [isLoading, setLoading] = useState(false)
  const { library, account, connector, active, activate } = useWeb3React<Web3>()
  function writeMessage(e) {
    setMessageState(e.target.value)
  }
  async function signMessage() {
    //const account = await connector.getAccount();
    try {
      setErrState('')
      setLoading(true)
      console.log(account)
      if (!library || !account) {
        console.log('library or account undefined')
        setLoading(false)
        setErrState('Error! Connect to the wallet')
        return
      }
      const sig = await library.eth.personal.sign(messageState, account, '')
      setSignatureState(sig)
      console.log(messageState)
      console.log(signatureState)
    } catch (err) {
      console.log(err)
      if (err instanceof Error) {
        setErrState(`${err.name}: ${err.message}`)
      } else {
        setErrState('An error occured')
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <VStack>
      <ConnectButton onClick={() => activate(injected)} />
      <TextArea onChange={writeMessage} />
      <Text>{errState}</Text>
      <SignButton isLoading={isLoading} onClick={signMessage} />
      <Signature value={signatureState}></Signature>
    </VStack>
  )
}

export default Form
