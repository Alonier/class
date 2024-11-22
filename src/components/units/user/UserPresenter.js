import UsercellLogic from "../usercell/UsercellContainer.js";
import {
  User__Main__Wrapper,
  Main__StyledButton,
  User__btnContainer,
  User__Wrapper,
  User__Main__Header,
  User__Main__Header__Name,
  User__Main__Header__Playcount,
  User__Main__styledTable,
  User__Main__cellList,
} from "./UserStyles.js";

const columns = [
  {
    title: "Winning Rate",
    dataIndex: "WinningRate",
    key: "WinningRate",
  },
  {
    title: "most winning streak",
    dataIndex: "MWStreak",
    key: "MWStreak",
  },
  {
    title: "Minimum time",
    dataIndex: "MTime",
    key: "MTime",
  },
  {
    title: "Highest Ascension",
    dataIndex: "MaxAscensionLevel",
    key: "HighestAscension",
  },
  {
    title: "Best Score",
    dataIndex: "BestScore",
    key: "BestScore",
  },
];



export function UserUI(props) {
  return (
    <User__Wrapper>
      <User__btnContainer>
        <Main__StyledButton
          style={{ backgroundColor: "#831317" }}
          onClick={() => props.setCharacter(0)}
        >
          IronClad
        </Main__StyledButton>
        <Main__StyledButton
          style={{ backgroundColor: "#3B820E" }}
          onClick={() => props.setCharacter(1)}
        >
          Silent
        </Main__StyledButton>
        <Main__StyledButton
          style={{ backgroundColor: "#5E3A77" }}
          onClick={() => props.setCharacter(2)}
        >
          Defect
        </Main__StyledButton>
        <Main__StyledButton
          style={{ backgroundColor: "#13557E" }}
          onClick={() => props.setCharacter(3)}
        >
          Watcher
        </Main__StyledButton>
        <Main__StyledButton
          style={{ backgroundColor: "#1F211D" }}
          onClick={() => props.setCharacter(4)}
        >
          All
        </Main__StyledButton>
      </User__btnContainer>
      <User__Main__Wrapper>
        <User__Main__Header>
          <User__Main__Header__Name>
            {/* get api/users{userID}.username */}
            송하일런트를 능가하는 엄이언 클레드
          </User__Main__Header__Name>
          <User__Main__Header__Playcount>
            {/* get api/users/{userID}.records[N].win / lose */}
            30승 123패
          </User__Main__Header__Playcount>
          <User__Main__styledTable
            columns={columns}
            dataSource={props.UserData}
            pagination={false}
            rowHoverable={false}
          ></User__Main__styledTable>
        </User__Main__Header>
        <User__Main__cellList>
          {props.playData.map((data) => {
            return <UsercellLogic data={data}></UsercellLogic>;
          })}
        </User__Main__cellList>
      </User__Main__Wrapper>
    </User__Wrapper>
  );
}
