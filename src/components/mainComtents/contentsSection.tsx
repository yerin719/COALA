import styled from "styled-components"
import { ContentCard } from "./contentCard"


  
  
export const Contents = () => {
    return(
      <ContentsSection>
        <h3>CONTENTS</h3>
        <div>
                <ContentCard contentImage="https://d92mrp7hetgfk.cloudfront.net/images/sites/SU/SU_covid19_HeroImage/original.jpeg?1600724856" />
                <ContentCard contentImage="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/12-16_Springboard_Blog_image/original.jpg?1595605332" />
                <ContentCard contentImage="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/1.9.20_Evolve_Blog_Image/original.jpg?1595021647" />
                <ContentCard contentImage="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/12-16_Springboard_Blog_image/original.jpg?1595605332" />
                

        </div>
  </ContentsSection>)
    
};

Contents.getInitialProps = async () => {
  const res = await fetch('database/chardata_1.json')
  const data = await res.json()
  console.log(data);
  return data;
};

const ContentsSection = styled.section`
width:100%;
background-color:#ffffff;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom:60px;
h3{
  font-size:45px;
  margin:70px 0 30px 0;
}
div{
  display: flex;
}
`