import Navbar from '@components/nav/navbar'
import { Banner } from '@components/banner'
import { MainChart } from '@components/mainchart/maincharts'
import { Contents } from '@components/mainComtents/contentsSection'
import { Topic } from '@components/topic/topicSection'
import { Footer } from '@components/footer'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner bannerImage="images/5.png"></Banner>
        <MainChart />
        <Contents />
        <Topic />
        <Footer footerImage="images/footer.png" />
      </main>
    </>
  )
}

export default HomePage
