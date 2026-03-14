import Image from "next/image";

interface SportsCoachingProps {
    reverse?: boolean;
}

export default function SportsCoachingSection({ reverse = false }: SportsCoachingProps) {

    const blocks = [
        {
            title: "See Movement Clearly",
            text: "GreenLight captures training sessions in true 3D, allowing athletes and coaches to view technique from any angle and speed while understanding movement, spacing, alignment, and body mechanics in real space."
        },
        {
            title: "Beyond Flat Video",
            text: "Traditional 2D video hides spatial relationships and depth. Immersive replay removes ambiguity, making comparisons between repetitions clearer and feedback far more objective."
        },
        {
            title: "Coaching Without Limits",
            text: "Sessions can be reviewed collaboratively, even when athletes and coaches train remotely. Programs can scale coaching across teams and seasons without increasing staff workload."
        },
        {
            title: "Training as a Long-Term Asset",
            text: "GreenLight integrates with existing video and analytics tools while turning training sessions into reusable assets for instruction, evaluation, and long-term athlete development."
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
                                src="/images/events/sports/sc_1.jpg"
                                alt="Sports coaching XR"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative h-[240px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/events/sports/sc_2.jpg"
                                alt="Sports coaching analysis"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>

                    {/* Desktop overlap */}

                    <div className="relative h-[460px] hidden lg:block">

                        <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-xl overflow-hidden shadow-2xl group z-10">

                            <Image
                                src="/images/events/sports/sc_1.jpg"
                                alt="Athlete training XR"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                        </div>

                        <div className="absolute bottom-0 right-0 w-[45%] h-[55%] rounded-xl overflow-hidden shadow-2xl group z-20 border-4 border-white dark:border-gray-900">

                            <Image
                                src="/images/events/sports/sc_2.jpg"
                                alt="Sports training replay"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                        </div>

                    </div>

                </div>


                {/* ================= Text ================= */}

                <div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Sports Coaching
                    </h3>

                    <p className="text-lg opacity-80 mb-10">
                        See movement clearly. Coach with precision. Improve faster.
                        GreenLight transforms everyday training into immersive
                        experiences that help athletes and coaches understand
                        performance, technique, and positioning with far greater clarity.
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