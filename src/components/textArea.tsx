import { Textarea } from '@chakra-ui/react'

function textArea({ onChange }) {
  return <Textarea onChange={onChange} placeholder="Enter a message..." />
}
export default textArea
