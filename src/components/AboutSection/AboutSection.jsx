import portfolioData from "../../data/portfolioData";

const About = () => {
    const { aboutHeading, aboutParagraphs, skills, quote } = portfolioData;

    return (
        <>
        <div id="About" className="relative px-5 lg:px-10">

            <h2 className="mt-10 text-2xl font-bold">
                {aboutHeading}
            </h2>

            <p className="mt-6 max-w-4xl text-sm sm:text-base leading-relaxed">
                {aboutParagraphs.map((paragraph, index) => (
                    <span key={index}>
                        {paragraph}
                        {index < aboutParagraphs.length - 1 ? (
                            <><br /><br /></>
                        ) : null}
                    </span>
                ))}
            </p>

            {/* Skill Cards Row 1 */}
            <div className="flex flex-col lg:flex-row gap-6 mt-10">

                <div className="w-full lg:w-1/2 border border-white/30 rounded-[25px] p-6 text-white">
                    <h3 className="text-xl">Front-end</h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed">
                        {skills.frontend}
                    </p>
                </div>

                <div className="w-full lg:w-1/2 border border-white/30 rounded-[25px] p-6 text-white">
                    <h3 className="text-xl">Languages / Tools</h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed">
                        {skills.tools}
                    </p>
                </div>

            </div>

            {/* Skill Cards Row 2 */}
            <div className="flex flex-col lg:flex-row gap-6 mt-6">

                <div className="w-full lg:w-2/3 border border-white/30 rounded-[25px] p-6 text-white">
                    <h3 className="text-xl">Backend</h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed">
                        {skills.backend}
                    </p>
                </div>

                <div className="w-full lg:w-1/3 italic text-white rounded-[25px] p-6 flex items-center">
                    <p className="text-sm sm:text-base">
                        {quote}
                    </p>
                </div>

            </div>

        </div>
        </>
    );
};

export default About;
