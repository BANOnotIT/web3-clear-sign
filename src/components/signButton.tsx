import { Button } from '@chakra-ui/react'

function SignButton({ onClick, isLoading }) {
  if (!isLoading) {
    return <Button onClick={onClick}>Sign</Button>
  } else {
    return <Button isLoading loadingText="Signing"></Button>
  }
}

export default SignButton
