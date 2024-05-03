"use client"
import { UserAuthenticated } from "@/types/next-auth"
import { Avatar, Burger, Button, Group, Menu, Text } from "@mantine/core"
import { IconLogout } from "@tabler/icons-react"
import { MantineLogo } from "@mantinex/mantine-logo"
import { signOut } from "next-auth/react"
import { useDisclosure } from "@mantine/hooks"

export default function Header({ user }: { user: UserAuthenticated }) {
  const [opened, { toggle }] = useDisclosure()
  return (
    <Group h="100%" px="md">
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      <Group justify="space-between" style={{ flex: 1 }}>
        <MantineLogo size={30} />
        <Group ml="xl" gap={0} visibleFrom="sm">
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Avatar component="button" radius="xl" alt={user?.name}>
                {user && user?.name[0]}
              </Avatar>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>{user?.name}</Menu.Label>
              <Menu.Divider />
              <Menu.Item
                color="red"
                leftSection={<IconLogout />}
                className="cursor-pointer"
                onClick={() => signOut()}
              >
                Log out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </Group>
  )
}
