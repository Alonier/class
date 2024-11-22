import { Usercell__Wrapper, Usercell_left, Usercell_right } from "./UsercellStyles";
  
  export default function UsercellUI(props) {
    console.log(props.finalRelics);
  
    return (
      <Usercell__Wrapper>
        <Usercell_left>
          <div> {props.isVictory ? "Victory!" : "defeat..."}</div>
          <div> {props.playTime}</div>
          <div>ascension: {props.ascensionLevel}</div>
        </Usercell_left>
        <Usercell_right>
          <div>{props.finalRelics.map((element) => element)}</div>
          <div>{props.finalCards.map((element) => element)}</div>
        </Usercell_right>
      </Usercell__Wrapper>
    );
  }
  