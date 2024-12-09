import {
  Header__Logo,
  Header__Menu,
  Header__MenuContainer,
  Header__MenuElement,
  Header__Wrapper,
  Header__styledMenu,
} from "./HeaderStyles";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";



export default function HeaderUI(props) {
  

  return (
    <Header__Wrapper>
      <Header__Logo
        href="/"
      >Project NEOW</Header__Logo>
      <Header__MenuContainer>
        {/* <Header__Menu>
          <Header__MenuElement>menu1</Header__MenuElement>
          <Header__MenuElement>menu2</Header__MenuElement>
          <Header__MenuElement>menu3</Header__MenuElement>
        </Header__Menu>
        <Header__Menu>
          <Header__MenuElement>Log in</Header__MenuElement>
          <Header__MenuElement>Settings</Header__MenuElement>
        </Header__Menu> */}
        <Header__styledMenu
          mode="horizontal"
          items={props.itemsLeft}
        />
        <Header__styledMenu
          mode="horizontal"
          items={props.itemsRight}
        />
      </Header__MenuContainer>
    </Header__Wrapper>
  );
}
