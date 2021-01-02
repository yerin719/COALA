import styled from "styled-components"

interface containerProps {
    footerImage: string
  }
  
  
  export const Footer: React.FC<containerProps> = ({footerImage}) => {
    return (
      <FooterSection>
        <img src={footerImage} />
      </FooterSection>
    )
  }

const FooterSection = styled.div`
width:100%;
padding:0;
img{
    width:100%;
}
`

