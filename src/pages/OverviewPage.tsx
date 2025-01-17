import logoImage from '@assets/logo.png';
import clockImage from '@assets/clock.png';
import computerImage from '@assets/computer.png';
import bookmarkImage from '@assets/bookmark.png';
import questionImage from '@assets/question.png';


const sections = [
    {
        title: 'Welcome!',
        content:
            'From all of us at OpaciTool, we extend our warmest welcome. Our team has 45 years of experience performing opacity readings, conducting smoke school courses, and developing breakthroughs in the industry including the development of virtual reality smoke school alternatives and opacity measurement using augmented reality. We share our knowledge in this training course so you can confidently perform opacity readings on your own.',
        image: logoImage,
        type: 1
    },
    {
        title: 'Completing the Course',
        content:
            'If you are a first-time student, you should complete this course in the order the modules are presented. You do not need to complete the course in one session. We suggest multiple 30-minute sessions to properly review and comprehend the material. Completion times vary but average two hours.',
        image: clockImage, // Update with your clock icon path
        type: 1
    },
    {
        title: 'Bookmark Feature',
        content:
            'If you need to exit this course, click on the bookmark icon at the top of the page. When you resume the course, select "Return to Last Bookmark" to pick up where you left off.',
        image: bookmarkImage, // Update with your bookmark icon path
        type: 2
    },
    {
        title: 'Quizzes & Comprehension Test',
        content:
            'There are short multiple-choice quizzes at the end of some modules. A comprehension test covering all modules should be taken when you have completed the course. You must complete the comprehension test with a score of at least 80% to earn your certificate of completion. The certificate of completion is valid for 3 years and is required in some states. You can retake the comprehension test at any time.',
        image: computerImage, // Update with your quiz icon path
        type: 1
    },
    {
        title: 'Support',
        content:
            'If you have questions regarding content in this course, you can submit your inquiry by selecting the Support icon at the top of the page. You will receive a response from one of our knowledgeable and friendly Midwest-based (Central Time) team members.',
        image: questionImage, // Update with your support icon path
        type: 2
    },
];

const OverviewPage = () => {
    return (
        <div>
            {sections.map((section, index) => (
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