export default async function StudioName({
  studioName,
}: {
  studioName: string
}) {
  return <h1 className='text-2xl font-bold'>{studioName}</h1>
}
