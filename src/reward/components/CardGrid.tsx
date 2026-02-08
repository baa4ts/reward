import { RewardCard } from './RewardCard';
import { useQuery } from '@tanstack/react-query';
import { getRewards } from '../actions/get-rewards.action';
import { ErrorComponent } from './ErrorComponent';
import { LoadingComponents } from './LoadingComponents';

export const CardGrid = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["rewards"],
        queryFn: getRewards,
        staleTime: 180000,
        refetchInterval: 180000,
        retry: 2,
    });

    // Primera carga
    if (isLoading) {
        return <LoadingComponents />;
    }

    // Error
    if (isError || !data) {
        return <ErrorComponent />;
    }

    return (
        <section className="custom-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-10">
            {data.map((reward) => (
                <RewardCard key={reward.id} reward={reward} />
            ))}
        </section>
    );
};
