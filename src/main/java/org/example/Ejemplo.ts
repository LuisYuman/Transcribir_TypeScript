class Empleado {
    constructor(public id: number, public nombre: string, public departamento: string, public codigo: string) {}
}

class BST<T extends Empleado> {
    private root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    insertar(emp: T): void {
        // Implementación de inserción Bst aquí
    }

    existe(id: number): boolean {
        // Implementación de existencia de nodo Bst aquí
        return false; // Placeholder, reemplazar con lógica real
    }

    obtener(id: number): T {
        // Implementación de obtención de nodo Bst aquí
        return null!; // Placeholder, reemplazar con lógica real
    }

    esHoja(): boolean {
        // Implementación de verificación de hoja Bst aquí
        return false; // Placeholder, reemplazar con lógica real
    }

    esVacio(): boolean {
        // Implementación de verificación de vacío Bst aquí
        return false; // Placeholder, reemplazar con lógica real
    }

    preOrden(): void {
        // Implementación de recorrido preorden Bst aquí
    }

    inOrden(): void {
        // Implementación de recorrido inorden Bst aquí
    }

    postOrden(): void {
        // Implementación de recorrido postorden Bst aquí
    }

    eliminar(id: number): void {
        // Implementación de eliminación de nodo Bst aquí
    }
}

class TreeNode<T> {
    constructor(public value: T, public left: TreeNode<T> | null = null, public right: TreeNode<T> | null = null) {}
}

// Implementa la lógica de logger si es necesario

const e1: Empleado = new Empleado(43, "Walter Cordova", "IT", "A-255");
const e2: Empleado = new Empleado(10, "Roxana Escobar", "RRHH", "A-255");
const e3: Empleado = new Empleado(8, "Bryan Orellana", "Ventas", "A-255");
const e4: Empleado = new Empleado(53, "Mario Ruano", "Logistica", "A-255");
const e5: Empleado = new Empleado(15, "Salazar Bitsco", "IT", "A-255");
const e6: Empleado = new Empleado(50, "Jonny Bravo", "RRHH", "A-255");
const e7: Empleado = new Empleado(54, "Sergio Espinoza", "Marketing", "A-255");
const e8: Empleado = new Empleado(25, "Belter Hernandez", "Contabilidad", "A-255");

const bst: BST<Empleado> = new BST();
bst.insertar(e1);
console.log(`Esta vacío: ${bst.esVacio()} y es hoja ${bst.esHoja()}`);
bst.insertar(e2);
console.log(`Esta vacío: ${bst.esVacio()} y es hoja ${bst.esHoja()}`);
bst.insertar(e3);
console.log(`Esta vacío: ${bst.esVacio()} y es hoja ${bst.esHoja()}`);
bst.insertar(e8);
console.log(`Esta vacío: ${bst.esVacio()} y es hoja ${bst.esHoja()}`);

console.log("\n");
bst.inOrden();
console.log("\n");
bst.eliminar(8);
console.log(`Esta vacío: ${bst.esVacio()} y es hoja ${bst.esHoja()}`);
console.log("Empleado Eliminado");
bst.inOrden();

// Salida esperada:
