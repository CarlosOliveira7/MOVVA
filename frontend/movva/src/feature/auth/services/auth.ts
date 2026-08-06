import api from "../../../shared/api"


interface RegisterRequest {
    email: string,
    password: string

}

interface LoginRequest {
    email: string,
    password: string
}

interface LoginResponse {
    token: string
}

export async function login(data: LoginRequest) {
    const response = await api.post<LoginResponse>(
        "/auth/login",
        data
    );

    return response.data;
}

export async function register(data: LoginRequest) {
    const response = await api.post<LoginResponse>(
        "/auth/login",
        data
    );

    return response.data;


}