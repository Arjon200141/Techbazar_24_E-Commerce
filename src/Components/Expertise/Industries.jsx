import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Industries = () => {
    const data = {
        labels: [
            'Health & pharmaceuticals',
            'Tourism & hospitality',
            'Retail & E-commerce',
            'Sports',
            'NGO'
        ],
        datasets: [
            {
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    '#9c27b0', // purple
                    '#3f51b5', // blue
                    '#f44336', // red
                    '#ff9800', // orange
                    '#4caf50'  // green
                ],
                borderWidth: 2,
                hoverBorderWidth: 4,
                hoverBorderColor: [
                    '#9c27b0', // purple
                    '#3f51b5', // blue
                    '#f44336', // red
                    '#ff9800', // orange
                    '#4caf50'  // green
                ]
            }
        ]
    };

    const pieLabelPlugin = {
        id: 'pieChartLabels',
        afterDraw(chart) {
            const { ctx, data } = chart;
            if (!data.labels || !data.datasets[0]._meta) return;

            ctx.save();
            const total = data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
            const meta = data.datasets[0]._meta[0];

            data.labels.forEach((label, i) => {
                const dataset = data.datasets[0];
                const value = dataset.data[i];
                const percentage = Math.round((value / total) * 100);
                const segment = meta.data[i];

                if (!segment) return;

                const midAngle = segment.startAngle + (segment.angle / 2);
                const radius = chart.chartArea.height / 2 * 0.7;
                const x = chart.chartArea.width / 2 + Math.cos(midAngle) * radius;
                const y = chart.chartArea.height / 2 + Math.sin(midAngle) * radius;

                // Label text
                ctx.font = 'bold 12px Arial';
                ctx.fillStyle = '#fff';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(`${percentage}%`, x, y);

                // Optional: Add label name below percentage
                if (radius > 50) {
                    ctx.font = '10px Arial';
                    ctx.fillText(label, x, y + 15);
                }
            });

            ctx.restore();
        }
    };

    const backgroundStyle = {
        backgroundImage: "url('https://www.apisolutionsltd.com/Industry2.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        padding: '2rem'
    };

    const detailsall = [
        { id: "1", name: "Tourism & Hospitality", description: "Elevate guest experiences in the hospitality industry through our technology solutions, encompassing website development and seamless integration of IoT applications." },
        { id: "2", name: "Health & Pharmaceuticals", description: "Safeguard sensitive data and ensure regulatory compliance within the healthcare sector through our secure data management solutions, enabling you to prioritize patient care excellence." },
        { id: "3", name: "Retail & E-commerce", description: "Strengthen your online presence and deliver a seamless shopping experience through our expert website and web application development services." },
        { id: "4", name: "Sports", description: "Engage your fan base, streamline event management, and amplify your sports brand with our profound expertise in mobile app development, delivering flawless experiences for sports enthusiasts." },
        { id: "5", name: "NGO", description: "Fortify your NGO's data security and humanitarian efforts with our expertise in cloud computing and cyber security." },
    ];

    return (
        <div className='bg-[#f5fdff] dark:bg-gray-800'>
            {/* Header Section */}
            <div className='relative h-[60px] sm:h-[80px] md:h-[120px] flex justify-start items-center ml-4 sm:ml-6 mb-4 sm:mb-8 md:mb-8'>
                <p className='font-extrabold text-[#DDDDDD] dark:text-gray-700 text-[32px] sm:text-[40px] md:text-[50px] lg:text-[80px] h-[32px] sm:h-[40px] md:h-[50px] lg:h-[80px] absolute top-0 left-0'>
                    INDUSTRIES
                </p>
                <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-400 text-xl sm:text-2xl md:text-3xl lg:text-5xl absolute pl-3 sm:pl-4 md:pl-8 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-1.80px]'>
                    Industries
                </h2>
            </div>
            <div style={backgroundStyle}>
                <div className="container mx-auto">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mx-4 md:mx-20'>
                        {/* Pie Chart Section */}
                        <div className="flex justify-center items-center p-4 md:p-8 md:ml-20 rounded-2xl">
                            <div className="flex flex-col md:flex-row items-center">
                                {/* Left Character - Male */}
                                <div className="hidden md:block w-32 h-96 bg-no-repeat bg-contain bg-center"
                                    style={{
                                        backgroundImage: "url('https://www.apisolutionsltd.com/industries-icon/man.svg')",
                                        backgroundPosition: 'bottom center'
                                    }}>
                                </div>

                                {/* Pie Chart */}
                                <div className="w-full max-w-[300px] md:max-w-[400px] relative">
                                    <Pie
                                        data={data}
                                        options={{
                                            plugins: {
                                                legend: {
                                                    display: false
                                                },
                                                tooltip: {
                                                    callbacks: {
                                                        label: function (context) {
                                                            return `${context.label}: ${context.raw}%`;
                                                        }
                                                    }
                                                }
                                            }
                                        }}
                                        plugins={[pieLabelPlugin]}
                                    />
                                </div>

                                {/* Right Character - Female */}
                                <div className="hidden md:block w-36 h-96 bg-no-repeat bg-contain bg-center"
                                    style={{
                                        backgroundImage: "url('https://www.apisolutionsltd.com/industries-icon/woman.svg')",
                                        backgroundPosition: 'bottom center'
                                    }}>
                                </div>
                            </div>
                        </div>

                        {/* Swiper Section */}
                        <div className="flex justify-center ml-0 lg:ml-36">
                            <div className="w-full max-w-[300px] h-[400px]">
                                <Swiper
                                    effect={'cards'}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className="h-full w-full"
                                >
                                    {detailsall.map((slide) => (
                                        <SwiperSlide 
                                            key={slide.id} 
                                            className="bg-[#e0f2fe] dark:bg-gray-900 dark:border dark:border-cyan-400 flex flex-col items-center justify-center rounded-2xl p-6 text-center"
                                        >
                                            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-cyan-400 mb-6">{slide.name}</h3>
                                            <p className="text-base font-normal text-gray-600 dark:text-gray-300">{slide.description}</p>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Industries;