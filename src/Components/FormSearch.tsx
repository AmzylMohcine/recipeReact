import { Input, InputGroup } from "@chakra-ui/react"
import React from "react"

interface Props {
  onSubmitSearch: (event: React.FormEvent<HTMLFormElement>) => void
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormSearch = ({ onSubmitSearch, onChangeHandler }: Props) => {
  return (
    <form onSubmit={e => onSubmitSearch(e)}>
      {" "}
      <InputGroup>
        <input placeholder="search recipes .. " onChange={e => onChangeHandler(e)} />
        <button type="submit"> Search </button>
      </InputGroup>
    </form>
  )
}

export default FormSearch
