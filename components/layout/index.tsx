"use client"
import { AppShell } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import SideNav from "./sidenav/SideNav"
import { UserAuthenticated } from "@/types/next-auth"
import Header from "./header/Header"

import Aside from "./aside/Index"

export default function AppLayout({
  user,
  children,
}: {
  user: UserAuthenticated
  children: React.ReactNode
}) {
  const [opened, { toggle }] = useDisclosure()

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        footer={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        aside={{
          width: 300,
          breakpoint: "md",
          collapsed: { desktop: false, mobile: true },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Header user={user} />
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <SideNav />
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
        <AppShell.Aside p="md">
          <Aside />
        </AppShell.Aside>
        <AppShell.Footer p="md">Footer</AppShell.Footer>
      </AppShell>
    </>
  )
}
