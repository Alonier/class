import IndexUI from "./Index.presenter";
import axiosInstance from "../../../../src/utils/axiosInstance";
import { useState, useEffect } from "react";

export default function IndexLogic() {
  //JS Section
  const [file, setFile] = useState(null);
  const [LBGC, setLBGC] = useState("#354480");
  const [RBGC, setRBGC] = useState("#354480");

  //0: IC , 1: SI, 2: DE, 3: WA
  const [LChar, setLChar] = useState(0);
  const [RChar, setRChar] = useState(0);

  // 파일 서비스
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //예외처리
    if (!file) {
      alert("파일이 입력되지 않았습니다.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    // 서버에 파일 전송 요청
    //   try {
    //     const response = await fetch('/upload', {
    //         method: 'POST',
    //         body: formData
    //     });

    //     if (response.ok) {
    //         const result = await response.json();
    //         console.log('Upload Success:', result);
    //         alert('File uploaded successfully');
    //     } else {
    //         console.error('Upload Failed:', response.statusText);
    //         alert('File upload failed');
    //     }
    // } catch (error) {
    //     console.error('Error:', error);
    //     alert('An error occurred while uploading the file');
    // }
  };

  //File이 변경될 때 호출, file console.log 로 띄우기
  useEffect(() => {
    if (file) {
      console.log("File selected: ", file);
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
      hs={handleSubmit}
      hfc={handleFileChange}
      // setlb={setLBGC}
      lb={LBGC}
      // setrb={setRBGC}
      rb={RBGC}
      setlchar={setLChar}
      setrchar={setRChar}
    ></IndexUI>
  );
}
