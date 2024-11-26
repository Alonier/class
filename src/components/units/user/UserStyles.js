import styled from "@emotion/styled";
import { Button, List, Table } from "antd";

export const User__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #30343f;

  padding: 20px 5vw;
`;

export const User__btnContainer = styled.div`
  width: 100%;
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  align-items: start;
`;

export const Main__StyledButton = styled(Button)`
  border-color: transparent !important;
  padding: 12px 30px;
  font-size: 1.3em;
  color: #d4ad47;

  border-radius: 8px 8px 0px 0px;
`;

export const User__Main__Wrapper = styled.div`
  width: 100%;
  padding: 20px 20px;

  background-color: #831317;
`;

export const User__Main__Header = styled.div``;

export const User__Main__Header__Name = styled.div``;

export const User__Main__Header__Playcount = styled.div``;

export const User__Main__cellList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  gap: 10px;
`;

export const User__Main__cellList__subtitle = styled.div`
  font-size: 1.5em;
  font-weight: 700;

  margin-bottom: 10px;
`;
