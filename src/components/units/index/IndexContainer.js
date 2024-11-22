src/components/units/index/IndexContainer.js
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
        "http://localhost:8080/api/runfile/upload",
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

  //File이 변경될 때 호출, file axios 로 server에 전송하기
  useEffect(() => {
    if (file) {
      console.log("File selected: ", file);
      uploadFile();
    }
  }, [file]);
  // 파일 서비스

  //데이터 로딩
  // axiosInstance.get("").then((res) => {});

  //데이터, 배경 연결
  //왼쪽
  useEffect(() => {
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
  }, [LChar]);
  //오른쪽
  useEffect(() => {
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
  }, [RChar]);

  //HTML Section
  return (
    <IndexUI
      hfc={handleFileChange}
      lb={LBGC}
      rb={RBGC}
      setlchar={setLChar}
      setrchar={setRChar}
    ></IndexUI>
  );
}
