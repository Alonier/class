import { useEffect, useState } from "react";
import { UserUI } from "./UserPresenter";
import axios from "axios";

export function UserLogic() {
  const [character, setCharacter] = useState("IRONCLAD");
  const [cellData, setCellData] = useState({ records: [] });
  const [curCellData, setCurCellData] = useState(null);
  const [statData, setStatData] = useState({ records: [] });
  const [curStatData, setCurStatData] = useState(null);
  const [wrapperColor, setWrapperColor] = useState("#831317");

  //유저 전투 기록, 유저 통계 데이터 전부 불러오기
  const fetchData = async () => {
    try {
      //현재 유저 id 1로 고정
      const response = await axios.get(
        "http://localhost:8080/api/users/1/records"
      );
      setCellData(response.data);

      const response2 = await axios.get(
        "http://localhost:8080/api/users/1/statistics/bestRecords"
      );
      setStatData(response2.data);
    } catch (err) {
      console.error(err);
    }
  };

  //유저 셀 전달용 데이터 필터링 함수
  const filterCellData = async () => {
    if (character === "ALL") {
      setCurCellData(cellData.records.slice(-20));
    } else if (cellData && cellData.records) {
      const filteredData = cellData.records.filter(
        (element) => element.character === character
      );

      setCurCellData(filteredData.slice(-20));
    }
  };

  const filterStatData = async () => {
    let param;
    switch (character) {
      case "ALL":
        param = 0;
        break;
      case "IRONCLAD":
        param = 1;
        break;
      case "SILENT":
        param = 2;
        break;
      case "DEFECT":
        param = 3;
        break;
      case "WATCHER":
        param = 4;
        break;
    }
    setCurStatData(statData[param]);
  };

  const setStyle = () =>{
    let param;
    switch(character){
      case "ALL":
        param = "#1F211D";
        break;
      case "IRONCLAD":
        param = "#831317";
        break;
      case "SILENT":
        param = "#3B820E";
        break;
      case "DEFECT":
        param = "#5E3A77";
        break;
      case "WATCHER":
        param = "#13557E";
        break;
    }
    setWrapperColor(param);
  }

  useEffect(() => {
    fetchData();
  }, []);

  //character 패러미터가 변경되면 셀 데이터 필터링, 유저 통계 필터링, Wrapper 스타일링
  useEffect(() => {
    //유저 셀 전달용 데이터 필터링 함수
    filterCellData();
    //유저 통계 전달용 데이터 필터링 함수
    filterStatData();
    //스타일 설정 함수
    setStyle();
  }, [character, cellData, statData]);


  return (
    <UserUI
      setCharacter={setCharacter}
      curCellData={curCellData}
      curStatData={curStatData}
      wrapperColor={wrapperColor}
    ></UserUI>
  );
}
