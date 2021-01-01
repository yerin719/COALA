import styled from 'styled-components'

interface containerProps {
  bannerImage: string
}

export const Banner: React.FC<containerProps> = ({ bannerImage }) => {
  return (
    <BannerSection>
      <img src={bannerImage} />
    </BannerSection>
  )
}

const BannerSection = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`
