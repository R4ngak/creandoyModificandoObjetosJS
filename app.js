class Consultorio {
    constructor(nombre) {
        this.nombre = nombre
        this._pacientes = []
    }

    set pacientes(value) {
        this._pacientes.push(value)
    }
    agregarPaciente(value){
        this._pacientes.push(value)
    }
}

class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
        this._nombre = nombre
        this._edad = edad
        this._rut = rut
        this._diagnostico = diagnostico      
    }

        get nombre() {
            return this._nombre
        }
        get edad() {
            return this._edad
        }
        get rut() {
            return this._rut
        }
        get diagnostico() {
            return this._diagnostico
    }


    set nombre(value) {
        this._nombre = value
    }
    set edad(value) {
        this._edad = value
    }
    set rut(value) {
        this._rut = value
    }
    set diagnostico(value) {
        this._diagnostico = value
    }
}

const central = new Consultorio("Consultorio1")

Consultorio.prototype.buscarPorNombre = function  (value){
    return this._pacientes.find(item => item._nombre === value)
}

Consultorio.prototype.motrarTodos = function  (){
    for(let paciente of this._pacientes){
        console.log(paciente)
    }

}


const uno = new Paciente()
uno.nombre = "Juan"
uno.edad = "31"
uno.rut = "111-1"
uno.diagnostico = "dolor de Guata"

const dos = new Paciente()
dos.nombre = "Pedro"
dos.edad = "31"
dos.rut = "222-2"
dos.diagnostico = "dolor de cabeza"

// los push de los datos
central.agregarPaciente(uno)
central.agregarPaciente(dos)

// console.log(central)
// console.log(uno.nombre)
// console.log(central.buscarPorNombre("Juan"))
central.motrarTodos()