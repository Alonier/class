import IndexUI from "./IndexPresenter";
import axios from "axios";
import { useState, useEffect } from "react";

export default function IndexLogic() {
  //JS Section
  const [file, setFile] = useState(null);
  const [LBGC, setLBGC] = useState("#354480");
  const [RBGC, setRBGC] = useState("#354480");

  //0: IC , 1: SI, 2: DE, 3: WA
  const [LChar, setLChar] = useState(0);
  const [RChar, setRChar] = useState(0);

  const[charData, setCharData] = useState({records:[]});
  const[LCharData,setLCharData] = useState(null);
  const[RCharData,setRCharData] = useState(null);

  const[redPick, setRedPick] = useState({records:[]});
  const[greenPick, setGreenPick] = useState({records:[]});
  const[bluePick, setBluePick] = useState({records:[]});
  const[purplePick, setPurplePick] = useState({records:[]});
  const pickArr = [redPick, greenPick, bluePick,purplePick];

  const [curPick, setCurPick] = useState([]);
  const [curWin, setCurWin] = useState([]);

  const [LFloor, setLFloor] = useState(0);
  const [RFloor,setRFloor] = useState(0);

  

  //백엔드 연결 확인

  // 파일 서비스
  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/runfile/upload/1",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("성공");
    } catch (err) {
      alert("실패");
      console.error(err);
    }
  };

  const fetchData = async () => {
    try {
      //현재 유저 id 1로 고정
      const responseCharacter = await axios.get(
        "http://localhost:8080/api/global/character"
      );
        
      setCharData(responseCharacter.data);
      // console.log(responseCharacter.data);

      const responseRedPick = await axios.get(
        "http://localhost:8080/api/global/card?color=RED"
      );
      setRedPick(responseRedPick.data);
      // console.log(responseRedPick.data);

      const responseGreenPick = await axios.get(
        "http://localhost:8080/api/global/card?color=GREEN"
      );
      setGreenPick(responseGreenPick.data);
      // console.log(responseGreenPick.data);

      const responseBluePick = await axios.get(
        "http://localhost:8080/api/global/card?color=BLUE"
      );
      setBluePick(responseBluePick.data);
      // console.log(responseBluePick.data);

      const responsePurplePick = await axios.get(
        "http://localhost:8080/api/global/card?color=PURPLE"
      );
      setPurplePick(responsePurplePick.data);
      // console.log(responsePurplePick.data);

    } catch (err) {
      console.error(err);
    }
  };

  const setStyle = (props) =>{
    if(props === "LChar"){
    switch (LChar) {
      case 0:
        setLBGC("#831317");
        break;
      case 1:
        setLBGC("#3B820E");
        break;
      case 2:
        setLBGC("#13557E");
        break;
      case 3:
        setLBGC("#5E3A77");
        break;
      default:
        break;
    }
  }
  else{
    switch (RChar) {
      case 0:
        setRBGC("#831317");
        break;
      case 1:
        setRBGC("#3B820E");
        break;
      case 2:
        setRBGC("#13557E");
        break;
      case 3:
        setRBGC("#5E3A77");
        break;
      default:
        break;
    }
  }
  }

  const setStatistics = (props) =>{
    if(charData){
      if(props === "LChar"){
        setLCharData([charData[LChar+1]?.pick_rate,charData[LChar+1]?.win_rates[20].win_rate]);
      }
      else{
     
      setRCharData([charData[RChar+1]?.pick_rate,charData[RChar+1]?.win_rates[20].win_rate]);
      }
      // console.log(LCharData, RCharData);
    }
  }
  
  // 🔥 LChar에 따라 상위 20개 데이터 정렬 및 저장
  const updateTopPicks = () => {
    if (pickArr[LChar] && Array.isArray(pickArr[LChar])) {
      const sortedData = [...pickArr[LChar]]
        .sort((a, b) => b.total_picked_rate - a.total_picked_rate) // 🔥 total_picked_rate 내림차순 정렬
        .slice(0, 20); // 🔥 상위 20개
      
      const sortedPick = sortedData.map((data,index) =>
        ({
          key: index+1,
          name: data.name,
          rate: Math.round(data.total_picked_rate * 100)/100
        })
      )

      setCurPick(sortedPick);
    }
    console.log(sortedPick);

  };

   // 🔥 LChar에 따라 상위 20개 데이터 정렬 및 저장
   const updateTopWins = () => {
    if (pickArr[RChar] && Array.isArray(pickArr[RChar])) {
      const sortedData = [...pickArr[RChar]]
        .sort((a, b) => b.total_win_rate - a.total_win_rate) // 🔥 total_picked_rate 내림차순 정렬
        .slice(0, 20); // 🔥 상위 20개
      
      const sortedWin = sortedData.map((data,index) =>
        ({
          key: index+1,
          name: data.name,
          rate: Math.round(data.total_win_rate * 100)/100
        })
      )
      

      setCurWin(sortedWin);
    }
    // console.log(sortedWin);

  };


  
  //File이 변경될 때 호출, file axios 로 server에 전송하기
  useEffect(() => {
    if (file) {
      // console.log("File selected: ", file);
      uploadFile();
    }
  }, [file]);
  

  useEffect(() => {
    setStyle("LChar");
    setStatistics("LChar");
    updateTopPicks();
  }
  , [LChar]);

  //오른쪽
  useEffect(() => {
    setStyle("RChar");
    setStatistics("RChar");
    updateTopWins();
  }, [RChar]);

  useEffect(()=>{
    fetchData().then(
      ()=>{
        setStatistics("LChar");
        setStatistics("RChar");
        updateTopPicks();
        updateTopWins();
      }
    );
    
  },[]);

  //HTML Section
  return (
    <IndexUI
      hfc={handleFileChange}
      lb={LBGC}
      rb={RBGC}
      setlchar={setLChar}
      setrchar={setRChar}
      LChar = {LChar}
      RChar = {RChar}
      LFloor = {LFloor}
      RFloor = {RFloor}
      setLFloor = {setLFloor}
      setRFloor = {setRFloor}
      LCharData = {LCharData}
      RCharData = {RCharData}
      curPick = {curPick}
      curWin = {curWin}
    ></IndexUI>
  );
}
