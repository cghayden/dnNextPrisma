export default async function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h2>All users general shared layout</h2>
      {children}
    </div>
  )
}
