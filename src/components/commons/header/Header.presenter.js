import {
  Header__Logo,
  Header__Menu,
  Header__MenuContainer,
  Header__MenuElement,
  Header__Wrapper,
} from "./Header.styles";

export default function HeaderUI() {
  return (
    <Header__Wrapper>
      <Header__Logo>Logo</Header__Logo>
      <Header__MenuContainer>
        <Header__Menu>
          <Header__MenuElement>menu1</Header__MenuElement>
          <Header__MenuElement>menu2</Header__MenuElement>
          <Header__MenuElement>menu3</Header__MenuElement>
        </Header__Menu>
        <Header__Menu>
          <Header__MenuElement>Log in</Header__MenuElement>
          <Header__MenuElement>Settings</Header__MenuElement>
        </Header__Menu>
      </Header__MenuContainer>
    </Header__Wrapper>
  );
}
