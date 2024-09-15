// Classe abstrata Pessoa
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

// Classe Estudante herdando de Pessoa
class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`);
    }
}

// Classe Professor herdando de Pessoa
class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e leciono ${this.disciplina}.`);
    }
}

// Criando instâncias de objetos
const estudante1 = new Estudante('João', 20, 'Engenharia');
const estudante2 = new Estudante('Maria', 22, 'Direito');
const professor1 = new Professor('Carlos', 45, 'Matemática');

// Chamando o método apresentar para cada instância
estudante1.apresentar(); // Olá, meu nome é João, tenho 20 anos e estudo Engenharia.
estudante2.apresentar(); // Olá, meu nome é Maria, tenho 22 anos e estudo Direito.
professor1.apresentar(); // Olá, meu nome é Carlos, tenho 45 anos e leciono Matemática.
