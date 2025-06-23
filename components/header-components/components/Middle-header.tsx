import HorizintalDevider from "../../common/Dividers/Horizontal-devider";
import VerticalDivider from "../../common/Dividers/Divider";

const MiddleHeader: React.FC= () => {
  return (
    <>
        <div className="flex flex-row relative justify-between items-center pl-[60px] pr-[60px] h-[58px]">
            <img src="/assets/Vector.svg" alt="logo" className="h-10 w-25"/>
            <div className="rounded-full flex flex-row items-center max-h-[58px] border-1 border-solid border-gray-300 text-sm gap-3 max-w-[737px]">
                <div className="flex flex-col items-start px-[30px] ">
                    <p>Location </p>
                    <input
                    type="text"
                    placeholder="Search for destination"
                    name=""
                    className=""
                    />
                </div>
                <div className="flex flex-row relative left-12 gap-x-1.5">
                    <VerticalDivider/>
                    <div className="">
                        <p>Check in</p>
                        <input
                        type="text"
                        placeholder="Add date"
                        name=""
                        className="w-[80%]"
                        />
                    </div>
                    <VerticalDivider/>
                    <div className="">
                        <p>Check out</p>
                        <input
                        type="text"
                        placeholder="Add date"
                        name=""
                        className="w-[80%]"
                        />
                    </div>
                    <VerticalDivider/>
                    <div className="">
                        <p>People</p>
                        <input
                        type="text"
                        placeholder="Add guest"
                        name=""
                        className="w-[80%]"
                        />
                    </div>
                </div>
                <div className="p-[10px] relative">
                    <img src="/assets/search.svg" alt="logo" className="h-[42px] w-[42px]"/>
                </div>
            </div>
            <div className="flex flex-row gap-3 items-center h-[45px]">
                <div className="bg-[#34967C] rounded-full flex justify-center py-[12px] px-[24px]">
                    Sign in
                </div>
                <div className="rounded-full bg-[#ECECEC] py-[12px] px-[24px]">
                    Sign up
                </div>
            </div>
        </div>
        <HorizintalDevider color="bg-gray-200" thickness="h-[1px]"/>
    </>
  );
};

export default MiddleHeader;