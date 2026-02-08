import { Github } from 'lucide-react';
import logo from '@/assets/r.svg';
import React from 'react';

export const Header = React.memo(() => (
    <header className="custom-width border-black md:border-x-2 border-b-2 border-solid h-16 flex items-center justify-between p-2.5">
        <div className="flex items-center gap-2.5">
            <img
                src={logo}
                width={48}
                height={48}
                alt="Logo"
                className="object-contain"
            />
        </div>
        <h1 className='font-mono text-3xl'>rewards</h1>
        <button
            className="group w-12 h-12 cursor-pointer flex items-center justify-center hover:bg-black/80 rounded transition-colors duration-500"
            aria-label="Toggle theme"
        >
            <Github
                size={30}
                width={30}
                className="text-black group-hover:text-white transition-colors duratio duration-500"
            />
        </button>
    </header>
))
