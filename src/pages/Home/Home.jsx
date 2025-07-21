const HeroSection = lazy(() => import('../../components/Home/HeroSection/HeroSection'));
const SecondSection = lazy(() => import('../../components/Home/SecondSection/SecondSection'));
const ProductShowcase = lazy(() => import('../../components/Home/ProductShowcase/ProductShowcase'));
const VideoSection = lazy(() => import('../../components/Home/VideoSection/VideoSection'));
const ChipsShowcase = lazy(() => import('../../components/Home/ChipsShowcase/ChipsShowcase'));
const SuperScience = lazy(() => import('../../components/Home/SuperScience/SuperScience'));
const WatchReview = lazy(() => import('../../components/Home/Watch&Review/WatchReview'));
const HomeFooter = lazy(() => import('../../components/Home/HomeFooter/HomeFooter'));



const Home = () => {
  return (
    <div>
      <HeroSection />
      <SecondSection />
      <ProductShowcase />
      <VideoSection />
      <ChipsShowcase />
      <WatchReview />
      <SuperScience />
      <HomeFooter />
    </div>
  )
}

export default Home