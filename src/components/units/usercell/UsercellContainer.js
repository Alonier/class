import UsercellUI from "./UsercellPresenter"

export default function UsercellLogic(props) {
  const data = props.data;
  //   console.log(data);

  return (
    <UsercellUI
      isVictory={data.is_victory}
      playTime={data.play_time}
      ascensionLevel={data.ascension_level}
      score={data.score}
      finalRelics={data.final_relics}
      finalCards={data.final_cards}
    ></UsercellUI>
  );
}