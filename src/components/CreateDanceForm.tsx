'use client'
import { RadioGroup, Radio, Input } from '@nextui-org/react'

// import { Input, RadioGroup } from '@nextui-org/react'
import SubmitButton from './SubmitButton'
import { StudioNewDanceOptions } from '@/models/studio'
// import { Studio } from '@prisma/client'
// import { Chip } from '@nextui-org/chip'
// import { Radio } from 'lucide-react'

const CreateDanceForm = ({
  studioConfig,
}: {
  studioConfig: StudioNewDanceOptions
}) => {
  return (
    <form
      className='bg-content1 border border-zinc-400 shadow-lg rounded-md p-3 flex flex-col gap-2 '
      // action={action}
    >
      <h3 className='my-4'>Create A New Dance</h3>
      <Input
        name='name'
        size='md'
        type='text'
        placeholder='Dance Name'
        required
      />
      <Input
        name='performanceName'
        size='md'
        type='text'
        placeholder='Performance Name'
      />
      <RadioGroup label='Style of Dance:' orientation='horizontal'>
        {studioConfig.stylesOfDance.map((style) => (
          <Radio key={style.id} value={style.id}>
            {style.name}
          </Radio>
        ))}
      </RadioGroup>

      <RadioGroup label='Style of Dance:' orientation='horizontal'>
        {studioConfig.ageLevels.map((ageLevel) => (
          <Radio key={ageLevel.id} value={ageLevel.id}>
            {ageLevel.name}
          </Radio>
        ))}
      </RadioGroup>

      <SubmitButton label={'Create Dance'} />
      {/* {formState?.message && <p>{formState.message}</p>} */}
    </form>
  )
}

export default CreateDanceForm
