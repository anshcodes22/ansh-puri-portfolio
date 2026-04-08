import portfolioData from "../../data/portfolioData";

const HeroSection = () => {
    const { name, title, heroDescription } = portfolioData;

    return (
        <section
            id="Home"
            className="w-full pt-16 lg:pt-15 px-5 lg:px-12 md:pb-5"
            aria-label={`Hero section introducing ${name}, ${title}`}
        >
            <div className="flex flex-col justify-center items-center w-full text-center">

                <h1 className="animated-gradient font-semibold leading-none w-full text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[6.5rem] gradient-text">
                    {name}
                </h1>

                <p className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold">
                    {title}
                </p>

                <p className="mt-8 w-full lg:w-[85vw] text-sm sm:text-base md:text-lg lg:text-xl">
                    {heroDescription}
                </p>

            </div>
        </section>
    );
};

export default HeroSection;
