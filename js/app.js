  /* O Script é colocado dentro de uma expressão de função imediatamente invocada que ajuda a proteger o escopo de variaveis */
  (function (){
    //PARTE 1: CRIA O OBJETO HOTEL E EXIBE OS DETALHES DA OFERTA

    //Cria o objeto hotel usando a sintaxe literal
    let hotel =  {
      nome: 'Caiana Hotel',
      tarifaQuarto: 200, // Quantia em real
      desconto: 15, // Porcentagem de desconto
      precoOferta: function () {
        let taxaOferta = this.tarifaQuarto * ((100 - this.desconto) / 100);
        return taxaOferta;
      }
    }

    //Exibe o nome do hotel, o preço padrão e o preco taxaEspecial
    let hotelNome, precoPadrao, precoEspecial; // Declarando variavels

    hotelNome = document.getElementById('hotelName'); // Obtem os elementos
    precoPadrao = document.getElementById('roomRate');
    precoEspecial = document.getElementById('specialRate');

    hotelNome.textContent = hotel.nome;
    precoPadrao.textContent = `$${hotel.tarifaQuarto.toFixed(2)}`; // Exibindo o preço com template literal
    precoEspecial.textContent = `$${hotel.precoOferta()}`;
  // Fim da expressão de função imediatamente invocada

  //PARTE 2: CALCULA E EXIBE AS INFORMAÇÕES SOBRE O FIM DA Oferta

  let expirarMensagem; // Mensagem exibida  ao usuário
  let hoje; // Data de hoje
  let elTermino // O elemento que exibe a mensagem sobre o fim da oferta 


  }())
