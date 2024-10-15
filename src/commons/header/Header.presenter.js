import {
  HeaderLogo,
  HeaderMenu,
  HeaderMenuContainer,
  HeaderMenuElement,
  HeaderWrapper,
} from "./Header.styles";

export default function HeaderUI() {
  return (
    <HeaderWrapper>
      <HeaderLogo>Logo</HeaderLogo>
      <HeaderMenuContainer>
        <HeaderMenu>
          <HeaderMenuElement>menu1</HeaderMenuElement>
          <HeaderMenuElement>menu2</HeaderMenuElement>
          <HeaderMenuElement>menu3</HeaderMenuElement>
        </HeaderMenu>
        <HeaderMenu>
          <HeaderMenuElement>Log in</HeaderMenuElement>
          <HeaderMenuElement>Settings</HeaderMenuElement>
        </HeaderMenu>
      </HeaderMenuContainer>
    </HeaderWrapper>
  );
}
