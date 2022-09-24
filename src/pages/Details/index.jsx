import { Container } from "./styles"
import { Button } from '../../components/Button'

export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <p>Calebe Felipe</p>

      <Button label="Entrar" loading />
      <Button label="Cadastrar"/>
      <Button label="Voltar"/>
      <Button />
    </Container>
  )
}