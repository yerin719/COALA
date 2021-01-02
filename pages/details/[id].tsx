import { useState } from 'react'
import Map from '@components/map/map'
import Navbar from '@components/nav/navbar'

import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Paper,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core'
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone'
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import FavoriteIcon from '@material-ui/icons/Favorite'
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined'
import { Rating } from '@material-ui/lab'

import s from '@styles/details.styles'
const bg = require('@common/images/details-background.jpg')
const avatar = require('@common/images/wecode.jpg')

const useStyles = makeStyles({
  root: {
    width: 500,
  },
})

const Details: React.FC = () => {
  const classes = useStyles()
  const [value, setValue] = useState('recents')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
      <Navbar />
      <s.DetailsMain>
        <s.DetailsHeader>
          <section className="DetailsHeader-background">
            <figure>
              <img src={bg} alt="details-background" />
            </figure>
            <div />
          </section>
          <section className="DetailsHeader-title">
            <figure>
              <Avatar alt="logo" src={avatar} variant="rounded" />
            </figure>
            <h1>
              <span>wecode</span>
              <span />
              <span>위코드</span>
            </h1>
          </section>
          <section className="DetailsHeader-footer">
            <Paper elevation={3}>
              <section className="DetailsHeader-content">
                <div>
                  <Rating
                    name="rating"
                    defaultValue={4.5}
                    precision={0.5}
                    size="large"
                    readOnly={true}
                  />
                  <span>4.5</span>
                  <span>139 reviews</span>
                </div>
                <div />
                <div>
                  <span>
                    'WeCode #코딩부트캠프 #코딩교육 #개발자되기 당신도 개발자가
                    될 수 있습니다. 프로그래밍 경험이 없어도 괜찮습니다.
                    WeCode의 부트캠프를 통해 개발자로서 커리어를 시작하세요.'
                  </span>
                  <Button
                    startIcon={<CreateTwoToneIcon />}
                    color="secondary"
                    variant="contained"
                    size="large"
                  >
                    리뷰 남기기
                  </Button>
                </div>
              </section>
              <section className="DetailsHeader-menu">
                <BottomNavigation
                  value={value}
                  onChange={handleChange}
                  className={classes.root}
                >
                  <BottomNavigationAction
                    label="소개"
                    value="intro"
                    icon={<InfoOutlinedIcon />}
                  />
                  <BottomNavigationAction
                    label="프로그램"
                    value="program"
                    icon={<AccountBalanceOutlinedIcon />}
                  />
                  <BottomNavigationAction
                    label="리뷰"
                    value="review"
                    icon={<FavoriteIcon />}
                  />
                  <BottomNavigationAction
                    label="수료후 연봉"
                    value="postSalery"
                    icon={<AttachMoneyOutlinedIcon />}
                  />
                </BottomNavigation>
              </section>
            </Paper>
          </section>
        </s.DetailsHeader>
        <s.DetailsArticle>
          <s.DetailsSection>
            <h2>위코드 부트캠프 소개</h2>
            <dl>
              <dt>홈페이지</dt>
              <dd>https://wecode.co.kr/</dd>
            </dl>
            <dl>
              <dt>운영시간</dt>
              <dd>평일 10AM - 7PM</dd>
            </dl>
            <dl>
              <dt>연락처</dt>
              <dd>010-3470-4553</dd>
            </dl>
            <dl>
              <dt>직원수</dt>
              <dd>5 명</dd>
            </dl>
            <dl>
              <dt>학생수 (기수별)</dt>
              <dd>40~50 명</dd>
            </dl>
          </s.DetailsSection>
          <s.DetailsSection>
            <h2>위치</h2>
            <p>서울특별시 강남구 테헤란로 427, 위워크타워</p>
            <Map />
          </s.DetailsSection>
        </s.DetailsArticle>
        <s.DetailsFooter>footer</s.DetailsFooter>
      </s.DetailsMain>
    </>
  )
}

export default Details
