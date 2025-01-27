import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root flex min-h-screen w-full">
      <Sidebar />
      <MobileNav />

      <div className="root-container flex-1 overflow-y-auto">
        <div className="wrapper p-4">
          {children}
        </div>
      </div>
      
      <Toaster />
    </main>
  )
}

export default Layout