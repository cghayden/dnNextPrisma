'use server'
import getErrorMessage from '@/utils/reportError'
import { z } from 'zod'

const danceSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  performanceName: z.string().min(3).optional(),
  ageLevelId: z.string(),
  competitions: z.boolean().default(false),
  recital: z.boolean().default(false),
  skillLevelId: z.string(),
  tightsId: z.string().optional(),
  footwearId: z.string().optional(),
  styleOfDanceId: z.string(),
})

export const registerParent = async (
  prevState: unknown,
  formData: FormData
) => {
  // validate input with zod
  const inputData = danceSchema.safeParse({
    name: formData.get('name'),
    performanceName: formData.get('performanceName'),
    ageLevelId: formData.get('ageLevelId'),
    competitions: formData.get('competitions'),
    recital: formData.get('recital'),
    skillLevelId: formData.get('skillLevelId'),
    tightsId: formData.get('tightsId'),
    footwearId: formData.get('footwearId'),
    styleOfDanceId: formData.get('styleOfDanceId'),
  })

  if (!inputData.success) {
    return { message: inputData.error.errors[0].message }
  }

  try {
    // save new dance class
  } catch (e) {
    return { message: getErrorMessage(e) }
  }
  // redirect to newly created class
  // redirect('/parent')
}
