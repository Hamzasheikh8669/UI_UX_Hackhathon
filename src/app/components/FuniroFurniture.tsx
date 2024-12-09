import Image from "next/image"
export default function FuniroFurniture(){
    return(
        <div className="w-full pt-[30px] md:pt-[67px] pb-[50px] bg-lightBG">
            <div className="text-center relative w-full md:top-5 top-0">
                <h3 className="text-[14px] md:text-[20px] font-semibold text-Gray2">Share your setup with</h3>
                <h2 className="text-[30px] md:text-[40px] font-bold text-Gray1">#FuniroFurniture</h2>
            </div>
            <div className="flex justify-center items-center w-full "
            >
                <Image src="/images/setup-Images.png" width={2000} height={100} alt="images"></Image>

            </div>
        </div>
    )
}