import UsercellUI from "./UsercellPresenter";

export default function UsercellLogic(props) {
  const data = props.data;

  const cards = data.final_cards;

  // 1. 카드 개수 집계
  const cardCount = cards.reduce((acc, card) => {
    acc[card] = (acc[card] || 0) + 1; // 카드 이름을 키로, 개수를 값으로 저장
    return acc;
  }, {});

  // 2. 결과 배열로 변환
  const transformedCards = Object.entries(cardCount).map(
    ([cardName, count]) => `${count} x ${cardName}`
  );

  const setDisplay = (event) => {
    const usercell_section =
      event.target.parentElement.parentElement.querySelector(
        ".Usercell_section"
      );
    const currentDisplay = window.getComputedStyle(usercell_section).display;

    if (currentDisplay === "none") {
      usercell_section.style["display"] = "flex";
    } else {
      usercell_section.style["display"] = "none";
    }
  };

  return (
    <UsercellUI
      isVictory={data.is_victory}
      playTime={data.play_time}
      ascensionLevel={data.ascension_level}
      score={data.score}
      finalRelics={data.final_relics}
      finalCards={transformedCards}
      character={data.character}
      setDisplay={setDisplay}
    ></UsercellUI>
  );
}
