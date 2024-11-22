import { useState } from "react";
import { UserUI } from "./UserPresenter";

export function UserLogic(){

    const [character,setCharacter] = useState(0);
    //filter 사용, character: Ironclad 인것을 뽑아 사용
    const playData = [
        {
          game_uuid: "DL12J1323LW1",
          is_victory: true,
          final_floor: 10,
          play_time: 1920,
          ascension_level: 20,
          score: 804,
          character: "Ironclad",
          final_cards: ["Strike", "Defend"],
          final_relics: ["sneko", "Akabeko"],
        },
        {
          game_uuid: "DL12J1323LW1",
          is_victory: true,
          final_floor: 10,
          play_time: 1920,
          ascension_level: 20,
          score: 804,
          character: "Ironclad",
          final_cards: ["Strike", "Defend"],
          final_relics: ["sneko", "Akabeko"],
        },
      ];

      const UserData = [
        {
          key: 1,
          /* get api/users{userID}.character[N].win / lose 로 구현 */
          WinningRate: 21.5,
          /* get api/users{userID}.character[N].most_winning_streak */
          MWStreak: 4,
          /* get api/users{userID}.character[N].minimum_time */
          MTime: "21:05",
          /* get api/users{userID}.character[N].max_ascension_level */
          MaxAscensionLevel: 20,
          /* get api/users{userID}.character[N].best_score */
          BestScore: 33333,
        },
      ]


    return <UserUI setCharacter = {setCharacter} playData = {playData} UserData = {UserData}></UserUI>
}