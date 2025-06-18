import { PropertyProps } from "@/interfaces/index";
import ReviewSection from "./BookingSection";
import BookingSection from "./ReviewSection";
import HorizintalDevider from "../footer-components/Dividers/Horizontal-devider";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <>
    <Header/>
    <div className="container mx-auto p-6">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex flex-row gap-[16px]">
          <div className="flex border-2 border-[#E9E9E9] rounded-full py-[13px] px-[13px] gap-2">
          <img 
          src="/assets/save.svg"
          alt="Save"/>
            save</div>
          <div className="flex border-2 border-[#E9E9E9] rounded-full py-[13px] px-[13px] gap-2">
          <img 
          src="/assets/heart.svg"
          alt="Rating_Star"/>
            share</div>
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500 flex items-center gap-2 py-2">
          <img 
          src="/assets/star.svg"
          alt="Rating_Star"/>
          {property.rating} stars</span>
        <span className="flex items-center gap-2 py-2">
        <img 
          src="/assets/map.svg"
          alt="Rating_Star"/>
          {property.address.city}, {property.address.country}</span>
      </div>

    <div className="flex gap-2 w-full h-[600px]">
      <div className="w-1/2 h-full">
        <img 
          src="/assets/414521748.jpg" 
          alt="Main Villa View" 
          className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg" 
        />
      </div>

      {/* Right side - 3 smaller images stacked (50%) */}
      <div className="w-1/2 h-full flex flex-col gap-2">
        
        {/* Top full-width image */}
        <div className="h-1/2">
          <img 
            src="/assets/414521765.jpg" 
            alt="Top Right View" 
            className="w-full h-full object-cover rounded-tr-lg rounded-br-lg" 
          />
        </div>

        {/* Bottom two side-by-side images */}
        <div className="flex gap-2 h-1/2">
          <div className="w-1/2">
            <img 
              src="/assets/pexels-fotoaibe-1571463.jpg" 
              alt="Bottom Left" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="w-1/2">
            <img 
              src="/assets/pexels-fotoaibe-1571460.jpg" 
              alt="Bottom Right" 
              className="w-full h-full object-cover rounded-tr-lg rounded-br-lg" 
            />
          </div>
        </div>
      </div>
    </div>
    <section>
      <div className="flex flex-row gap-3 py-3.5">
        <div className="flex border-2 border-[#E9E9E9] py-[8.64px] px-[20.84px] rounded-full items-center gap-2">
        <img src="/assets/bed.svg" alt="Bedrooms"/>
          4 Bedrooms
        </div>
        <div className="flex border-2 border-[#E9E9E9] py-[8.64px] px-[20.84px] rounded-full items-center gap-2">
          <img src="/assets/bathtub.svg" alt="ButhTubs"/>
          2 Bathroom
        </div>
        <div className="flex border-2 border-[#E9E9E9] py-[8.64px] px-[20.84px] rounded-full items-center gap-2">
          <img src="/assets/people.svg"/>
          2-4 guests
        </div>
      </div>  
    </section>

      {/* Description */}
      <div className="mt-4">
        <HorizintalDevider color = 'bg-[#E6E6E6]' weight='w-241'/>
        <br/>
        <h2 className="text-2xl font-semibold bt">Description</h2>
        <HorizintalDevider color = 'bg-[#E6E6E6]' weight='w-241'/>
        <br/>
        <div className="flex flex-row">
          <div className=" flex flex-col gap-4">
            <div className="w-[1027px]">
              <p className="w-[95%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi possimus 
                fugiat doloremque quisquam, commodi exercitationem, aspernatur officiis tempore, repellendus aut! Optio modi consectetur, autem maxime dolore minus doloremque 
                quidem impedit corporis cupiditate iure itaque, vero vitae assumenda veniam sint architecto ipsum quae laborum, aspernatur similique beatae necessitatibus. Vel 
                nobis totam laborum quas aut doloribus ea commodi adipisci, ducimus a nihil error architecto sequi animi harum eveniet mollitia placeat temporibus saepe ut, 
                reprehenderit sit repellendus magni tenetur. Delectus quia ipsum fuga aperiam magnam beatae. Inventore sequi possimus fugiat doloremque quisquam, commodi 
                exercitationem, aspernatur officiis tempore, repellendus aut! Optio modi consectetur, autem maxime dolore minus doloremque quidem impedit corporis cupiditate 
                iure itaque, vero vitae assumenda veniam sint architecto ipsum quae laborum, aspernatur similique beatae necessitatibus. Vel nobis totam laborum quas aut doloribus 
                ea commodi adipisci, ducimus a nihil error architecto sequi animi harum eveniet mollitia placeat temporibus saepe ut, reprehenderit sit repellendus magni tenetur. 
                Delectus quia ipsum fuga aperiam magnam beatae.
              </p>
            </div>
            <div>
              <p className="font-bold">The Space</p>
              <p className="uppercase">BedRoom & BathRoom</p> 
              <div className="w-[95%]">
              <ul className="list-disc list-inside">
                <li>
                  Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                </li>
              </ul>
              </div>
            </div>
            <HorizintalDevider color = 'bg-[#E6E6E6]' weight='w-241'/>
          </div>
          {/* <p>{property.description}</p> */}
          <aside className="w-[535px]">
            <BookingSection price={0}/>
          </aside>
        </div>
      </div>

      {/* Amenities */}
      <div className="mt-4 gap-x-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <p>Each home is fully equipped to meet your needs, with ample space and privacy.</p>
        <ul className="inline-grid grid-cols-2 gap-x-28 gap-y-2 list-none">
          <li className="flex items-center gap-2">
            <img src="/assets/mountain.svg" alt="Save" />
            <span>Mountain view</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/assets/sunrise.svg" alt="Save" />
            <span>Shared beach access</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/assets/chef.svg" alt="Save" />
            <span>Chef</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/assets/cleaning.svg" alt="Save" />
            <span>Cleaning available during stay</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/assets/pool.svg" alt="Save" />
            <span>Pool - infinity</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/assets/pan.svg" alt="Save" />
            <span>Kitchen</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/assets/bell.svg" alt="Save" />
            <span>Butler</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/assets/shaker.svg" alt="Save" />
            <span>Bartender</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/assets/hot-tub.svg" alt="Save" />
            <span>Hot tub</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/assets/wifi.svg" alt="Save" />
            <span>Wifi</span>
          </li>
        </ul>
        
        <HorizintalDevider color = 'bg-[#E6E6E6]' weight='w-241'/>
        {/* <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul> */}
      <section>
        <ReviewSection/>
      </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PropertyDetail;