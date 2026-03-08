import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

interface MusicSectionProps {
    title: string
    images: string[]
    points: string[]
    reverse?: boolean
}

export default function MusicSection({
    title,
    images,
    points,
    reverse = false
}: MusicSectionProps) {

    const img1 = images[0]
    const img2 = images[1]

    return (

        <section className="py-24 px-6">

            <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>

                {/* ================= Images ================= */}

                <div>

                    {/* ---------- Mobile layout ---------- */}

                    <div className="grid grid-cols-1 gap-6 lg:hidden">

                        {images.map((img, index) => (

                            <div
                                key={index}
                                className="relative h-[240px] rounded-xl overflow-hidden shadow-xl"
                            >
                                <Image
                                    src={img}
                                    alt={`${title} ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        ))}

                    </div>


                    {/* ---------- Desktop layout ---------- */}

                    <div className="relative h-[460px] hidden lg:block">

                        {/* Main image */}

                        {img1 && (
                            <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)] group z-10">

                                <Image
                                    src={img1}
                                    alt={`${title} main`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                            </div>
                        )}

                        {/* Overlap image */}

                        {img2 && (
                            <div className="absolute bottom-0 right-0 w-[45%] h-[55%] rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)] group z-20 border-4 border-white dark:border-gray-900">

                                <Image
                                    src={img2}
                                    alt={`${title} secondary`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                            </div>
                        )}

                    </div>

                </div>


                {/* ================= Text ================= */}

                <div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-10">
                        {title}
                    </h3>

                    <div className="space-y-6">

                        {points.map((point, index) => (

                            <div key={index} className="flex gap-4">

                                <FaCheckCircle
                                    className="text-green-500 mt-1 flex-shrink-0"
                                    size={18}
                                />

                                <p className="opacity-85 leading-relaxed text-lg">
                                    {point}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}