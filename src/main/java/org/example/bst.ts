import { IBST } from './IBST';
import { Empleado } from './Empleado';

export class bst implements IBST {
    private valor: Empleado | null = null;
    private izdo: bst | null = null;
    private dcho:  bst | null = null;
    private padre:  bst | null = null;

    public insertar(emp: Empleado): void {
        this.insertarImp(emp, null);
    }

    private insertarImp(emp: Empleado, padre:  bst | null): void {
        if (this.valor === null) {
            this.valor = emp;
            this.padre = padre;
        } else {
            if (emp.compareTo(this.valor) < 0) {
                if (this.izdo === null) {
                    this.izdo = new  bst();
                }
                this.izdo.insertarImp(emp, this);
            } else if (emp.compareTo(this.valor) > 0) {
                if (this.dcho === null) {
                    this.dcho = new  bst();
                }
                this.dcho.insertarImp(emp, this);
            } else {
                throw new Error('Insertando elemento duplicado');
            }
        }
    }

    public existe(id: number): boolean {
        if (this.valor !== null) {
            if (id === this.valor.getId()) {
                return true;
            } else if (this.izdo !== null && id < this.valor.getId()) {
                return this.izdo.existe(id);
            } else if (this.dcho !== null && id > this.valor.getId()) {
                return this.dcho.existe(id);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public obtener(id: number): Empleado {
        if (this.valor !== null) {
            if (id === this.valor.getId()) {
                return this.valor;
            } else if (this.izdo !== null && id < this.valor.getId()) {
                return this.izdo.obtener(id);
            } else if (this.dcho !== null && id > this.valor.getId()) {
                return this.dcho.obtener(id);
            } else {
                throw new Error('Elemento no encontrado'); // No se puede retornar null
            }
        } else {
            throw new Error('Elemento no encontrado');
        }
    }

    public esHoja(): boolean {
        return this.valor !== null && this.izdo === null && this.dcho === null;
    }

    public esVacio(): boolean {
        return this.valor === null;
    }

    public preOrden(): void {
        this.preOrdenImpl('');
    }

    private preOrdenImpl(prefijo: string): void {
        if (this.valor !== null) { // Para evitar errores si el valor es null
            console.log(prefijo + this.valor.toString());
            if (this.izdo !== null) {
                this.izdo.preOrdenImpl(prefijo + '  ');
            }
            if (this.dcho !== null) {
                this.dcho.preOrdenImpl(prefijo + '  ');
            }
        }
    }

    public inOrden(): void {
        this.inOrdenImpl('');
    }

    private inOrdenImpl(prefijo: string): void {
        if (this.valor !== null) {
            if (this.izdo !== null) {
                this.izdo.inOrdenImpl(prefijo + '  ');
            }
            console.log(prefijo + this.valor.toString());
            if (this.dcho !== null) {
                this.dcho.inOrdenImpl(prefijo + '  ');
            }
        }
    }

    public postOrden(): void {
        this.postOrdenImpl('');
    }

    private postOrdenImpl(prefijo: string): void {
        if (this.valor !== null) {
            if (this.izdo !== null) {
                this.izdo.postOrdenImpl(prefijo + '  ');
            }
            if (this.dcho !== null) {
                this.dcho.postOrdenImpl(prefijo + '  ');
            }
            console.log(prefijo + this.valor.toString());
        }
    }

    public eliminar(id: number): void {
        if (this.valor !== null) {
            if (id === this.valor.getId()) {
                this.eliminarImpl(id);
            } else if (this.izdo !== null && id < this.valor.getId()) {
                this.izdo.eliminar(id);
            } else if (this.dcho !== null && id > this.valor.getId()) {
                this.dcho.eliminar(id);
            }
        }
    }

    private eliminarImpl(id: number): void {
        if (this.valor !== null) {
            if (id === this.valor.getId()) {
                if (this.izdo !== null && this.dcho !== null) {
                    let sucesor:  bst | null = this.obtenerSucesor(this);
                    if (sucesor !== null) {
                        this.valor = sucesor.valor;
                        if (sucesor.valor !== null) {
                            sucesor.eliminarImpl(sucesor.valor.getId());
                        }
                    }
                } else if (this.izdo !== null || this.dcho !== null) {
                    let hijo:  bst | null = this.izdo !== null ? this.izdo : this.dcho;
                    if (this.padre !== null) {
                        if (this === this.padre.izdo) {
                            this.padre.izdo = hijo;
                        }
                        if (this === this.padre.dcho) {
                            this.padre.dcho = hijo;
                        }
                    } else {
                        this.valor = hijo !== null ? hijo.valor : null;
                        this.izdo = hijo !== null ? hijo.izdo : null;
                        this.dcho = hijo !== null ? hijo.dcho : null;
                    }
                } else {
                    if (this.padre !== null) {
                        if (this === this.padre.izdo) {
                            this.padre.izdo = null;
                        }
                        if (this === this.padre.dcho) {
                            this.padre.dcho = null;
                        }
                        this.padre = null;
                    }
                    this.valor = null;
                }
            } else if (this.izdo !== null && id < this.valor.getId()) {
                this.izdo.eliminarImpl(id);
            } else if (this.dcho !== null && id > this.valor.getId()) {
                this.dcho.eliminarImpl(id);
            }
        }
    }

    private obtenerSucesor(nodo:  bst): bst | null {
        let sucesor:  bst | null = null;
        if (nodo.dcho !== null) {
            sucesor = nodo.dcho;
            while (sucesor.izdo !== null) {
                sucesor = sucesor.izdo;
            }
        }
        return sucesor;
    }

    //
}

