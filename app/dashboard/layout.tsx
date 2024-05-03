import AppLayout from "@/components/layout"
import { ThemeProvider } from "@/components/theme-provider"
import { options } from "@/lib/auth/options"
import { UserAuthenticated } from "@/types/next-auth"
import { getServerSession } from "next-auth"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options)
  const user = session?.user as UserAuthenticated

  // console.log(user)

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {user && <AppLayout user={user} children={children} />}
    </ThemeProvider>
  )
}
