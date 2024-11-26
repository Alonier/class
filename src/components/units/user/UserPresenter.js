import UsercellLogic from "../usercell/UsercellContainer.js";
import {
  User__Main__Wrapper,
  Main__StyledButton,
  User__btnContainer,
  User__Wrapper,
  User__Main__Header,
  User__Main__Header__Name,
  User__Main__Header__Playcount,
  User__Main__cellList,
  User__Main__cellList__subtitle,
} from "./UserStyles.js";

export function UserUI(props) {
  return (
    <User__Wrapper>
      <User__btnContainer>
        <Main__StyledButton
          style={{ backgroundColor: "#831317" }}
          onClick={() => props.setCharacter("IRONCLAD")}
        >
          IronClad
        </Main__StyledButton>
        <Main__StyledButton
          style={{ backgroundColor: "#3B820E" }}
          onClick={() => props.setCharacter("SILENT")}
        >
          Silent
        </Main__StyledButton>
        <Main__StyledButton
          style={{ backgroundColor: "#5E3A77" }}
          onClick={() => props.setCharacter("DEFECT")}
        >
          Defect
        </Main__StyledButton>
        <Main__StyledButton
          style={{ backgroundColor: "#13557E" }}
          onClick={() => props.setCharacter("WATCHER")}
        >
          Watcher
        </Main__StyledButton>
        <Main__StyledButton
          style={{ backgroundColor: "#1F211D" }}
          onClick={() => props.setCharacter("ALL")}
        >
          All
        </Main__StyledButton>
      </User__btnContainer>
      <User__Main__Wrapper>
        <User__Main__Header>
          <User__Main__Header__Name>
            {props.curStatData?.name}
          </User__Main__Header__Name>
          <User__Main__Header__Playcount>
            {/* get api/users/{userID}.records[N].win / lose */}
            30승 123패
          </User__Main__Header__Playcount>
        </User__Main__Header>
        <User__Main__cellList>
          <User__Main__cellList__subtitle>
            Recent Games
          </User__Main__cellList__subtitle>
          {props.curCellData?.map((data, index) => {
            return <UsercellLogic data={data} key={index}></UsercellLogic>;
          })}
        </User__Main__cellList>
      </User__Main__Wrapper>
    </User__Wrapper>
  );
}
