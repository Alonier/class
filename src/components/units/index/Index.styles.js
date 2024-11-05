import styled from "@emotion/styled";

export const Index__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #30343f;

  padding: 20px 300px;
`;

export const Index__FileInput = styled.div`
  width: 100%;
  height: 200px;
  min-width: 400px;

  border: 1px soild black;
  border-radius: 5px;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 32px;
`;

export const Index__FileHidden = styled.input`
  display: none;
`;

export const Index__Title_Stat = styled.div`
  width: 100%;
  margin-top: 20px;

  color: white;
  font-size: 40px;
`;

export const Index__Statistics__container = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Index__Statistics__element__IC = styled.div`
  width: 400px;
  height: 900px;

  background-color: red;
`;
