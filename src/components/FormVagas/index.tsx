import { FormEvent, useState } from 'react'
import { FormularioPesquisa, InputPesquisa, BotaoPesquisa } from './syles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormularioPesquisa onSubmit={aoEnviarForm}>
      <InputPesquisa
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisa type="submit">Pesquisar</BotaoPesquisa>
    </FormularioPesquisa>
  )
}
export default FormVagas
