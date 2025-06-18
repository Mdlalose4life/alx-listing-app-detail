const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
    return (
      <div className="mt-8 pb-4 mb-4 mb-2.5">
        <h3 className="text-2xl font-semibold ">
          <div className="flex gap-3">
            <img
              src="/assets/star.svg"
              alt="Rating_Star"/>
              4.5
              <span className="text-[#6C6C6C]">( 345 reviews )</span>
          </div>
          </h3>
          <div className="grid grid-cols-2 gap-4 max-w-[55%]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row">
                <img  src="/assets/frame1.svg" alt="frame1" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold">Nes ntitle</p>
                  <p className="text-[#6C6C6C]">3 years on ALX</p>
                </div>
              </div>
              <div>
              December 2022 <span className="mx-1">•</span>
              <span className="text-[#6C6C6C]">family trip</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi deserunt esse nostrum eveniet exercitationem mollitia nemo dolorem corrupti eos laboriosam ex quos, odio suscipit blanditiis possimus aperiam aliquam quo.</p>
            </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-row">
                <img src="/assets/frame2.svg" alt="frame2" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold">Sbusiso</p>
                <p className="text-[#6C6C6C]" >1 years on ALX</p>
              </div>
            </div>
            <div>
              Februart 2001 <span className="mx-1">•</span>
              <span className="text-[#6C6C6C]">family trip</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi deserunt esse nostrum eveniet exercitationem mollitia nemo dolorem corrupti eos laboriosam ex quos, odio suscipit blanditiis possimus aperiam aliquam quo.</p>
          </div>
            
          <div className="flex flex-col gap-4">
            <div className="flex flex-row">
            <img src="/assets/frame3.svg" alt="frame3" className="w-12 h-12 rounded-full mr-4" />
              <div >
                <p className="font-bold">Zaza</p>
                <p className="text-[#6C6C6C]">7 months on ALX</p>
              </div>
            </div>
            <div>
              January 2023 <span className="mx-1">•</span>
              <span className="text-[#6C6C6C]">family trip</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi deserunt esse nostrum eveniet exercitationem mollitia nemo dolorem corrupti eos laboriosam ex quos, odio suscipit blanditiis possimus aperiam aliquam quo.</p>

          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row">
            <img src="/assets/frame4.svg" alt="fram4" className="w-12 h-12 rounded-full mr-4" />
              <div>
                    <p className="font-bold">Themba</p>
                    <p className="text-[#6C6C6C]">1 day on ALXs</p>
              </div>
            </div>
            <div>
              January 2023 <span className="mx-1">•</span>
              <span className="text-[#6C6C6C]">family trip</span>
            </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi deserunt esse nostrum eveniet exercitationem mollitia nemo dolorem corrupti eos laboriosam ex quos, odio suscipit blanditiis possimus aperiam aliquam quo.</p>
          </div>  
        </div>


        {/* {reviews.map((review, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <div className="flex items-center">
              <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-yellow-500">{review.rating} stars</p>
              </div>
            </div>
            <p>{review.comment}</p>
          </div>
        ))} */}
      </div>
    );
  };
  
  export default ReviewSection;