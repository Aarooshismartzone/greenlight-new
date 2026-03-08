import { FaGlobe, FaFilm, FaUsers } from "react-icons/fa";

export default function Conclusion() {

    return (

        <section className="py-24 px-6 text-center bg-gray-100 dark:bg-gray-800">

            <div className="max-w-5xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Music That Lives Beyond the Stage
                </h2>

                <p className="text-lg opacity-80 mb-12">
                    GreenLight transforms performances into immersive digital experiences
                    that expand audience reach, deepen fan connection, and unlock
                    long-term value for artists and organizers.
                </p>


                <div className="grid md:grid-cols-3 gap-10">

                    <div className="musicConclusionCard">
                        <FaGlobe size={28} />
                        <h4>Global Access</h4>
                        <p>Fans worldwide can experience concerts without physical limitations.</p>
                    </div>

                    <div className="musicConclusionCard">
                        <FaFilm size={28} />
                        <h4>Replayable Moments</h4>
                        <p>Performances become immersive digital assets fans revisit for years.</p>
                    </div>

                    <div className="musicConclusionCard">
                        <FaUsers size={28} />
                        <h4>Stronger Fan Communities</h4>
                        <p>Shared immersive experiences deepen loyalty between artists and audiences.</p>
                    </div>

                </div>

            </div>

        </section>

    )
}