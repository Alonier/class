import {
  Index__FileHidden,
  Index__FileInput,
  Index__Form,
  Index__Table,
  Index__Statistics__container,
  Index__Statistics__element,
  Index__Title_Stat,
  Index__Wrapper,
  Index__Element__Subtitle,
  Index__Element_BtnContainer,
  Index__StyledButton,
} from "./Index.styles";

import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <b>{text}</b>,
  },
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate",
  },
];

const Data = [
  { key: "1", name: "Strike", rate: 100.0 },
  { key: "2", name: "Streamline", rate: 24.3 },
  { key: "3", name: "Sweeping Beam", rate: 22.1 },
  { key: "4", name: "Cold Snap", rate: 21.1 },
  { key: "5", name: "Go for the Eyes", rate: 18.1 },
  { key: "6", name: "Rebound", rate: 14.1 },
  { key: "7", name: "Beam Cell", rate: 12.1 },
  { key: "8", name: "Ball Lightning", rate: 10.1 },
];

export default function IndexUI(props) {
  //JS Section
  //서버 데이터 로딩 (임시로 배열 사용)
  //구현 필요

  //HTML Section
  return (
    <Index__Wrapper>
      <Index__Form onSubmit={props.hs}>
        <Index__FileInput as="label" htmlFor="input-file">
          Input .run File Here!
        </Index__FileInput>
        <Index__FileHidden
          type="file"
          accept=".json"
          id="input-file"
          onChange={props.hfc}
        ></Index__FileHidden>
      </Index__Form>
      <Index__Title_Stat>Statistics Online</Index__Title_Stat>
      <Index__Statistics__container>
        <Index__Statistics__element>
          <Index__Element__Subtitle>Card PickRate</Index__Element__Subtitle>
          <Index__Element_BtnContainer>
            <Index__StyledButton
              style={{ backgroundColor: "#831317", borderColor: "#831317" }}
            >
              IronClad
            </Index__StyledButton>
            <Index__StyledButton
              style={{ backgroundColor: "#3B820E", borderColor: "#3B820E" }}
            >
              Silent
            </Index__StyledButton>
            <Index__StyledButton
              style={{ backgroundColor: "#13557E", borderColor: "#13557E" }}
            >
              Defect
            </Index__StyledButton>
            <Index__StyledButton
              style={{ backgroundColor: "#5E3A77", borderColor: "#5E3A77" }}
            >
              Watcher
            </Index__StyledButton>
          </Index__Element_BtnContainer>
          <Index__Element_BtnContainer>
            <Index__StyledButton
              style={{ backgroundColor: "#99CDF2", borderColor: "#99CDF2" }}
            >
              Floor 1
            </Index__StyledButton>
            <Index__StyledButton
              style={{ backgroundColor: "#99CDF2", borderColor: "#99CDF2" }}
            >
              Floor 2
            </Index__StyledButton>
            <Index__StyledButton
              style={{ backgroundColor: "#99CDF2", borderColor: "#99CDF2" }}
            >
              Floor 3
            </Index__StyledButton>
          </Index__Element_BtnContainer>
          <Index__Table
            columns={columns}
            dataSource={Data}
            pagination={false}
            rowHoverable={false}
          ></Index__Table>
        </Index__Statistics__element>
        <Index__Statistics__element>
          <Index__Element__Subtitle>???</Index__Element__Subtitle>
          <Index__Table
            columns={columns}
            dataSource={Data}
            pagination={false}
            rowHoverable={false}
          ></Index__Table>
        </Index__Statistics__element>
      </Index__Statistics__container>
    </Index__Wrapper>
  );
}
