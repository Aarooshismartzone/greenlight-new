import Image from "next/image";

interface CombatSportsProps {
    reverse?: boolean;
}

export default function CombatSportsSection({ reverse = false }: CombatSportsProps) {

    const blocks = [
        {
            title: "Fans Want Technical Clarity",
            text: "Survey data shows strong fan interest in immersive XR viewing pilots. Combat sports fans are highly analytical and want to understand exchanges, leverage, and outcomes—not just see the result."
        },
        {
            title: "The Fight Within the Fight",
            text: "Traditional broadcasts flatten positioning, leverage, and grappling dynamics. Submissions and technical sequences are often difficult to interpret in real time without spatial context."
        },
        {
            title: "Social by Nature",
            text: "Combat sports are frequently experienced in groups where discussion and breakdown sustain engagement. Today those conversations happen outside the viewing experience."
        },
        {
            title: "Extend Value Without Risk",
            text: "GreenLight complements PPV and subscription models without disrupting core revenue. Knockouts, submissions, and decisive exchanges become premium replay assets while sponsors gain immersive engagement environments."
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
                                src="/images/events/sports/cs_1.jpg"
                                alt="Combat sports XR"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative h-[240px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/events/sports/cs_2.jpg"
                                alt="Combat sports replay XR"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>


                    {/* Desktop overlap */}

                    <div className="relative h-[460px] hidden lg:block">

                        <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-xl overflow-hidden shadow-2xl group z-10">

                            <Image
                                src="/images/events/sports/cs_1.jpg"
                                alt="Combat sports match XR"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                        </div>

                        <div className="absolute bottom-0 right-0 w-[45%] h-[55%] rounded-xl overflow-hidden shadow-2xl group z-20 border-4 border-white dark:border-gray-900">

                            <Image
                                src="/images/events/sports/cs_2.jpg"
                                alt="Combat sports XR replay"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                        </div>

                    </div>

                </div>


                {/* ================= Text ================= */}

                <div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Combat Sports
                    </h3>

                    <p className="text-lg opacity-80 mb-10">
                        Combat sports fans want more than highlight moments.
                        GreenLight reveals the technical exchanges inside every
                        fight — making positioning, leverage, and decisive moments
                        easier to understand and experience.
                    </p>


                    {/* Compact cards */}

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