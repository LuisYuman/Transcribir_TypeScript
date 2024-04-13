import { Empleado } from "./Empleado";

export interface IBST  {
    insertar(emp: Empleado): void;
    existe(id: number): boolean;
    obtener(id: number): Empleado | null;
    esHoja(): boolean;
    esVacio(): boolean;
    preOrden(): void;
    inOrden(): void;
    postOrden(): void;
    eliminar(id: number): void;
    //
}

