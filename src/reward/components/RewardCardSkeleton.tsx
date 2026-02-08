import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const RewardCardSkeleton = React.memo(() => (
  <Card className="rounded-none p-2 border-gray-700 gap-2 animate-fadeIn">
    <CardContent className="h-60 flex items-center justify-center rounded-md bg-gray-700 relative">
      <div className="w-16 h-16 bg-gray-600 rounded-full animate-pulse" />
      <Badge className="absolute top-2 right-2 font-mono bg-gray-600 text-transparent">
        Loading
      </Badge>
    </CardContent>

    <CardFooter className="px-0">
      <div className="h-10 bg-gray-600 rounded-md w-full animate-pulse" />
    </CardFooter>
  </Card>
));
