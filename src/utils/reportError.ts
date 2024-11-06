function getErrorMessage(error: unknown) {
  reportError(error)
  if (error instanceof Error) return error.message
  return String(error)
}

function reportError(error: unknown) {
  // send the error to our logging service...?
  console.log(error)
}

export default getErrorMessage
