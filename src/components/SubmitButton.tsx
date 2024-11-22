'useclient'

import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton({
  label,
  ...btnProps
}: {
  label: string
}) {
  const { pending } = useFormStatus()
  return (
    <Button {...btnProps} type='submit' isLoading={pending} form='studioSignup'>
      {label}
    </Button>
  )
}
