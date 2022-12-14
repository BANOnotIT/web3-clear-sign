import { SyntheticEvent, useState } from 'react'
import { Button, Input, VStack } from '@chakra-ui/react'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core'
import ConnectButton from './connectButton'
import TextArea from './textArea'

function Form() {
  const { active, library, account } = useWeb3React<Web3>()
  const web3 = library

  const [message, setMessage] = useState('')
  const [signature, setSignature] = useState('')

  function writeMessage(e: SyntheticEvent<HTMLInputElement>) {
    setMessage(e.currentTarget.value)
  }

  function signMessage() {
    if (web3 && account) {
      web3.eth.personal
        // @ts-ignore
        .sign(message, account)
        .then((signature) => setSignature(signature))
    }
  }

  return (
    <VStack>
      <ConnectButton />
      <TextArea onChange={writeMessage} />
      <Button onClick={signMessage} disabled={!active}>
        Sign
      </Button>
      <Input value={signature} disabled={!active} />
    </VStack>
  )
}

export default Form
