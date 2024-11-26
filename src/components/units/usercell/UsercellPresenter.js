import {
  Usercell__Wrapper,
  Usercell_relic,
  Usercell_card,
  Usercell_header,
  Usercell_section,
  Usercell_header_info,
  Usercell_header_button,
  Usercell_header_info_isVictory,
  Usercell_section_subtitle,
} from "./UsercellStyles";

export default function UsercellUI(props) {
  return (
    <Usercell__Wrapper>
      <Usercell_header
        className="Usercell_header"
        style={{ backgroundColor: props.isVictory ? "#ecf2ff" : "#f6bbc7" }}
      >
        <Usercell_header_info>
          <Usercell_header_info_isVictory
            style={{ color: props.isVictory ? "blue" : "red" }}
          >
            {props.isVictory ? "Victory!" : "Defeat..."}
          </Usercell_header_info_isVictory>
          <div>🕒 {props.playTime}</div>
          <div>ascension: {props.ascensionLevel}</div>
          <div>{props.character}</div>
        </Usercell_header_info>
        <Usercell_header_button onClick={(event) => props.setDisplay(event)}>
          V
        </Usercell_header_button>
      </Usercell_header>
      <Usercell_section className="Usercell_section">
        <Usercell_relic>
          <Usercell_section_subtitle>Relics</Usercell_section_subtitle>
          {props.finalRelics.map((element) => element + ", ")}
        </Usercell_relic>
        <Usercell_card>
          <div>
            <Usercell_section_subtitle>Cards</Usercell_section_subtitle>{" "}
            {props.finalCards.map((element) => element + ", ")}
          </div>
        </Usercell_card>
      </Usercell_section>
    </Usercell__Wrapper>
  );
}
