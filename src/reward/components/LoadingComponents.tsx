import React from 'react'
import { RewardCardSkeleton } from './RewardCardSkeleton'

export const LoadingComponents = React.memo(() => (
    <section className="custom-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-10">
       <RewardCardSkeleton />
       <RewardCardSkeleton />
       <RewardCardSkeleton />
    </section>
))
