import { PropertyProps } from "@/interfaces/index";
import ReviewSection from "./BookingSection";
import BookingSection from "./ReviewSection";
import HorizintalDevider from "../footer-components/Dividers/Horizontal-devider";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
        {/* Add more images */}
      </div>

      {/* Description */}
      <div className="mt-4">
        {/* <HorizintalDevider/> */}
        <h2 className="text-2xl font-semibold">Description</h2>
        {/* <HorizintalDevider/> */}
        <div className="flex">
          <div className="w-[1027px]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi possimus fugiat doloremque quisquam, commodi exercitationem, aspernatur officiis tempore, repellendus aut! Optio modi consectetur, autem maxime dolore minus doloremque quidem impedit corporis cupiditate iure itaque, vero vitae assumenda veniam sint architecto ipsum quae laborum, aspernatur similique beatae necessitatibus. Vel nobis totam laborum quas aut doloribus ea commodi adipisci, ducimus a nihil error architecto sequi animi harum eveniet mollitia placeat temporibus saepe ut, reprehenderit sit repellendus magni tenetur. Delectus quia ipsum fuga aperiam magnam beatae.</p>
          </div>
          {/* <p>{property.description}</p> */}
          <aside className="w-[535px]">
            <BookingSection/>
          </aside>
        </div>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
      <section>
        {/* <ReviewSection/> */}
      </section>
    </div>
  );
};

export default PropertyDetail;