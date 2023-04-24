import React from "react"

interface Props {
  onSubmitSearch: (event: React.FormEvent<HTMLFormElement>) => void
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormSearch = ({ onSubmitSearch, onChangeHandler }: Props) => {
  return (
    <form onSubmit={e => onSubmitSearch(e)}>
      {" "}
      <input type="text" placeholder="s earch.." onChange={e => onChangeHandler(e)} />
      <button type="submit"> Search </button>
    </form>
  )
}

export default FormSearch
