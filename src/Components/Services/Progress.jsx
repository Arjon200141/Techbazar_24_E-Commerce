import { useState } from "react";

const Progress = () => {
    const [selectedStep, setSelectedStep] = useState(0);
    const detailsProcess = [
        {
            id: "1",
            image: (<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="tabIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M692.8 412.7l.2-.2-34.6-44.3a7.97 7.97 0 0 0-11.2-1.4l-50.4 39.3-70.5-90.1a7.97 7.97 0 0 0-11.2-1.4l-37.9 29.7a7.97 7.97 0 0 0-1.4 11.2l70.5 90.2-.2.1 34.6 44.3c2.7 3.5 7.7 4.1 11.2 1.4l50.4-39.3 64.1 82c2.7 3.5 7.7 4.1 11.2 1.4l37.9-29.6c3.5-2.7 4.1-7.7 1.4-11.2l-64.1-82.1zM608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5L114.3 856.1a8.03 8.03 0 0 0 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644s-118.2-23.7-161.2-66.8C403.7 534.2 380 476.9 380 416s23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8s118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2s-23.7 118.2-66.8 161.2z"></path></svg>
            ),
            name: "Discovery & Analysis",
            description: "We kick off our agile work process with a thorough Discovery and Analysis phase. During this stage, we collaborate closely with you to understand your project requirements, goals, and target audience. By gaining deep insights into your business needs, we lay a strong foundation for the development journey ahead."
        },
        {
            id: "2",
            image: (<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="tabIcon p-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h7.2v2.4h9.6V0H24v7.2h-2.4v9.6H24V24h-7.2v-2.4H7.2V24H0v-7.2h2.4V7.2H0V0m16.8 7.2V4.8H7.2v2.4H4.8v9.6h2.4v2.4h9.6v-2.4h2.4V7.2M2.4 2.4v2.4h2.4V2.4m14.4 0v2.4h2.4V2.4M2.4 19.2v2.4h2.4v-2.4m14.4 0v2.4h2.4v-2.4z"></path></svg>),
            name: "UI/UX Design",
            description: "Next, our talented UI/UX designers take the lead in crafting visually appealing and user-friendly interfaces. Through interactive prototypes and wireframes, we present you with a clear picture of how the final product will look and function. Our design approach prioritizes user experience, ensuring that your software or application is intuitive and engaging."
        },
        {
            id: "3",
            image: (<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="tabIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>),
            name: "Development",
            description: "With the design approved, our skilled development team springs into action. Following agile principles, we break down the project into manageable sprints. These short development cycles enable us to deliver incremental results and maintain flexibility for any changes or improvements along the way. You can expect regular updates and transparency throughout this phase."
        },
        {
            id: "4",
            image: (<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="tabIcon p-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1-17.2-31.5-42.5-56.8-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9-31.5 17.2-56.8 42.5-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z"></path><path d="M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 34.8-28.2 63-63 63H232c-34.8 0-63-28.2-63-63 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7 6 17.2 13.6 33.6 22.7 49 24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2c41.5-24.3 76.2-59 100.5-100.5 9.1-15.5 16.7-31.9 22.7-49C812.1 793.1 836 831.8 836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3C584 874.3 548.8 884 512 884s-72-9.7-102.9-27.8c-30.3-17.7-55.6-43-73.3-73.3C317.7 752 308 716.8 308 680V412h408v268z"></path></svg>),
            name: "Testing",
            description: "Quality is at the heart of our methodology. Before releasing any feature or module, we conduct rigorous testing to ensure functionality, compatibility, and security. Our dedicated QA team meticulously reviews each aspect of the software, making certain it meets the highest standards and aligns with your expectations."
        },
        {
            id: "5",
            image: (<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="tabIcon p-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 14c2.764 0 5-2.238 5-5s-2.236-5-5-5-5 2.238-5 5 2.236 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM20 15c1.381 0 2.5-1.117 2.5-2.5 0-1.381-1.119-2.5-2.5-2.5-1.382 0-2.5 1.119-2.5 2.5 0 1.383 1.118 2.5 2.5 2.5zm0-4c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zM20 15.59c-1.331 0-2.332.406-2.917.969-1.115-.918-2.878-1.559-5.083-1.559-2.266 0-3.995.648-5.092 1.564-.596-.565-1.608-.975-2.908-.975-2.188 0-3.5 1.091-3.5 2.183 0 .545 1.312 1.092 3.5 1.092.604 0 1.146-.051 1.623-.133l-.04.27c0 1 2.405 2 6.417 2 3.762 0 6.417-1 6.417-2l-.021-.255c.463.073.996.118 1.604.118 2.051 0 3.5-.547 3.5-1.092 0-1.092-1.373-2.182-3.5-2.182zm-16 2.273c-1.309 0-2.068-.207-2.417-.354.239-.405 1.003-.92 2.417-.92 1.107 0 1.837.351 2.208.706l-.235.344c-.452.119-1.108.224-1.973.224zm8 1.137c-2.163 0-3.501-.312-4.184-.561.521-.678 1.918-1.439 4.184-1.439 2.169 0 3.59.761 4.148 1.425-.755.27-2.162.575-4.148.575zm8-1.137c-.914 0-1.546-.103-1.973-.213-.072-.127-.155-.252-.248-.375.356-.345 1.071-.685 2.221-.685 1.324 0 2.141.501 2.404.911-.39.163-1.205.362-2.404.362zM4 15c1.381 0 2.5-1.119 2.5-2.5 0-1.379-1.119-2.5-2.5-2.5-1.382 0-2.5 1.121-2.5 2.5 0 1.381 1.118 2.5 2.5 2.5zm0-4c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5z"></path>
                <path d="M12 14c2.764 0 5-2.238 5-5s-2.236-5-5-5-5 2.238-5 5 2.236 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM20 15c1.381 0 2.5-1.117 2.5-2.5 0-1.381-1.119-2.5-2.5-2.5-1.382 0-2.5 1.119-2.5 2.5 0 1.383 1.118 2.5 2.5 2.5zm0-4c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zM20 15.59c-1.331 0-2.332.406-2.917.969-1.115-.918-2.878-1.559-5.083-1.559-2.266 0-3.995.648-5.092 1.564-.596-.565-1.608-.975-2.908-.975-2.188 0-3.5 1.091-3.5 2.183 0 .545 1.312 1.092 3.5 1.092.604 0 1.146-.051 1.623-.133l-.04.27c0 1 2.405 2 6.417 2 3.762 0 6.417-1 6.417-2l-.021-.255c.463.073.996.118 1.604.118 2.051 0 3.5-.547 3.5-1.092 0-1.092-1.373-2.182-3.5-2.182zm-16 2.273c-1.309 0-2.068-.207-2.417-.354.239-.405 1.003-.92 2.417-.92 1.107 0 1.837.351 2.208.706l-.235.344c-.452.119-1.108.224-1.973.224zm8 1.137c-2.163 0-3.501-.312-4.184-.561.521-.678 1.918-1.439 4.184-1.439 2.169 0 3.59.761 4.148 1.425-.755.27-2.162.575-4.148.575zm8-1.137c-.914 0-1.546-.103-1.973-.213-.072-.127-.155-.252-.248-.375.356-.345 1.071-.685 2.221-.685 1.324 0 2.141.501 2.404.911-.39.163-1.205.362-2.404.362zM4 15c1.381 0 2.5-1.119 2.5-2.5 0-1.379-1.119-2.5-2.5-2.5-1.382 0-2.5 1.121-2.5 2.5 0 1.381 1.118 2.5 2.5 2.5zm0-4c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5z"></path></svg>),
            name: "Feedback",
            description: "Your valuable feedback is crucial to us. We encourage open communication and actively seek your input throughout the development process. Regular checkpoints allow you to review the progress and provide feedback on the features implemented so far. This collaborative approach ensures that we are always on track and that the final product aligns precisely with your vision."
        },
        {
            id: "6",
            image: (<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="tabIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM694.5 340.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5.1 10.3 7.5 6.5 12.8z"></path></svg>),
            name: "Release",
            description: "Once all the features have been developed, thoroughly tested, and refined based on your feedback, we prepare for the product release. Our agile process enables us to deliver frequent releases, ensuring that you can start benefiting from the software's value as soon as possible."
        },
        {
            id: "7",
            image: (<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="tabIcon p-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12H20V5H4V18.3851L5.76282 17H12V19H6.45455L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V12ZM14.145 19.071C14.0505 18.7301 14 18.371 14 18C14 17.629 14.0505 17.2699 14.145 16.929L13.1699 16.366L14.1699 14.634L15.1459 15.1975C15.6475 14.6867 16.2851 14.31 17 14.126V13H19V14.126C19.7149 14.31 20.3525 14.6867 20.8541 15.1975L21.8301 14.634L22.8301 16.366L21.855 16.929C21.9495 17.2699 22 17.629 22 18C22 18.371 21.9495 18.7301 21.855 19.071L22.8301 19.634L21.8301 21.366L20.8541 20.8025C20.3525 21.3133 19.7149 21.69 19 21.874V23H17V21.874C16.2851 21.69 15.6475 21.3133 15.1459 20.8025L14.1699 21.366L13.1699 19.634L14.145 19.071ZM18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"></path></svg>
            ),
            name: "Support",
            description: "Our commitment to you doesn't end with the release. We continue to provide ongoing support and maintenance to keep the software running smoothly and efficiently. Whether it's addressing unforeseen issues or adding new features in the future, our support team is always ready to assist you."
        },
    ]
    const handleStepClick = (index) => {
        setSelectedStep(index);
    };
    return (

        <div className="bg-[#f6fbfeb0] dark:bg-gray-800 pt-6 md:pt-12">
        <div className='relative h-[40px] sm:h-[50px] md:h-[80px] lg:h-[120px] flex justify-start items-center ml-4 md:ml-8 lg:ml-12 mb-4 md:mb-6 lg:mb-8'>
          <p className='font-extrabold text-[#DDDDDD] dark:text-gray-700 text-[28px] sm:text-[36px] md:text-[50px] lg:text-[80px] h-[28px] sm:h-[36px] md:h-[50px] lg:h-[80px] absolute top-0 left-0'>
            OUR WORK PROCESS
          </p>
          <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-300 text-xl sm:text-2xl md:text-3xl lg:text-5xl absolute pl-2 md:pl-4 lg:pl-8 tracking-[-0.5px] sm:tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-1.8px]'>
            Our Work Process
          </h2>
        </div>
        
        <div className="py-6 md:py-12 relative min-h-[300px] md:min-h-[400px] pb-16 md:pb-24 lg:pb-32">
          <div className="flex flex-col items-center">
            {/* Circular section with steps 4 and 5 between two circles */}
            <div className="relative w-full max-w-2xl h-40 sm:h-48 md:h-56 lg:h-64 mb-8 sm:mb-12 md:mb-16">
              {/* Large left circle */}
              <div
                className={`absolute left-20 sm:left-24 md:left-32 lg:left-44 top-16 sm:top-20 md:top-24 lg:top-28 transform -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center cursor-pointer ${selectedStep === 3 ? 'text-[#0C9DCA] dark:text-cyan-300 font-semibold' : 'text-black dark:text-white'}`}
                onClick={() => handleStepClick(3)}
              >
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">{detailsProcess[3].image}</div>
                  <p className="text-xs sm:text-sm">{detailsProcess[3].name}</p>
                </div>
              </div>
      
              {/* Large right circle */}
              <div
                className={`absolute right-16 sm:right-20 md:right-28 lg:right-40 top-16 sm:top-20 md:top-24 lg:top-28 transform -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center cursor-pointer ${selectedStep === 4 ? 'text-[#0C9DCA] dark:text-cyan-300 font-semibold' : 'text-black dark:text-white'}`}
                onClick={() => handleStepClick(4)}
              >
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">{detailsProcess[4].image}</div>
                  <p className="text-xs sm:text-sm">{detailsProcess[4].name}</p>
                </div>
              </div>
      
              {/* Top arc arrow between circles */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 sm:-top-3 md:-top-4">
                <img
                  src="https://www.apisolutionsltd.com/workProcess/arrowRound1.svg"
                  alt=""
                  className="w-32 sm:w-40 md:w-48 h-12 sm:h-16 md:h-20"
                />
              </div>
      
              {/* Bottom arc arrow (rotated) between circles */}
              <div className="absolute left-1/2 transform -translate-x-1/2 rotate-180 -bottom-2 sm:-bottom-3 md:-bottom-4">
                <img
                  src="https://www.apisolutionsltd.com/workProcess/arrowRound1.svg"
                  alt=""
                  className="w-32 sm:w-40 md:w-48 h-12 sm:h-16 md:h-20"
                />
              </div>
            </div>
      
            {/* Main horizontal line with steps 1-3 and 6-7 */}
            <div className="flex flex-wrap justify-center items-center relative z-10 px-2 sm:px-4">
              {/* Vertical connector from circular section to step 3 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 sm:-top-16 md:-top-20 h-12 sm:h-16 md:h-20 w-px bg-gray-300 dark:bg-gray-600"></div>
      
              {/* Steps 1-3 with straight arrows */}
              {detailsProcess.slice(0, 3).map((details, index) => (
                <div key={index} className="flex items-center mb-2 sm:mb-0">
                  <div
                    className={`text-center mx-2 sm:mx-3 md:mx-4 cursor-pointer ${selectedStep === index ? 'text-[#0C9DCA] dark:text-cyan-300 font-semibold' : 'text-black dark:text-white'}`}
                    onClick={() => handleStepClick(index)}
                  >
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">{details.image}</div>
                    <p className="text-xs sm:text-sm md:text-base">{details.name}</p>
                  </div>
                  {index < 2 && (
                    <div>
                      <img
                        src="https://www.apisolutionsltd.com/workProcess/arrowLine.svg"
                        alt=""
                        className="w-8 sm:w-10 md:w-12"
                      />
                    </div>
                  )}
                </div>
              ))}
      
              {/* Steps 6-7 continuing the main line */}
              {detailsProcess.slice(5).map((details, index) => (
                <div key={index + 5} className="flex items-center mt-2 sm:mt-0">
                  <div className="ml-4 sm:ml-6 md:ml-10">
                    <img
                      src="https://www.apisolutionsltd.com/workProcess/arrowLine.svg"
                      alt=""
                      className="w-6 sm:w-8 md:w-10"
                    />
                  </div>
                  <div
                    className={`text-center mx-2 sm:mx-3 md:mx-4 cursor-pointer ${selectedStep === index + 5 ? 'text-[#0C9DCA] dark:text-cyan-300 font-semibold' : 'text-black dark:text-white'}`}
                    onClick={() => handleStepClick(index + 5)}
                  >
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">{details.image}</div>
                    <p className="text-xs sm:text-sm md:text-base">{details.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      
          {/* Step details section */}
          <div className="mt-8 md:mt-12 lg:mt-16 mx-4 sm:mx-8 md:mx-12 lg:mx-20 px-2 sm:px-4">
            <div className="bg-sky-100 dark:bg-gray-700 flex flex-col md:flex-row rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
              <div className="flex justify-center md:justify-start items-center mb-4 md:mb-0">
                <div className="space-y-2 sm:space-y-3 md:space-y-4 px-1 w-full md:w-56 lg:w-72">
                  <span className="text-xl sm:text-2xl font-bold text-[#0C9DCA] dark:text-cyan-300 mr-4">
                    Step {detailsProcess[selectedStep].id}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    {detailsProcess[selectedStep].name}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">
                {detailsProcess[selectedStep].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Progress;