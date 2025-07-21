const HeroSection = lazy(() => import('../../components/Home/HeroSection/HeroSection'));
const SecondSection = lazy(() => import('../../components/Home/SecondSection/SecondSection'));
const ProductShowcase = lazy(() => import('../../components/Home/ProductShowcase/ProductShowcase'));
const VideoSection = lazy(() => import('../../components/Home/VideoSection/VideoSection'));
const ChipsShowcase = lazy(() => import('../../components/Home/ChipsShowcase/ChipsShowcase'));
const SuperScience = lazy(() => import('../../components/Home/SuperScience/SuperScience'));
const WatchReview = lazy(() => import('../../components/Home/Watch&Review/WatchReview'));
const HomeFooter = lazy(() => import('../../components/Home/HomeFooter/HomeFooter'));
import { Helmet } from "react-helmet";

<Helmet>
  <title>SuperYou-Sustainable Fermented Protein</title>
  <meta name="description" content="We use yeast to turn sugarcane waste into high-quality protein. Animal-free. Planet-friendly." />

  {/* Open Graph */}
  <meta property="og:title" content="SuperYou - Sustainable Fermented Protein" />
  <meta property="og:description" content="Discover how SuperYou converts molasses to protein with zero animals involved." />
  <meta property="og:image" content="https://yourcdn.com/og-image.jpg" />
  <meta property="og:url" content="https://yourdomain.com" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="SuperYou - A Revolution in Protein" />
  <meta name="twitter:description" content="Smarter. Cleaner. Better. Try the yeast-based protein solution for the future." />
  <meta name="twitter:image" content="https://yourcdn.com/og-image.jpg" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "SuperYou Protein",
      "image": "https://yourcdn.com/protein-pack.webp",
      "description": "A fermented protein made from sugarcane waste — sustainable and highly nutritious.",
      "brand": {
        "@type": "Brand",
        "name": "SuperYou"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "499",
        "availability": "https://schema.org/InStock"
      }
    }
  `}</script>
</Helmet>

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