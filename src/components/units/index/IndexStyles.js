import styled from "@emotion/styled";
import { Button, Table } from "antd";

export const Index__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  padding: 20px 15vw;
`;

export const Index__Form = styled.form`
  width: 100%;
`;

export const Index__FileInput = styled.div`
  width: 100%;
  height: 200px;
  min-width: 200px;

  border: 1px soild black;
  border-radius: 5px;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 32px;
`;

export const Index__FileHidden = styled.input`
  display: none;
`;

export const Index__Title_Stat = styled.div`
  width: 100%;
  margin-top: 20px;

  color: white;
  font-size: 40px;
`;

export const Index__Statistics__container = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Index__Statistics__element = styled.div`
  width: 400px;
  padding: 10px;

  background-color: #354480;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: 0.15s ease-in-out;
`;

export const Index__Element__Subtitle = styled.div`
  color: white;
  font-size: 28px;
  width: 100%;
  text-align: center;
`;

export const Index__Element__statistics = styled.div`
  color:white;
  text-align:center;
`

export const Index__Element_BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const Index__StyledButton = styled(Button)`
  border-color: black !important;
`;

export const Index__Table = styled(Table)`
  //맨 위쪽 줄
  ::before {
    width: 100%;
    height: 1px;
    content: "";
    border-top: 2px solid black;
    transform: translateY(2px);
  }
  .ant-table {
    background-color: transparent !important;
    border: 0px solid black;
  }

  .ant-table-thead > tr > th {
    background-color: transparent !important;
    border-radius: 0 !important;
    border-bottom: 2px solid black;
  }
  .ant-table-tbody > tr > td {
    background-color: transparent;
    border-bottom: 1px solid black;
  }

  .ant-table-cell {
    /* color: white !important; */
    text-shadow: 0.4px 0.4px #111111;
  }
  //셀 나누는 칸
  .ant-table-thead th.ant-table-cell::before {
    content: "";
    width: 0px;
    height: 0% !important;
  }
`;
