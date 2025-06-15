import Hero from "@/components/hero-section/Hero";
import Header from "@/components/layout/Header";
import TopBook from "@/components/body/top-book";
import Card from "@/components/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index"
import MoreListing from "@/components/body/more-listing";
import Footer from "@/components/layout/Footer";


const Home: React.FC = () => {
  
  return (
    <main className="flex flex-col">
      <div className="flex flex-col items-center space-y-30">
        <header className="w-full text-center rounded-full h-[90px]">
            <Header/>
          </header>
          <section className="w-full text-center rounded-full">
            <Hero/>
          </section>
      </div>
      <section className="">
        <div>
          <TopBook/>
        </div>
      </section>
      <section className="flex flex-col pt-6 pl-6 justify-center gap-10">
        <div className="grid grid-cols-4 gap-6">
            {
              PROPERTYLISTINGSAMPLE?.map(({ name, address, rating, category, price, offers, image }) => (
                <Card name={name} address={address} rating={rating} category={category} price={price} offers={offers} image={image} />
              ))
            }
        </div>
        <MoreListing/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </main>
  )
}
export default Home;