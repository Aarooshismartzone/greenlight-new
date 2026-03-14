import Image from "next/image";

interface FormulaOneProps {
    reverse?: boolean;
}

export default function FormulaOneComponent({ reverse = false }: FormulaOneProps) {

    const blocks = [
        {
            title: "A High-Intent Fan Base",
            text: "Formula 1 fans are analytical and globally engaged. Survey results show strong interest in immersive pilots and a willingness to pay for deeper race insight where understanding matters as much as entertainment."
        },
        {
            title: "The Race Lives in Geometry",
            text: "Racing lines, positioning, and gaps define outcomes, yet traditional broadcasts and onboard cameras flatten spatial relationships. Immersive replay restores the true geometry of the race."
        },
        {
            title: "Premium Insight Without Broadcast Risk",
            text: "GreenLight operates alongside existing broadcasts, adding immersive replay without disrupting live feeds or production workflows while remaining fully brand- and rights-safe."
        },
        {
            title: "Monetization & Partner Value",
            text: "Overtakes, pit exits, and decisive moments become premium replay products. Archives gain long-term value while sponsors engage fans inside immersive environments aligned with Formula 1’s premium positioning."
        }
    ];

    return (
        <section className="py-24 px-6">

            <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>

                {/* ================= Images ================= */}

                <div>

                    {/* Mobile */}

                    <div className="grid grid-cols-1 gap-6 lg:hidden">

                        <div className="relative h-[240px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/events/sports/fo_1.jpg"
                                alt="Formula 1 race XR"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative h-[240px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/events/sports/fo_2.jpg"
                                alt="Formula 1 immersive replay"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>

                    {/* Desktop overlap */}

                    <div className="relative h-[460px] hidden lg:block">

                        <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-xl overflow-hidden shadow-2xl group z-10">

                            <Image
                                src="/images/events/sports/fo_1.jpg"
                                alt="Formula 1 XR racing"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                        </div>

                        <div className="absolute bottom-0 right-0 w-[45%] h-[55%] rounded-xl overflow-hidden shadow-2xl group z-20 border-4 border-white dark:border-gray-900">

                            <Image
                                src="/images/events/sports/fo_2.jpg"
                                alt="Formula 1 replay analysis"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                        </div>

                    </div>

                </div>


                {/* ================= Text ================= */}

                <div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Formula 1
                    </h3>

                    <p className="text-lg opacity-80 mb-10">
                        Formula 1 fans seek insight as much as spectacle. GreenLight
                        reveals the spatial dynamics of racing — turning decisive
                        moments into immersive experiences for fans, analysts,
                        broadcasters, and partners.
                    </p>


                    {/* compact cards */}

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