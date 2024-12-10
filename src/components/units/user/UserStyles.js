import styled from "@emotion/styled";
import { Button, List, Table } from "antd";

export const User__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #30343f;

  padding: 20px 5vw;
`;

export const User__btnContainer = styled.div`
  width: 100%;
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  align-items: start;
`;

export const Main__StyledButton = styled(Button)`
  border-color: transparent !important;
  padding: 12px 30px;
  font-size: 1.3em;
  color: #d4ad47;

  border-radius: 8px 8px 0px 0px;


`;

export const User__Main__Wrapper = styled.div`
  width: 100%;
  /* min-width: 800px; */

  padding: 20px 20px;

  background-color: #831317;

  display:flex;
  flex-direction:column;
  align-items:center;

  border-radius: 0px 8px 8px 8px;
`;

export const User__Main__Header = styled.div`
  width: 100%;
`;

export const User__Main__Header__Name = styled.div`
width:100%;
  font-size: 24px;
  font-weight: 700;
`;

export const User__Main__Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:flex-start;

  gap: 10px;
  width:100%;
  /* min-width: 760px; */
  margin-top: 30px;

  @media screen and (max-width: 800px){
    flex-direction: column;
    align-items: center;
  }
`;

export const User__Main__Section__StatisticList = styled.div`
  width: 360px;
  padding: 10px;
  display:flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 10px;

  background-color: #ffffff;
  border-radius: 5px;
  
`

export const User__Name = styled.div`
  position: absolute;
  transform:translateY(-52px) translateX(-11px);
  
  font-size:32px;
  color:#d4ad47;
`

export const User__Main__Section__StatisticElement = styled.div`
  
`

export const User__Main__cellList = styled.div`
  width: 700px;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 10px;
  
  background-color: #ffffff;
  border-radius:5px;

  @media screen and (max-width: 800px){
    width:340px;
  }
`;

export const User__Main__cellList__subtitle = styled.div`
  font-size: 1.5em;
  font-weight: 700;

  margin-bottom: 10px;
`;
