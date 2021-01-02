import React from 'react'
import styled from 'styled-components'

const navbar = () => {
  return (
    <Nav>
      <div className="navInnerContainer">
        <div className="leftContainer">
          <div>
            <h3>COALA</h3>
          </div>
          <ul>
            <li>홈</li>
            <li>Bootcamps 리뷰</li>
          </ul>
        </div>
        <div className="RightContainer">
          <ul>
            <li>회원가입</li>
            <li>로그인</li>
          </ul>
        </div>
      </div>
    </Nav>
  )
}

export default navbar

const Nav = styled.div`
  z-index: 100;
  top: 0;
  border-bottom: 1px solid #808080;

  .navInnerContainer {
    height: 64px;
    padding: 0 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .leftContainer {
      display: flex;
      align-items: center;

      div {
        h3 {
          font-size: 30px;
        }
      }

      ul {
        display: flex;
      }

      li {
        color: #4d4d4d;
        font-size: 18px;
        padding: 0 20px;
        list-style: none;
      }
    }
    .RightContainer {
      ul {
        display: flex;
        list-style: none;

        li {
          padding: 10px 20px;
          margin-right: 8px;
          background-color: #eeeeee;
          color: #7e7e7e;
          font-size: 15px;
        }
      }
    }
  }
`
