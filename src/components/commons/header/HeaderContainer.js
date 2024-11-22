import HeaderUI from "./HeaderPresenter";

export default function HeaderLogic() {

  const items__left = [
    {
      label: <a href = "/user">User</a>,
      key: "User"
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

  const items__right = [
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
  

  return <HeaderUI itemsLeft = {items__left} itemsRight = {items__right}></HeaderUI>;
}
