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

  const[cardData,setCardData] = useState({records:[]});
  const[LCardData,setLCardData] = useState(null);
  const[RCardData,setRCardData] = useState(null);


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

      const responseCard = await axios.get(
        "http://localhost:8080/api/global/card"
      );

      setCardData(responseCard.data);
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
  }
  , [LChar]);

  //오른쪽
  useEffect(() => {
    setStyle("RChar");
    setStatistics("RChar");
  }, [RChar]);

  useEffect(()=>{
    fetchData().then(
      ()=>{
        setStatistics("LChar");
        setStatistics("RChar");
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
      LCharData = {LCharData}
      RCharData = {RCharData}
    ></IndexUI>
  );
}
