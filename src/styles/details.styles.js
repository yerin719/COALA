import styled from 'styled-components'
import theme, { flexSet } from '@common/styles/theme.styles'

const DetailsMain = styled.main`
  background: #f9f9f9;
`

const DetailsHeader = styled.header`
  width: 100%;
  .DetailsHeader {
    &-background {
      figure {
        width: 100%;
        height: 15vw;
        overflow: hidden;

        img {
          width: 100%;
          transform: translateY(-30%);
          z-index: -1;
        }
      }
      > div {
        position: absolute;
        top: 64px;
        width: 100%;
        height: 15vw;
        background: ${theme.primaryColor};
        opacity: 0.5;
      }
    }
    &-title {
      position: absolute;
      top: 10vw;
      left: 10vw;
      ${flexSet('center', 'flex-start')}

      figure {
        cursor: pointer;

        .MuiAvatar-root {
          width: 15vw;
          height: 15vw;
          max-width: 170px;
          max-height: 170px;
        }
      }
      h1 {
        margin-left: 20px;
        color: #fff;
        font-size: 4vw;
        text-transform: uppercase;
        ${flexSet('flex-start', 'flex-end')}

        span {
          &:nth-child(2) {
            width: 0.3vw;
            background: #fff;
            height: 5vw;
            margin: 0 2vw;
          }
          &:last-child {
            font-size: 2vw;
          }
        }
      }
    }
    &-footer {
      padding: 0 7vw;
      height: 20vw;

      .MuiPaper-root {
        padding-top: 1vw;
        height: 100%;
        ${flexSet('space-between', null, 'column')}
      }
    }
    &-content {
      > div {
        &:first-child {
          ${flexSet('flex-start', 'center')}
          padding-left: 22vw;

          > span {
            margin: 0 0.5vw;
            font-weight: 700;
          }
        }
        &:nth-child(2) {
          margin: 1.5vw auto;
          background: #ccc;
          width: 95%;
          height: 1px;
        }
        &:nth-child(3) {
          margin: auto;
          width: 95%;
          ${flexSet('space-between', 'center')};
          > span {
            width: 70%;
          }
          > button {
            font-weight: 900;
          }
        }
      }
    }
    &-menu {
      ${flexSet('center', 'center')};
      .MuiButtonBase-root {
        font-weight: 700;
      }
    }
  }
`
const DetailsArticle = styled.article`
  margin-top: 2vw;
  padding: 0 7vw;
  width: 100%;
`
const DetailsSection = styled.section`
  width: 100%;
  padding: 0 2vw;
`
const DetailsFooter = styled.footer`
  width: 100%;
`

const s = {
  DetailsMain,
  DetailsHeader,
  DetailsArticle,
  DetailsSection,
  DetailsFooter,
}

export default s
