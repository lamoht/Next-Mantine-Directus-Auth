"use client"
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
  Text,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export default function LoginForm() {
  const [visible, { toggle }] = useDisclosure(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const router = useRouter()

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  })

  const onSubmit = async (values) => {
    setIsLoading(true)
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: `/dashboard`,
      redirect: true,
    })
    if (res?.error) {
      console.log(res.error)
      setError(res?.error)
      setIsLoading(false)
    } else {
      router.push("/")
    }
  }

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <br />
        <PasswordInput
          label="Password"
          defaultValue=""
          visible={visible}
          onVisibilityChange={toggle}
          {...form.getInputProps("password")}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit" loading={isLoading} disabled={isLoading}>
            Submit
          </Button>
        </Group>
        <Text>{error && error}</Text>
      </form>
    </Box>
  )
}
