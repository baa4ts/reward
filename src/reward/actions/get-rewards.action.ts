import { API } from "@/API/api"
import type { Reward } from "../type/Reward.type"

export const getRewards = async (): Promise<Reward[]> => {

    const { data } = await API.get<Reward[]>('/rewards')

    return data || [] as Reward[]
}