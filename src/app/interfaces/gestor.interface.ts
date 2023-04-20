export interface Gestor{
    estado: "online" | "offline";
    disponible: boolean;
    users?: string[];
}

