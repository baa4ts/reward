import { Button } from '@/components/ui/button'
import { 
    Dialog, 
    DialogTrigger, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogDescription, 
    DialogFooter, 
    DialogClose 
} from '@/components/ui/dialog'
import { Github } from 'lucide-react'
import React from 'react'

export const HeroGitHubAction = React.memo(() => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    className="group w-12 h-12 flex items-center justify-center rounded cursor-pointer hover:bg-black/80 transition-colors duration-500"
                    aria-label="Abrir enlaces de GitHub"
                >
                    <Github
                        size={30}
                        className="text-black group-hover:text-white transition-colors duration-500"
                    />
                </button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Acerca del proyecto</DialogTitle>
                    <DialogDescription>
                        Accede a los repositorios relacionados con este proyecto:
                    </DialogDescription>
                </DialogHeader>

                <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4 flex flex-col items-start space-y-4">
                    <a 
                        className="font-mono underline underline-offset-4 text-blue-600 hover:text-blue-800"
                        href="https://github.com/baa4ts"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub: baa4ts
                    </a>

                    <a 
                        className="font-mono underline underline-offset-4 text-blue-600 hover:text-blue-800"
                        href="https://github.com/baa4ts/reward-backend"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub: Backend
                    </a>

                    <a 
                        className="font-mono underline underline-offset-4 text-blue-600 hover:text-blue-800"
                        href="https://github.com/baa4ts/reward"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub: Frontend
                    </a>
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cerrar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
})
