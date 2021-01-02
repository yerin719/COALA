import styled from "styled-components"


  
  
export const Topic = () => {
    return(
      <TopicSection>
        <h3>BEST TOPIC</h3>
        <div>
                <ul>
                    <li><span>연애</span>오늘 헤어졌습니다..</li>
                    <li><span>맛집</span>구로디지털 단지 맛집 추천</li>
                    <li><span>허세</span>오빠차 뽑았다 널 데리러가</li>
                    <li><span>자유</span>토요일날 저녁 회식 메뉴는?</li>
                    <li><span>고백</span>저는 초밥을 매일 먹을 수 있습니다.</li>
                    <li><span>정보</span>연초 집콕 파티 추천 음식!!</li>
                </ul> 
        </div>
  </TopicSection>)
    
};

Topic.getInitialProps = async () => {
  const res = await fetch('database/chardata_1.json')
  const data = await res.json()
  console.log(data);
  return data;
};

const TopicSection = styled.section`
width:100%;
height:600px;
background-color:#eeeeee;
display: flex;
flex-direction: column;
align-items: center;
h3{
  font-size:45px;
  margin:70px 0 30px 0;
}
ul{
    width:1060px;
    background-color: white;
    list-style:none;
    padding:0;
    li{
        span{
            border: 1px solid rgba(0,0,0,0.1);
            margin-right:20px;
        }
        padding:20px 0 20px 20px;
        border: 1px solid rgba(0,0,0,0.1);
    }
}
`