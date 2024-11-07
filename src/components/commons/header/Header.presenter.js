import {
  Header__Logo,
  Header__Menu,
  Header__MenuContainer,
  Header__MenuElement,
  Header__Wrapper,
  Header__styledMenu,
} from "./Header.styles";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const items = [
  {
    label: "User",
    key: "User",
    // icon: <MailOutlined />,
  },
  {
    label: "Global",
    key: "Global",
    // icon: <MailOutlined />,
  },
  {
    label: "DB",
    key: "DB",
    // icon: <MailOutlined />,
  },
];

const items2 = [
  {
    label: "Log in",
    key: "Login",
    // icon: <MailOutlined />,
  },
  {
    label: "Settings",
    key: "Settings",
    // icon: <MailOutlined />,
  },
];

export default function HeaderUI() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Header__Wrapper>
      <Header__Logo>Logo</Header__Logo>
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
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <Header__styledMenu
          selectedKeys={[current]}
          mode="horizontal"
          items={items2}
        />
      </Header__MenuContainer>
    </Header__Wrapper>
  );
}
