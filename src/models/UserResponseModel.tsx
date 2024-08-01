export interface UserResponseModel{
    id: number;
    username: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    last_login: string | null;
    created: string;
    updated: string;

}