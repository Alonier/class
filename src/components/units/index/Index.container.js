import IndexUI from "./Index.presenter";
import { useState, useEffect } from "react";

export default function IndexLogic() {
  //JS Section
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //예외처리
    if(!file){
      alert("파일이 입력되지 않았습니다.");
      return;
    }

    const formData = new FormData();
    formData.append('file',file);

  // 서버 요청
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
  
  }
  
  //File이 변경될 때 호출, file console.log 로 띄우기
  // useEffect(() => {
  //   if(file){
  //     console.log("File selected: ", file);
  //   }
  // }, [file]);

  //HTML Section
  return <IndexUI hs={handleSubmit} hfc = {handleFileChange}></IndexUI>;
}
