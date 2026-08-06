import {type Car} from "../types/car";
import api from "../../../shared/api";

export async function getCars(): Promise<Car[]> {
    const res = await api.get<Car[]>("/cars");

    return res.data;
}