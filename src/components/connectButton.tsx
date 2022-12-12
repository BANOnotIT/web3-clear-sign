import { useState } from 'react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Button } from '@chakra-ui/react'

//const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });
function ConnectButton() {
  return <Button>Connect</Button>
}

export default ConnectButton
