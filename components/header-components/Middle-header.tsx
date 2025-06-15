import VerticalDivider from "./Dividers/Divider";

const MiddleHeader: React.FC= () => {
  return (
    <div className="flex flex-row justify-between items-center pl-[60px] pr-[60px] h-[58px]">
        <img src="/assets/Vector.svg" alt="logo" className="h-10 w-25"/>
        <div className="rounded-full flex flex-row items-center h-[58px] border-1 border-solid border-gray-300 text-sm gap-3">
            <div className="flex flex-col items-start px-[30px] ">
                <p>Location </p>
                <input
                type="text"
                placeholder="Search for destination"
                name=""
                className=""
                />
            </div>
            <VerticalDivider/>
            <div className="flex flex-row">
                <div className="">
                    <p>Check in</p>
                    <input
                    type="text"
                    placeholder="Add date"
                    name=""
                    className="text-center"
                    />
                </div>
                <VerticalDivider/>
                <div className="">
                    <p>Check out</p>
                    <input
                    type="text"
                    placeholder="Add date"
                    name=""
                    className="text-center"
                    />
                </div>
                <VerticalDivider/>
                <div className="">
                    <p>People</p>
                    <input
                    type="text"
                    placeholder="Add guest"
                    name=""
                    className="text-center"
                    />
                </div>
            </div>
            <div className="p-[10px]">
                <img src="/assets/search.svg" alt="logo" className="h-[42px] w-[42px]"/>
            </div>
        </div>
        <div className="flex flex-row gap-3 items-center h-[45px]">
            <div className="border bg-[#34967C] rounded-full flex justify-center py-[12px] px-[24px]">
                Sign in
            </div>
            <div className="border rounded-full py-[12px] px-[24px]">
                Sign up
            </div>
        </div>
    </div>
  );
};

export default MiddleHeader;