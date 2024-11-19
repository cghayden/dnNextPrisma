'use client'

import ParentShell from '@/components/parent/ParentShell'

const ParentDashboard = ({ children }: { children: React.ReactNode }) => {
  return <ParentShell>{children}</ParentShell>
}

export default ParentDashboard
