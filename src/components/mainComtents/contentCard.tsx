import styled from "styled-components"

interface containerProps {
    contentImage: string
  }
  
  
export const ContentCard: React.FC<containerProps> = ({ contentImage}) => {
    return (
        <ChartCard>
            <img src={contentImage }/>
            <header>비전공자 웹개발자 취업후기</header>
            <span>이예린</span>
      </ChartCard>
    )
  }

const ChartCard = styled.div`
width:300px;
display : flex;
flex-direction : column;
margin: 0 10px 0 10px;
img{
    width:100%;
    margin-bottom:10px;
}
header{
    font-weight: bold;
    font-size: 22px;
    margin-bottom:10px;
}


`