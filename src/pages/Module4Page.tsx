import { useState } from 'react';
import { moduleSection14 } from '@constants';
import { images } from '@utils'; 

const mainContent = {
    title: "Health Impacts of Air Pollution",
    content: "There are many health impacts associated with air pollutions. Opacity observations are one of the easiest and most effective ways to monitor and reduce air pollution. By becomig a visible emissions observer, you are helping to reduce the deadliest form of pollution in the world",
    image: images.mainImage
};

const ModulePage = () => {

    const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
    const handleImageClick = (imageSrc: string) => {
        console.log(imageSrc);
      setEnlargedImage(prev => (prev === imageSrc ? null : imageSrc)); 
      console.log("this is enlarge",enlargedImage);
    };
    return (
        <div className="border-b-4 border-red-500">            
            <div className="border-b-4 border-white py-8 px-4 bg-[#e4eaed] flex items-start space-x-16">
                <div className="w-full sm:w-[200px] md:w-[500px] lg:w-[900px]">
                    <div className="w-full">
                        <h2 className="text-[2.1vw] font-bold text-gray-900 mb-2">
                            {mainContent.title}
                        </h2>
                        <div className='px-8'>
                        <p className="text-[1.5vw] text-gray-700">{mainContent.content}</p>
                        </div>                        
                    </div>
                </div>  
                <div className="w-full sm:w-[100px] md:w-[150px] lg:w-[300px]">
                    <div className="w-full">
                        <img
                            src={mainContent.image}
                            alt={mainContent.title}
                            className="w-full h-60 object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="px-8 bg-[#eee]">
            {moduleSection14.map((section, index) => (
                <div
                key={index}
                className={`py-12 px-14 bg-[#eee] flex items-start space-x-16 ${index !== moduleSection14.length - 1 ? 'border-b-4 border-black' : ''}`}
                >
                <div className="flex-1">
                    {section.type === 2 ? (
                    section.imageContent ? (
                        <div className="w-full flex flex-col">
                            <img
                                src={section.image}
                                alt={section.title}
                                className={`w-full h-60 object-contain cursor-pointer ${enlargedImage === section.image ? 'w-full h-screen object-contain fixed top-0 left-0 z-50' : ''}`}
                                onClick={() => handleImageClick(section.image)} // Toggle image size on click
                            />
                            {enlargedImage === section.image && (
                                <div
                                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
                                onClick={() => handleImageClick(section.image)} // Close the enlarged image when clicking the background
                                />
                            )}
                            {section.imageContent && (
                                <div className="mt-4">
                                <p className="text-[1.4vw] text-gray-700 italic">{section.imageContent}</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="w-full">
                            <img
                                src={section.image}
                                alt={section.title}
                                className={`w-full h-60 object-contain cursor-pointer ${enlargedImage === section.image ? 'w-full h-screen object-contain fixed top-0 left-0 z-50' : ''}`}
                                onClick={() => handleImageClick(section.image)}
                            />
                            {enlargedImage === section.image && (
                                <div
                                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
                                    onClick={() => handleImageClick(section.image)} // Close the enlarged image when clicking the background
                                />
                            )}
                        </div>
                    )
                    ) : (
                    <div className="w-full">
                        <h2 className="text-[2.1vw] font-bold text-gray-900 mb-2">
                        {section.title}
                        </h2>
                        <p className="text-[1.5vw] text-gray-700">{section.content}</p>
                    </div>
                    )}
                </div>
                <div className="flex-1">
                    {section.type === 2 ? (
                    <div className="w-full">
                        <h2 className="text-[2.1vw] font-bold text-gray-900 mb-2">
                        {section.title}
                        </h2>
                        <p className="text-[1.5vw] text-gray-700">{section.content}</p>
                    </div>
                    ) : (
                    section.imageContent ? (
                        <div className="w-full flex flex-col">
                        <img
                            src={section.image}
                            alt={section.title}
                            className={`w-full h-60 object-contain cursor-pointer ${enlargedImage === section.image ? 'w-full h-screen object-contain fixed top-0 left-0 z-50' : ''}`}
                            onClick={() => handleImageClick(section.image)}
                        />
                        {enlargedImage === section.image && (
                            <div
                            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
                            onClick={() => handleImageClick(section.image)} // Close the enlarged image when clicking the background
                            />
                        )}
                        {section.imageContent && (
                            <div className="mt-4">
                            <p className="text-[1.4vw] text-gray-700 italic">{section.imageContent}</p>
                            </div>
                        )}
                        </div>
                    ) : (
                        <div className="w-full">
                            <img
                                src={section.image}
                                alt={section.title}
                                className={`w-full h-60 object-contain cursor-pointer ${enlargedImage === section.image ? 'w-full h-screen object-contain fixed top-0 left-0 z-50' : ''}`}
                                onClick={() => handleImageClick(section.image)}
                            />
                            {enlargedImage === section.image && (
                                <div
                                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
                                    onClick={() => handleImageClick(section.image)} // Close the enlarged image when clicking the background
                                />
                            )}
                        </div>
                    )
                    )}
                </div>
                </div>
            ))}
            </div>          
        </div>
    );
};

export default ModulePage;