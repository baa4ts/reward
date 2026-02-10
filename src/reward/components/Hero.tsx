import React from "react"

export const Hero = React.memo(() => {
    return (
        <section className="custom-width flex flex-col-reverse lg:flex-row gap-2 py-10 text-center">
            <article className="flex-1 flex flex-col justify-center gap-4 text-left">
                <h1 className="font-mono text-5xl font-bold leading-tight px-2">
                    Reward
                </h1>

                <p className="text-xl text-gray-400 max-w-md px-2">
                    Reclama tus recompensas de{" "}
                    <span className="text-yellow-400 font-semibold">
                        Clash Royale
                    </span>
                    {" "} en un solo lugar. Simple, sencillo y rápido.
                </p>

                <div className="mt-2 flex items-center justify-center md:flex-none">
                    <a href="#reward-now">
                        <button className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300 transition">
                            Reclamar ahora
                        </button>
                    </a>
                </div>
            </article>

            <article className="flex-1 flex items-center justify-center">
                <img
                    src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9hUjY5Yk5rVUh1ZmNlM3BUczdUUy5wbmcifQ:supercell:kDxIbWxR5rKPL6qKN9hrMzdmhhrUBZVSM8_hGRcaUjc"
                    alt="Clash Royale rewards"
                    className="w-full max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-xl"
                />
            </article>
        </section>
    )
})
