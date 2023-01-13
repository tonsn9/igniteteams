import { Container, Logo, BackButton, BackIcon } from "./styles";

import logoImg from "@assets/logo.png";

//Passando a propriedade para exibir ou não o icone voltar
type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
