

const platforms = [
  {
    img: "/fb.svg",
    title: "Facebook",
    description:
      "Maximize engagement with custom creative tailored for Facebook’s unique audience and platform capabilities.",
  },
  {
    img: "/in.svg",
    title: "LinkedIn",
    description:
      "Position your brand as an industry leader with professional and engaging content designed for LinkedIn’s business-focused community.",
  },
  {
    img: "/insta.svg",
    title: "Instagram",
    description:
      "Captivate Instagram’s visually-driven audience with stunning graphics and innovative content formats.",
  },
  {
    img: "/tk.svg",
    title: "TikTok",
    description:
      "Tap into the power of viral content with TikTok creatives designed for maximum shareability and engagement.",
  },
  {
    img: "/yt.svg",
    title: "Youtube",
    description:
      "Optimize viewer interaction with tailored creatives designed for YouTube's diverse audience and video-friendly platform features.",
  },
  {
    img: "/pf.svg",
    title: "Other platforms",
    description:
      "Have another platform in mind? We’re here for the team. With a global team of presentation designers, we have skills across the board and can cater to any preference.",
  },
];

const SocialMediaExpertise = () => {
  return (
    <section className="bg-[#F9F5EC] py-16 px-6 md:px-16">
      <div className="text-center  mx-auto mb-12 flex justify-center flex-col items-center">
        <h2 className="text-3xl md:text-[48px] font-normal sm:h-[56px] sm:w-[1180px] font-Helvetica text-[#0A211F]">
          Expertise Across all Social Media Platforms
        </h2>
        <p className="text-gray-700 mt-3 sm:w-[600px]">
          Rely on our in-depth expertise, as well as the ability to version and
          scale any kind of social media content, static, motion, or video
          across your key social media channels.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {platforms.map((platform, index) => (
          <div key={index} className="sm:h-[262px] sm:w-[346.51px]">
            <div className="bg-[#FFBF0033] size-[80px] rounded-lg object-cover flex justify-center items-center">
              <img
                src={platform.img}
                className="  size-[40px] object-cover rounded-lg "
              />
            </div>

            <div className="py-[8px] mt-2">
              <h3 className="text-lg text-[24px] font-Helvetica font-normal text-[#0A211F]">
                {platform.title}
              </h3>
              <p className="text-[18px] font-Helvetica font-normal mt-1 align-middle text-[#0A211F]">
                {platform.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaExpertise;
