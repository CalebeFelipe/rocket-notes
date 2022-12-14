import { Container } from "./styles";

export function Button({ label, loading = false }) {
    return (
        <Container 
            type="button"
            disabled={ loading }>
            { loading ? 'Carregando...' : label }
        </Container>
    )
}

Button.defaultProps = {
    label: 'Clique aqui'
}