import styled from 'styled-components'

interface containerProps {
  rnum: string
  movieNm: number
  audiCnt: number
}

export const Chart = () => {
  return (
    <ChartCard>
      <h4>Online Coding</h4>
      <ul>
        <li>
          <span>1</span>
          <div>
            <span>위코드</span>
            <span>★★★★★ 5.0 out of 5 stars</span>
          </div>
        </li>
        <li>
          <span>2</span>
          <div>
            <span>코드스쿼드</span>
            <span>★★★★★ 5.0 out of 5 stars</span>
          </div>
        </li>
        <li>
          <span>3</span>
          <div>
            <span>바닐라코딩</span>
            <span>★★★★★ 5.0 out of 5 stars</span>
          </div>
        </li>
      </ul>
      <button>MORE CHART</button>
    </ChartCard>
  )
}

const ChartCard = styled.div`
  width: 350px;
  background-color: white;
  margin: 0 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  h4 {
    text-align: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    li {
      display: flex;
      flex-direction: row;
      padding: 20px;
      span {
        margin-right: 10px;
      }
      div {
        display: flex;
        flex-direction: column;
      }
    }
  }
  button {
    width: 280px;
    outline: none;
    height: 30px;
    border: none;
    margin-bottom: 20px;
  }
`
