import { UserAuthenticated } from "@/types/next-auth"
import { Box, NavLink } from "@mantine/core"
import { IconHome2, IconReport, IconFriends } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const data = [
  { label: "Spotlight", icon: IconHome2, href: "/dashboard" },
  {
    label: "All Customers",
    icon: IconFriends,
    href: "/dashboard/allcustomers",
  },
  {
    label: "Customer Overview",
    icon: IconReport,
    href: "/dashboard/customer",
  },
]

export default function SideNav() {
  // get the href to set the active link
  const pathname = usePathname()

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      href={item.href}
      component={Link}
      active={pathname == item.href ? true : false}
      label={item.label}
      leftSection={<item.icon size="1rem" stroke={1.5} />}
    />
  ))

  return <Box>{items}</Box>
}
