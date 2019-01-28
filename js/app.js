  /* O Script é colocado dentro de uma expressão de função imediatamente invocada que ajuda a proteger o escopo de variaveis */
  (function (){
    //PARTE 1: CRIA O OBJETO HOTEL E EXIBE OS DETALHES DA OFERTA

    //Cria o objeto hotel usando a sintaxe literal
    let hotel =  {
      nome: 'CaianaHotel',
      tarifaQuarto: 200, // Quantia em real
      desconto: 15, // Porcentagem de desconto
      precoOferta: function () {
        let taxaOferta = this.tarifaQuarto * ((100 - this.desconto) / 100);
        return precoOferta;
      }
    }

    //Exibe o nome do hotel, o preço padrão e o preco taxaEspecial
    let hotelNome, precoPadrao, precoEspecial; // Declarando variavels

    hotelNome = document.getElementById('hotelNome'); // Obtem os elementos
    precoPadrao = document.getElementById('tarifaQuarto');
    precoEspecial = document.getElementById('taxaEspecial');

    hotelNome.textContent = hotel.nome;

  // Fim da expressão de função imediatamente invocada
  }())
