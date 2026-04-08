import portfolioData from "../../data/portfolioData";

const Contact = () => {
    const { email, phone } = portfolioData;

    return (
        <>
        <div id="Contact" className="w-full mb-20 mt-20">
            
            <h2 className="lg:ml-10 ml-5 text-2xl font-bold">
                export default Contact...
            </h2>

            <div className="lg:flex mt-10">

                <div className="w-[90vw] lg:w-[46vw] border border-white/10 rounded-[25px] ml-5 lg:ml-10 p-6 text-white">
                    <h3 className="text-xl">Email</h3>
                    <p className="mt-3 break-all">
                        {email}
                    </p>
                </div>

                <div className="w-[90vw] lg:w-[46vw] border border-white/10 rounded-[25px] ml-5 lg:ml-10 mt-5 lg:mt-0 p-6 text-white">
                    <h3 className="text-xl">Phone</h3>
                    <p className="mt-3">
                        {phone}
                    </p>
                </div>
            </div>

            <div className="w-[90vw] lg:w-[94vw] ml-5 lg:ml-10 mt-5 text-white italic">
                <p>
                    Open to collaborations, projects, and conversations around building meaningful technology.
                </p>
            </div>

        </div>
        </>
    );
};

export default Contact;
