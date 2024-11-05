import IndexUI from "./Index.presenter";

export default function IndexLogic() {
  //JS Section

  const onClickUpload = (event) => {
    const fileInput = event.target.nextElementSibling;
    const file = fileInput.files;
    const formData = new FormData();
    formData.append("file", file);

    console.log(formData);
  };

  //HTML Section
  return <IndexUI aaa={onClickUpload}></IndexUI>;
}
