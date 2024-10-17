export default async function ParentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h2>Parent Layout</h2>
      {children}
    </div>
  )
}
