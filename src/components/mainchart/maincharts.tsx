import styled from "styled-components"
import { Chart } from "./chart"


  
  
export const MainChart = () => {
    return(
      <MainChartSection>
        <h3>COALA CHART</h3>
        <div>
        <Chart />
        <Chart />
        <Chart/>
        </div>
  </MainChartSection>)
    
};

MainChart.getInitialProps = async () => {
  const res = await fetch('database/chardata_1.json')
  const data = await res.json()
  console.log(data);
  return data;
};

const MainChartSection = styled.section`
width:100%;
height:600px;
background-color:#EEEEEE;
display: flex;
flex-direction: column;
align-items: center;
h3{
  font-size:45px;
  margin:70px 0 30px 0;
}
div{
  display: flex;
}
`