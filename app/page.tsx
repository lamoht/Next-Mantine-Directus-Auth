import type { Metadata } from "next"
import env from "@/lib/env"
import LoginForm from "@/components/login"
import Image from "next/image"
import LoginImage from "../public/images/login.jpg"
import { Container, Flex, Text, Title } from "@mantine/core"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const { siteName, siteDescription } = env

export default async function Home() {
  return (
    <>
      <Container fluid mx={0} px={0} h="100vh">
        <Flex direction={{ md: "row", sm: "column", xs: "column" }}>
          <Container
            fluid
            bg="#319ee9"
            display={{ md: "initial", sm: "none", xs: "none" }}
            h={{ md: "100vh", sm: "0vh", xs: "0vh" }}
            w={{ md: "50vw", sm: "100vw" }}
            mx={0}
            px={0}
          >
            <Flex justify="center" align="center" h="100%">
              <Image src={LoginImage} alt="My image" width={800} />
            </Flex>
          </Container>

          <Container
            h={{ md: "100vh", sm: "50vh" }}
            w={{ md: "50vw", sm: "100vw" }}
            mx={0}
            px={0}
          >
            <Flex justify="center" align="center" direction="column" h="100%">
              <Title order={1} size="1.5rem" fw={500}>
                Welcome
              </Title>
              <Text c="dimmed" fw={400} mt=".5rem" mb=".75rem">
                Enter your credentials
              </Text>
              <LoginForm />
            </Flex>
          </Container>
        </Flex>
      </Container>
    </>
  )
}
