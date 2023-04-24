import { Card, CardBody, Stack, Image, Heading, Text, Divider, Button, CardFooter, ButtonGroup } from "@chakra-ui/react"
import React from "react"

interface Ingrediants {
  id: number
  text: string
}
interface Props {
  picture: string
  label: string
  calories: string
  ingrediants: Ingrediants[]
}
const RecipeCard = ({ picture, label, calories, ingrediants }: Props) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={picture} alt="Green double couch with wooden legs" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md"></Heading>
          <Text fontSize={42}> {label}</Text>
          <Text>{calories}</Text>
          <Text>
            {ingrediants.map(ingrediant => (
              <li key={ingrediant.id}> {ingrediant.text}</li>
            ))}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  )
}

export default RecipeCard
