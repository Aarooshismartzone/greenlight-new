import Image from "next/image";

interface VolleyballProps {
    reverse?: boolean;
}

export default function VolleyballSection({ reverse = false }: VolleyballProps) {

    const blocks = [
        {
            title: "Speed Outpaces Traditional Coverage",
            text: "Survey results show 78% of volleyball fans interested in immersive viewing pilots within a rapidly growing audience. The pace of rallies often overwhelms standard broadcast formats, leaving fans wanting clearer replay and better visual context."
        },
        {
            title: "Rallies Are Won in Space and Timing",
            text: "Rotations, spacing, and timing define outcomes in volleyball. Traditional broadcast angles miss key on-court relationships, while depth-aware replay reveals positioning and movement patterns that shape every rally."
        },
        {
            title: "Understanding Drives Engagement",
            text: "When fans better understand rallies, engagement increases. Clear replay supports learning, improves retention, and encourages social sharing that helps grow the sport’s global audience."
        },
        {
            title: "Expanding the Volleyball Ecosystem",
            text: "GreenLight extends access beyond the venue by connecting fans, families, and communities worldwide. Matches and rallies become reusable digital assets supporting education, sponsorship, promotion, and scalable deployment from youth leagues to professional play."
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
                                src="/images/events/sports/volleyball_1.jpg"
                                alt="Volleyball XR match"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative h-[240px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/events/sports/volleyball_2.jpg"
                                alt="Volleyball XR rally analysis"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>


                    {/* Desktop overlapping layout */}

                    <div className="relative h-[460px] hidden lg:block">

                        <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-xl overflow-hidden shadow-2xl group z-10">

                            <Image
                                src="/images/events/sports/volleyball_1.jpg"
                                alt="Volleyball XR match view"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                        </div>

                        <div className="absolute bottom-0 right-0 w-[45%] h-[55%] rounded-xl overflow-hidden shadow-2xl group z-20 border-4 border-white dark:border-gray-900">

                            <Image
                                src="/images/events/sports/volleyball_2.jpg"
                                alt="Volleyball XR replay"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                        </div>

                    </div>

                </div>


                {/* ================= Text ================= */}

                <div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Volleyball
                    </h3>

                    <p className="text-lg opacity-80 mb-10">
                        Volleyball moves fast, and critical moments unfold in fractions
                        of a second. GreenLight reveals the spacing, timing, and rally
                        dynamics that determine outcomes through immersive XR replay.
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