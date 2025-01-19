import leftImage from '@assets/left.png';
import rightImage from '@assets/right.png';

const Footer = () => {
    return (
        <footer className="bg-[#161920] text-white shadow-lg">
            <div className="flex justify-between items-start mx-auto px-4 py-4 sm:px-6 lg:px-12">
                {/* Left Section */}
                <div className="flex flex-col items-center space-x-2 w-[15vw] cursor-pointer">
                    <div className="w-[10vw]">
                        <img
                            src={leftImage}
                            alt="Support"
                            className="w-full h-14 object-contain"
                        />
                    </div>
                    <span className="text-lg text-center font-large">Module 1.3</span>
                    <span className="text-lg text-center font-large">Smoke School</span>
                </div>
                {/* Right Section */}
                <div className="flex flex-col items-center space-x-2 w-[15vw] cursor-pointer">                    
                    <div className="w-[10vw]">
                        <img
                            src={rightImage}
                            alt="Support"
                            className="w-full h-14 object-contain"
                        />
                    </div>
                    <span className="text-lg text-center font-large">Module 1</span>
                    <span className="text-lg text-center font-large">Quiz</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
