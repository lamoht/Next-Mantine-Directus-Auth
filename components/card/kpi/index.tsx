"use client"
import { Card, Group, Text } from "@mantine/core"

export default function CardKpi({ title, contentPrimary, contentSecondary }) {
  return (
    <Card shadow="none" pt={".5rem"} radius="md" withBorder>
      {/* header */}
      <Group mt=".5rem" mb=".5rem" justify="center" align="center">
        <Text size={"sm"} fw={500} pb={".5rem"}>
          {title}
        </Text>
      </Group>
      {/* body */}
      <Group justify="center" align="center" gap="xs">
        <Text size="1.5rem" fw="700">
          {contentPrimary}
        </Text>
        <Text size="sm" c="dimmed">
          {contentSecondary}
        </Text>
      </Group>
    </Card>
  )
}
