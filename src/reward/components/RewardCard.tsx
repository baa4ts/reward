import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { FC } from "react";
import { Dialog } from "./Dialog";
import type { Reward } from "../type/Reward.type";
import { Badge } from "@/components/ui/badge";

type Props = { reward: Reward }

export const RewardCard: FC<Props> = ({ reward }) => (
    <Card className="rounded-none p-2 border-black gap-2 animate-fadeIn">
        <CardContent
            className={cn(
                "h-60 flex items-center justify-center rounded-md relative",
                reward.bg
            )}
        >
            <img
                src={reward.icon}
                alt={reward.category}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
            />
            <Badge variant="default" className="absolute top-2 right-2 font-mono">
                {reward.category}
            </Badge>
        </CardContent>
        <CardFooter className="px-0">
            <Dialog amount={reward.amount} icon={reward.icon} link={reward.link} />
        </CardFooter>
    </Card>
);
