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
} from "./IndexStyles";

const columns = [
  {
    title: "rank",
    dataIndex: "key",
    key: "key",
  },
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

//임시 데이터 배열
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

const Data2 = [
  { key: "1", name: "a", rate: 100.0 },
  { key: "2", name: "b", rate: 24.3 },
  { key: "3", name: "c Beam", rate: 22.1 },
  { key: "4", name: "Cold d", rate: 21.1 },
  { key: "5", name: "Go f the g", rate: 18.1 },
  { key: "6", name: "e", rate: 14.1 },
  { key: "7", name: "Beam h", rate: 12.1 },
  { key: "8", name: "Ball i", rate: 10.1 },
];

export default function IndexUI(props) {
  //JS Section

  //HTML Section
  return (
    <Index__Wrapper>
      <Index__Form>
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
        <Index__Statistics__element style={{ backgroundColor: props.lb }}>
          <Index__Element__Subtitle>Card PickRate</Index__Element__Subtitle>
          <Index__Element_BtnContainer>
            <Index__StyledButton
              style={{ backgroundColor: "#831317" }}
              // 함수 하나로 setlb, setData 처리 예정
              onClick={() => props.setlchar(0)}
            >
                IronClad
            </Index__StyledButton>
            <Index__StyledButton
              style={{ backgroundColor: "#3B820E" }}
              onClick={() => props.setlchar(1)}
            >
              Silent
            </Index__StyledButton>
            <Index__StyledButton
              style={{ backgroundColor: "#13557E" }}
              onClick={() => props.setlchar(2)}
            >
              Defect
            </Index__StyledButton>
            <Index__StyledButton
              style={{ backgroundColor: "#5E3A77" }}
              onClick={() => props.setlchar(3)}
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
        <Index__Statistics__element style={{ backgroundColor: props.rb }}>
          <Index__Element__Subtitle>Card WinRate</Index__Element__Subtitle>
          <Index__Element_BtnContainer>
            <Index__StyledButton
              style={{ backgroundColor: "#831317" }}
              // 함수 하나로 setlb, setData 처리 예정
              onClick={() => props.setrchar(0)}
            >
                IronClad
            </Index__StyledButton>
            <Index__StyledButton
              style={{ backgroundColor: "#3B820E" }}
              onClick={() => props.setrchar(1)}
            >
              Silent
            </Index__StyledButton>
            <Index__StyledButton
              style={{ backgroundColor: "#13557E" }}
              onClick={() => props.setrchar(2)}
            >
              Defect
            </Index__StyledButton>
            <Index__StyledButton
              style={{ backgroundColor: "#5E3A77" }}
              onClick={() => props.setrchar(3)}
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
      </Index__Statistics__container>
    </Index__Wrapper>
  );
}
