import Image from "next/image";

interface SupercrossProps {
    reverse?: boolean;
}

export default function SupercrossSection({ reverse = false }: SupercrossProps) {

    const blocks = [
        {
            title: "Insight Drives Engagement",
            text: "Survey data shows 81% of Supercross fans are interested in immersive replay pilots, with replay ranked as the most desired feature. Fans want tools that explain how racing moments happen, showing strong analytical interest rather than novelty."
        },
        {
            title: "Performance Lives in the Details",
            text: "Jump technique, line choice, and rider spacing determine outcomes. Broadcast cuts often obscure these critical elements, making replay control essential for understanding rider execution."
        },
        {
            title: "Replay Fuels Community",
            text: "Race nights are highly social. Fans watch together, debate outcomes, and analyze race moments in real time. Shared replay experiences extend engagement beyond race day and keep discussion alive between events."
        },
        {
            title: "Extend Broadcast Value",
            text: "GreenLight operates as a premium layer alongside existing coverage without affecting broadcast rights or workflows. Key jumps and passes become replayable assets while sponsors integrate naturally within immersive replay environments."
        }
    ];

    return (

        <section className="py-24 px-6">

            <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>

                {/* ================= Images ================= */}

                <div>

                    {/* Mobile layout */}

                    <div className="grid grid-cols-1 gap-6 lg:hidden">

                        <div className="relative h-[240px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/events/sports/supercross_1.jpg"
                                alt="Supercross XR race"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative h-[240px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/events/sports/supercross_2.jpg"
                                alt="Supercross XR replay"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>


                    {/* Desktop overlapping layout */}

                    <div className="relative h-[460px] hidden lg:block">

                        <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-xl overflow-hidden shadow-2xl group z-10">

                            <Image
                                src="/images/events/sports/supercross_1.jpg"
                                alt="Supercross XR race analysis"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                        </div>

                        <div className="absolute bottom-0 right-0 w-[45%] h-[55%] rounded-xl overflow-hidden shadow-2xl group z-20 border-4 border-white dark:border-gray-900">

                            <Image
                                src="/images/events/sports/supercross_2.jpg"
                                alt="Supercross XR replay environment"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                        </div>

                    </div>

                </div>


                {/* ================= Text ================= */}

                <div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Supercross
                    </h3>

                    <p className="text-lg opacity-80 mb-10">
                        Supercross fans care about how races are won — not just who wins.
                        GreenLight reveals the technique, positioning, and race decisions
                        that shape every lap through immersive XR replay.
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