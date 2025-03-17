const SocialMediaUI = () => {
  return (
    <div className="bg-[#F9F5EC] sm:h-[703px] sm:flex sm:justify-center sm:items-center p-8">
      <div className="sm:w-[92%] md:translate-x-[18px]">
        <div className="flex justify-start">
          <h1 className="font-Helvetica text-[25px] sm:text-[48px] font-normal">
            Get Access to the <span className="text-[#9857F8]">Top 1%</span>{" "}
          </h1>
        </div>

        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="sm:w-[570px]">
            <div className="flex gap-5">
              <div className="text-[16px] font-Helvetica font-normal border-b-2 border-[#1700EB]  text-[#1700EB]  cursor-pointer">
                For Candidates
              </div>
              <div className="text-[16px] font-Helvetica font-normal text-[#B0B0B0] cursor-pointer">
                For Enterprises
              </div>
            </div>

            <div>
              <div className="sm:text-[32px] sm:w-[445px] font-Helvetica font-normal pt-4">
                <p> Designera carefully</p>
                <p>screens and onboards talent,</p>
                <p>boasting a network of over</p>
                <p className="text-[#6252FF]"> 100,000 skilled designers.</p>
              </div>
              <div className="pt-4">
                <p className="text-[20px]">
                  We match you with the best creator and ensure content
                  diversity, customized expertise, and editorial excellence.
                </p>
              </div>
              <div className="pt-10">
                <button className="bg-[#1700EB] text-white h-[37px] w-[153px] rounded-md">
                  Get Hired
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 sm:pt-0">
            <img src="/top.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaUI;
