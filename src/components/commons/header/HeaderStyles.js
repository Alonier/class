import styled from "@emotion/styled";
import { Menu } from "antd";

export const Header__Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Header__Logo = styled.a`
  width: 100%;
  height: 50px;
  padding-left: 20px;

  color: white;
  font-size: 36px;
  line-height: 50px;

  background-color: #303030;
`;

export const Header__MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 44px;
  padding: 0 20px;

  background-color: #273469;
`;

export const Header__Menu = styled.div`
  display: flex;
  flex-direction: row;

  gap: 10px;
`;

export const Header__MenuElement = styled.div`
  font-size: 1em;
  color: white;
`;

export const Header__styledMenu = styled(Menu)`
  background-color: transparent;
  width: 200px;
  .ant-menu-item {
    color: white;
    font-weight: 700;
  }

  .ant-menu-item-active {
    color: #777777 !important;
  }
`;
