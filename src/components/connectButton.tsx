import { useCallback } from 'react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Button } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'

const injected = new InjectedConnector({})

function ConnectButton() {
  const { activate } = useWeb3React<Web3>()

  const handleConnect = useCallback(() => {
    activate(injected, (error) => {
      console.error(error)
    })
  }, [])

  return <Button onClick={handleConnect}>Connect</Button>
}

export default ConnectButton
