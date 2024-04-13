export class Empleado  {
    private id: number;
    private nombre: string;
    private puesto: string;
    private despacho: string;

    constructor(id: number, nombre: string, puesto: string, despacho: string) {
        this.id = id;
        this.nombre = nombre;
        this.puesto = puesto;
        this.despacho = despacho;
    }

    public toString(): string {
        return `Empleado{id=${this.id}, nombre=${this.nombre}, puesto=${this.puesto}, despacho=${this.despacho}}`;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getPuesto(): string {
        return this.puesto;
    }

    public setPuesto(puesto: string): void {
        this.puesto = puesto;
    }

    public getDespacho(): string {
        return this.despacho;
    }

    public setDespacho(despacho: string): void {
        this.despacho = despacho;
    }

    public compareTo(emp: Empleado): number {
        if (this.id === emp.getId()) {
            return 0;
        } else if (this.id < emp.getId()) {
            return -1;
        } else {
            return 1;
        }
    }
    //
}

