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
  Index__Element__statistics
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


export default function IndexUI(props) {
  //JS Section
  const Character_array = ["Ironclad","Silent","Defect","Watcher"];
  

  //HTML Section
  return (
    <Index__Wrapper>
      <Index__Form>
        <Index__FileInput as="label" htmlFor="input-file">
          Input .run File Here!
        </Index__FileInput>
        <Index__FileHidden
          type="file"
          id="input-file"
          onChange={props.hfc}
          multiple
        ></Index__FileHidden>
      </Index__Form>
      <Index__Title_Stat>Statistics Online</Index__Title_Stat>
      <Index__Statistics__container>
        <Index__Statistics__element style={{ backgroundColor: props.lb }}>
          <Index__Element__Subtitle>
            {Character_array[props.LChar]}<br></br>Card PickRate
            </Index__Element__Subtitle>
            <Index__Element__statistics>
              PickRate: {Math.round((props.LCharData?.[0]||0)*10)/10}% WinRate: {Math.round((props.LCharData?.[1]||0)*10)/10}%
            </Index__Element__statistics>
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
          
          <Index__Table
            columns={columns}
            dataSource={props.curPick}
            pagination={false}
            rowHoverable={false}
          ></Index__Table>
        </Index__Statistics__element>
        <Index__Statistics__element style={{ backgroundColor: props.rb }}>
          <Index__Element__Subtitle>
          {Character_array[props.RChar]} <br></br>Card WinRate</Index__Element__Subtitle>
          <Index__Element__statistics>
          PickRate: {Math.round((props.RCharData?.[0]||0)*10)/10}% WinRate: {Math.round((props.RCharData?.[1]||0)*10)/10}%
          </Index__Element__statistics>
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
            
          </Index__Element_BtnContainer>
          <Index__Table
            columns={columns}
            dataSource={props.curWin}
            pagination={false}
            rowHoverable={false}
          ></Index__Table>
        </Index__Statistics__element>
      </Index__Statistics__container>
    </Index__Wrapper>
  );
}
