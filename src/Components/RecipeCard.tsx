import { Card, CardBody, Stack, Image, Heading, Text, Divider, Button, CardFooter, ButtonGroup } from "@chakra-ui/react"
import React from "react"

interface Props {
  picture: string
  label: string
  calories: string
}
const RecipeCard = ({ picture, label, calories }: Props) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={picture} alt="Green double couch with wooden legs" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md"></Heading>
          <Text fontSize={42}> {label}</Text>
          <Text>{calories}</Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  )
}

export default RecipeCard
