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
    <Card display="flex" flexDirection="row" gap={20} marginBottom={20}>
      <Image src={picture} alt={label} />

      <CardBody>
        <Stack spacing="3">
          <Heading size="md">{label}</Heading>
          <Text fontWeight="bold" color="green.500">
            {calories} calories
          </Text>
          <Divider />
          <Text fontSize="md" fontWeight="semibold">
            Ingredients:
          </Text>
          <Stack spacing="1">
            {ingrediants.map(ingrediant => (
              <Text key={ingrediant.id}>{ingrediant.text}</Text>
            ))}
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default RecipeCard
