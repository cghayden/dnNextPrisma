import jwt from 'jsonwebtoken'

const COOKIE_SECRET = process.env.COOKIE_SECRET!

export const createTokenForUser = (userId: string) => {
  const token = jwt.sign({ id: userId }, COOKIE_SECRET)
  return token
}
