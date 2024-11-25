import { useEffect, useState } from "react";
import { UserUI } from "./UserPresenter";
import axios from "axios";

export function UserLogic(){

    const [character,setCharacter] = useState("IRONCLAD");
    const [cellData, setCellData] = useState({ records: [] });
    const [curCellData,setCurCellData] = useState(null);

      //유저 전투 기록 데이터 전부 불러오기
      useEffect(() => {
        const fetchData = async () => {
          try {
            //현재 1로 고장
            const response = await axios.get("http://localhost:8080/api/users/1/records");
            setCellData(response.data); 
            
            // const response2 = await axios.get("http://localhost:8080/api/users/1/bestRecord")
            // console.log(response.data); 
          } catch (err) {
            console.error(err);
          }
        };
      
        fetchData();
      }, []);
    
      //character 패러미터가 변경되면 데이터 필터링
      useEffect(() => {
        //유저 셀 전달용 데이터 필터링 함수
        filterCellData();
      }, [character, cellData]);

      //유저 셀 전달용 데이터 필터링 함수
      const filterCellData = async () => {
        if(character === "ALL"){
          setCurCellData(cellData.records.slice(-20));
        }
        else if(cellData&&cellData.records){
        const filteredData = cellData.records.filter(element => element.character === character);

        setCurCellData(filteredData.slice(-20));
        }
      }

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





    return <UserUI setCharacter = {setCharacter}  UserData = {UserData} curCellData = {curCellData}></UserUI>
}