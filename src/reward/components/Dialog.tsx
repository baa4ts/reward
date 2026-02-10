import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import type { FC } from "react"
import type { Reward } from "../type/Reward.type"

type Props = Pick<Reward, "amount" | "icon" | "link">

export const Dialog: FC<Props> = ({ amount, icon, link, }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="w-full font-semibold custom-scale">
                    Reclamar <span className="opacity-70">(x{amount})</span>
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent size="sm" className="font-mono">
                <AlertDialogHeader className="gap-3 text-center">
                    <AlertDialogMedia>
                        <img
                            src={icon}
                            alt="Recompensa"
                            className="mx-auto h-20 w-20 object-contain"
                        />
                    </AlertDialogMedia>

                    <AlertDialogTitle className="text-base">
                        Requisitos
                    </AlertDialogTitle>

                    <AlertDialogDescription className="text-xs leading-relaxed text-muted-foreground">
                        Para reclamar la recompensa es necesario tener una cuenta de
                        <span className="font-medium text-foreground"> Supercell </span>
                        y estar autenticado en ella.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter className="gap-2">
                    <AlertDialogCancel className="text-xs b">
                        Cancelar
                    </AlertDialogCancel>

                    <AlertDialogAction asChild>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            Reclamar
                        </a>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
