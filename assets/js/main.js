function Calculadora() {
  this.display = document.querySelector('.display');

  // inicia as funçoes da calculadora
  this.inicia = () => {
    this.iniciarCalculadora();
    this.capturaCliques();
    this.capturaEnter();
  };

   this.iniciarCalculadora =() => {
     alert('Iniciando a Calculadora!!')
   }

  // captura os  numeros dos botoes 
  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  // captura o enter, e  realiza a soma com o mesmo 
  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

// adiciona a string no display 
  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  // limpa   o que tem no display 
  this.clear = () => this.display.value = '';

  // delete apenas um  string por vez
  this.del = () => this.display.value = this.display.value.slice(0, -1);

  // realiza a conta da calculadora
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  };


}

const calculadora = new Calculadora();
calculadora.inicia();
