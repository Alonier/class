import {Usercell__Wrapper,
        Usercell_relic, 
        Usercell_card,
        Usercell_header,
        Usercell_section, 
        Usercell_header_info,
        Usercell_header_button} from "./UsercellStyles";
  
  export default function UsercellUI(props) {
  
    return (
      <Usercell__Wrapper>
        <Usercell_header className = "Usercell_header">
          <Usercell_header_info>
          <div> {props.isVictory ? "Victory!" : "defeat..."}</div>
          <div>{props.playTime}</div>
          <div>ascension: {props.ascensionLevel}</div>
          </Usercell_header_info>
          <Usercell_header_button onClick = {(event) => props.setDisplay(event)}>V</Usercell_header_button>
        </Usercell_header>
        <Usercell_section className = "Usercell_section">
        <Usercell_relic>
        <div>relics: {props.finalRelics.map((element) => element+", ")}</div>
        </Usercell_relic>
        <Usercell_card>
          <div>cards: {props.finalCards.map((element) => element + ", ")}</div>
        </Usercell_card>
        </Usercell_section>
      </Usercell__Wrapper>
    );
  }
  