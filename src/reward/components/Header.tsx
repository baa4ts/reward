import logo from '@/assets/r.svg';
import React from 'react';
import { HeroGitHubAction } from './HeroGitHubAction';

export const Header = React.memo(() => (
    <header className="custom-width border-black md:border-x-2 border-b-2 border-solid h-16 flex items-center justify-between p-2.5">
        <div className="flex items-center gap-2.5">
            <a
                href="/"
                rel="noopener noreferrer"
                className='custom-scale'
            >
                <img
                    src={logo}
                    width={48}
                    height={48}
                    alt="Logo"
                    className="object-contain"
                />
            </a>
        </div>
        <h1 className='font-mono text-3xl'>rewards</h1>
        <HeroGitHubAction />
    </header>
))
