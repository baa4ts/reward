import React from "react";

export const Hero = React.memo(() => {
    return (
        <section className="custom-width flex flex-col-reverse gap-2 py-10 text-center lg:flex-row">
            <article className="flex text-center items-center flex-1 flex-col justify-center gap-4">
                <h1 className="w-full px-2 font-mono text-5xl font-bold leading-tight">
                    Reward
                </h1>

                <p className="w-full max-w-md px-2 text-xl text-gray-400">
                    Reclama tus recompensas de{" "}
                    <span className="font-semibold text-yellow-400">
                        Clash Royale
                    </span>{" "}
                    en un solo lugar. Simple, sencillo y rápido.
                </p>

                <div className="mt-2 flex items-center justify-center md:flex-none">
                    <a href="#reward-now">
                        <button className="custom-scale rounded-lg border-2 border-black bg-yellow-400 px-6 py-3 font-mono font-extrabold text-black hover:bg-yellow-300">
                            Reclamar ahora
                        </button>
                    </a>
                </div>
            </article>

            <article className="flex flex-1 items-center justify-center">
                <img
                    src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9hUjY5Yk5rVUh1ZmNlM3BUczdUUy5wbmcifQ:supercell:kDxIbWxR5rKPL6qKN9hrMzdmhhrUBZVSM8_hGRcaUjc"
                    alt="Clash Royale rewards"
                    className="w-full max-w-xs drop-shadow-xl sm:max-w-sm lg:max-w-md"
                />
            </article>
        </section>
    );
});
