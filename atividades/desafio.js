class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    mostrarInfo() {
        console.log(`| === Informações === |\n| Nome: ${this.nome} | \n| Salário: R$${this.salario} |`);
    }

    mostrarAtividade() {
        throw new Error("Este método ainda não foi implementado.");
    }

    calcularBonus() {
        throw new Error("Este método ainda não foi implementado.");
    }
}

class Designer extends Funcionario {
    constructor(nome, salario, principalFerramenta) {
        super(nome, salario);
        this.principalFerramenta = principalFerramenta;
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`| Principal ferramenta: ${this.principalFerramenta} |`)
    }

    mostrarAtividade() {
        console.log(`${this.nome} está utilizando ${this.principalFerramenta} para construir seus designs.`);
    }

    calcularBonus() {
        console.log(`${this.nome} recebeu um bônus de R$${this.salario * 0.18}.`); // calcula e mostra um bônus de 18% do salário
    }
}

class Engenheiro extends Funcionario {
    constructor(nome, salario, typeEngineer, funcao) {
        super(nome, salario);
        this.typeEngineer = typeEngineer;
        this.funcao = funcao;
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`| Tipo de Engenharia: ${this.typeEngineer} |`);
        console.log(`| Função: ${this.funcao} |`);
    }

    mostrarAtividade() {
        console.log(`${this.nome} está construindo sistemas como ${this.funcao}.`);
    }

    calcularBonus() {
        console.log(`${this.nome} recebeu um bônus de R$${this.salario * 0.2}.`); // calcula e mostra um bônus de 20% do salário
    }
}

class Arquiteto extends Funcionario {
    constructor(nome, salario, ferPlanta, ferRenderiza) {
        super(nome, salario);
        this.ferPlanta = ferPlanta;
        this.ferRenderiza = ferRenderiza;
    }

    mostrarAtividade() {
        console.log(`${this.nome} está criando seus projetos com ${this.ferPlanta} e ${this.ferRenderiza}.`);
    }

    calcularBonus() {
        console.log(`${this.nome} recebeu um bônus de R$${this.salario * 0.16}.`); // calcula e mostra um bônus de 16% do salário
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`| Ferramenta p/ Planta Baixa: ${this.ferPlanta} |`)
        console.log(`| Ferramenta p/ Renderizar: ${this.ferRenderiza} |`)
    }

}

const designer = new Designer('Lucas', 5800, 'CorelDRAW');
const engenheiro = new Engenheiro('Rebeca', 8900, 'Engenharia de Software', 'Desenvolvedora Full-Stack');
const arquiteto = new Arquiteto('Daniela', 11408, 'AutoCAD', 'Revit')

designer.mostrarInfo();
designer.mostrarAtividade();
designer.calcularBonus();

console.log("\n")

engenheiro.mostrarInfo();
engenheiro.mostrarAtividade();
engenheiro.calcularBonus();

console.log("\n")

arquiteto.mostrarInfo();
arquiteto.mostrarAtividade();
arquiteto.calcularBonus();