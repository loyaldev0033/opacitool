import { moduleSection11 } from '@constants';


const OverviewPage = () => {
    return (
        <div>
            {moduleSection11.map((section, index) => (
                <div
                key={index}
                className="border-t-4 border-orange-500 py-12 px-14 bg-[#e4eaed] flex items-center space-x-16"
            >
                {
                    section.type === 2 ? (
                        <div className="w-full sm:w-[100px] md:w-[150px] lg:w-[300px]"> {/* Static width for image */}
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-full h-36 object-contain"  // Set image to fill the container width
                            />
                        </div>
                    ) : (
                        <div className="w-full sm:w-[200px] md:w-[500px] lg:w-[900px]"> {/* Static width for text */}
                            <h2 className="text-[2.1vw] font-bold text-gray-900 mb-2">
                                {section.title}
                            </h2>  
                            <p className="text-[1.7vw] text-gray-700">{section.content}</p>
                        </div>
                    )
                }
                {
                    section.type === 2 ? (
                        <div className="w-full sm:w-[200px] md:w-[500px] lg:w-[900px]"> {/* Static width for text */}
                            <h2 className="text-[2.1vw] font-bold text-gray-900 mb-2">
                                {section.title}
                            </h2>  
                            <p className="text-[1.7vw] text-gray-700">{section.content}</p>
                        </div>
                    ) : (
                        <div className="w-full sm:w-[100px] md:w-[150px] lg:w-[300px]"> {/* Static width for image */}
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-full h-36 object-contain"
                            />
                        </div>
                    )
                }
            </div>
            ))}
        </div>
    );
};

export default OverviewPage;