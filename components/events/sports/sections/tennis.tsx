import Image from "next/image";

export default function TennisSection() {

    const blocks = [
        {
            title: "Fans Want Point-Level Insight",
            text: "Survey data shows strong fan interest in immersive viewing pilots. Tennis fans want to understand how rallies unfold point by point—not just who wins the point."
        },
        {
            title: "Strategy Lives in Space",
            text: "Traditional broadcasts flatten depth and spacing, hiding positioning and movement patterns. Fast exchanges are difficult to interpret through director-selected angles."
        },
        {
            title: "Conversation Happens Elsewhere",
            text: "Fans discuss rallies and decisions socially, yet those conversations happen outside the viewing environment, losing context once the moment passes."
        },
        {
            title: "Extend Value Across the Sport",
            text: "GreenLight adds an immersive layer alongside existing broadcasts. Iconic rallies, serves, and match moments become replayable assets while replay packages create new revenue opportunities across tours, majors, and academies."
        }
    ];

    return (

        <section className="py-24 px-6">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* ================= Images ================= */}

                <div>

                    {/* Mobile */}

                    <div className="grid grid-cols-1 gap-6 lg:hidden">

                        <div className="relative h-[240px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/events/sports/tennis_1.jpg"
                                alt="Tennis XR"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative h-[240px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/events/sports/tennis_2.jpg"
                                alt="Tennis XR analysis"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>


                    {/* Desktop overlap */}

                    <div className="relative h-[460px] hidden lg:block">

                        <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-xl overflow-hidden shadow-2xl group z-10">

                            <Image
                                src="/images/events/sports/tennis_1.jpg"
                                alt="Tennis match XR"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                        </div>

                        <div className="absolute bottom-0 right-0 w-[45%] h-[55%] rounded-xl overflow-hidden shadow-2xl group z-20 border-4 border-white dark:border-gray-900">

                            <Image
                                src="/images/events/sports/tennis_2.jpg"
                                alt="Tennis rally XR"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                        </div>

                    </div>

                </div>


                {/* ================= Text ================= */}

                <div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Tennis
                    </h3>

                    <p className="text-lg opacity-80 mb-10">
                        Tennis fans care about how points unfold, not just the outcome.
                        GreenLight reveals rally dynamics, positioning, and momentum
                        shifts through immersive XR experiences.
                    </p>


                    {/* Insight cards */}

                    <div className="grid sm:grid-cols-2 gap-6">

                        {blocks.map((block, index) => (

                            <div
                                key={index}
                                className="p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 hover:border-green-500 transition"
                            >

                                <h4 className="font-semibold text-green-600 mb-2">
                                    {block.title}
                                </h4>

                                <p className="text-sm opacity-80 leading-relaxed">
                                    {block.text}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}