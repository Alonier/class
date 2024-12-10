import UsercellLogic from "../usercell/UsercellContainer.js";
import {
  User__Main__Wrapper,
  Main__StyledButton,
  User__btnContainer,
  User__Wrapper,
  User__Main__Header,
  User__Main__Header__Name,
  User__Main__cellList,
  User__Main__cellList__subtitle,
  User__Main__Section,
  User__Main__Section__StatisticList,
  User__Main__Section__StatisticElement,
  User__Name
} from "./UserStyles.js";

export function UserUI(props) {
  // console.log(props.curStatData)

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
      <User__Main__Wrapper
        style={{backgroundColor:props.wrapperColor}}
      >  
        <User__Main__Section>
        <User__Main__Section__StatisticList>
          <User__Name>
            {props.curStatData?.name}
          </User__Name>
          <User__Main__Section__StatisticElement>
            Win rate:{props.curStatData?.win_rate !== "NaN"?Math.round(props.curStatData?.win_rate*10)/10+"%":" No data"}
          </User__Main__Section__StatisticElement>
          <User__Main__Section__StatisticElement>
          Fastest Clear time: {props.curStatData?.min_time !== 2147483647?props.curStatData?.min_time:"No data"}
          </User__Main__Section__StatisticElement>
          <User__Main__Section__StatisticElement>
          Best Score: {props.curStatData?.best_score!== 0?props.curStatData?.best_score:" No data"}
          </User__Main__Section__StatisticElement>
          <User__Main__Section__StatisticElement>
          Max Ascension: {props.curStatData?.max_ascension}
          </User__Main__Section__StatisticElement>
        </User__Main__Section__StatisticList>
        <User__Main__cellList>
          <User__Main__cellList__subtitle>
            Recent Games
          </User__Main__cellList__subtitle>
          {props.curCellData?.map((data, index) => {
            return <UsercellLogic data={data} key={index}></UsercellLogic>;
          })}
        </User__Main__cellList>
        </User__Main__Section>
        
      </User__Main__Wrapper>
    </User__Wrapper>
  );
}
