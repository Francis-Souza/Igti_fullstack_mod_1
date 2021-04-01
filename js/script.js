$(function () {
  //Sempre usar Ready - colocar código Jquery dentro do Ready

  $(document).ready(function () {
    //Pegar valor do Elemento RANGE

    let allUsers = [];
    let totalUsuarios = 0;
    let totalSexoFeminino = 0;
    let totalSexoMasculino = 0;
    let calculoMediaIdade = 0;
    let somaIdades = 0;
    let inputTextoBusca = document.querySelector(".form-control");
    let inputBusca = document.querySelector(".btn");
    let usuarios = document.querySelector(".number_usuarios");

    //Desabilitar campos
    $("#number_selected").attr("disabled", "true");
    let dasabilita_input_extenso = document.querySelector("#numero_in_full");
    dasabilita_input_extenso.disabled = true;

    //================Primeira Forma Jquery===================
    // $(document).on("input change", "#number", function () {
    //   var numeroSelecionado = $("#number_selected").val($(this).val());
    //   $("#number_selected").val($(this).val());
    //   converteNumeroPorExtenso(numeroSelecionado.val());
    // });

    //================Segunda Forma===================

    let numero = document.querySelector("#number");
    let numeroSelecionado = document.querySelector("#number_selected");
    numero.addEventListener("input", function () {
      numeroSelecionado.value = this.value;
      converteNumeroPorExtenso(numeroSelecionado.value);
    });

    //================Números por Extenso===================

    //Arrow Functions
    const converteNumeroPorExtenso = (valor) => {
      var n = valor;

      var unidades = [
        "Zero",
        "Um",
        "Dois",
        "Três",
        "Quatro",
        "Cinco",
        "Seis",
        "Sete",
        "Oito",
        "Nove",
      ];
      var especiais = [
        "Dez",
        "Onze",
        "Doze",
        "Treze",
        "Quatorze",
        "Quinze",
        "Dezesseis",
        "Dezessete",
        "Dezoito",
        "Dezenove",
      ];
      var dezenas = [
        "Vinte",
        "Trinta",
        "Quarenta",
        "Cinquenta",
        "Sessenta",
        "Setenta",
        "Oitenta",
        "Noventa",
      ];
      var centenas = [
        "Cem",
        "Duzentos",
        "Trezentos",
        "Quatrocentos",
        "Quinhetos",
        "Seiscentos",
        "Setescentos",
        "Oitocentos",
        "Novecentos",
      ];

      //Valores com 1 algarismo
      if (n.length === 1) {
        //Imprimir unidadades
        valor = unidades[parseInt(n[0])];
      }

      //Valores com 2 algarismos
      else if (n.length === 2) {
        //Especiais
        if (
          n[0] == "1" &&
          (n[1] == "0" ||
            n[1] == "1" ||
            n[1] == "2" ||
            n[1] == "3" ||
            n[1] == "4" ||
            n[1] == "5" ||
            n[1] == "6" ||
            n[1] == "7" ||
            n[1] == "8" ||
            n[1] == "9")
        ) {
          valor = especiais[parseInt(n[1])];
        }

        //Dezenas
        else if (
          (n[0] == "2" ||
            n[0] == "3" ||
            n[0] == "4" ||
            n[0] == "5" ||
            n[0] == "6" ||
            n[0] == "7" ||
            n[0] == "8" ||
            n[0] == "9") &&
          n[1] == "0"
        ) {
          valor = dezenas[parseInt(n[0] - 2)];
        }

        //Dezenas compostas
        else {
          valor =
            dezenas[parseInt(n[0] - 2)] + " e " + unidades[parseInt(n[1])];
        }
      }

      //Valores com 3 algarimos
      else if (n.length === 3) {
        //Centenas inteiras
        if (
          (n[0] == "1" ||
            n[0] == "2" ||
            n[0] == "3" ||
            n[0] == "4" ||
            n[0] == "5" ||
            n[0] == "6" ||
            n[0] == "7" ||
            n[0] == "8" ||
            n[0] == "9") &&
          n[1] == "0" &&
          n[2] == "0"
        ) {
          valor = centenas[parseInt(n[0] - 1)];
        }

        //Centenas + números especiais
        else if (
          (n[0] == "2" ||
            n[0] == "3" ||
            n[0] == "4" ||
            n[0] == "5" ||
            n[0] == "6" ||
            n[0] == "7" ||
            n[0] == "8" ||
            n[0] == "9") &&
          n[1] == "1" &&
          (n[2] == "1" ||
            n[2] == "2" ||
            n[2] == "3" ||
            n[2] == "4" ||
            n[2] == "5" ||
            n[2] == "6" ||
            n[2] == "7" ||
            n[2] == "8" ||
            n[2] == "9")
        ) {
          valor =
            centenas[parseInt(n[0] - 1)] + " e " + especiais[parseInt(n[2])];
        }

        //Centenas + Nº Compostos
        else if (
          (n[0] == "2" ||
            n[0] == "3" ||
            n[0] == "4" ||
            n[0] == "5" ||
            n[0] == "6" ||
            n[0] == "7" ||
            n[0] == "8" ||
            n[0] == "9") &&
          n[1] != "0" &&
          n[2] != "0"
        ) {
          valor =
            centenas[parseInt(n[0] - 1)] +
            " e " +
            dezenas[parseInt(n[1] - 2)] +
            " e " +
            unidades[parseInt(n[2])];
        }

        //Centenas + Nº Especiais - Segunda casa 10
        else if (
          (n[0] == "2" ||
            n[0] == "3" ||
            n[0] == "4" ||
            n[0] == "5" ||
            n[0] == "6" ||
            n[0] == "7" ||
            n[0] == "8" ||
            n[0] == "9") &&
          n[1] == "1" &&
          n[2] == "0"
        ) {
          valor =
            centenas[parseInt(n[0] - 1)] +
            " e " +
            especiais[parseInt(n[1] - 1)];
        }

        //Centenas + Nº Compostos
        else if (
          (n[0] == "2" ||
            n[0] == "3" ||
            n[0] == "4" ||
            n[0] == "5" ||
            n[0] == "6" ||
            n[0] == "7" ||
            n[0] == "8" ||
            n[0] == "9") &&
          n[1] > "1" &&
          n[2] == "0"
        ) {
          valor =
            centenas[parseInt(n[0] - 1)] + " e " + dezenas[parseInt(n[1] - 2)];
        }

        //Centenas + Nº Compostos
        else if (
          (n[0] == "2" ||
            n[0] == "3" ||
            n[0] == "4" ||
            n[0] == "5" ||
            n[0] == "6" ||
            n[0] == "7" ||
            n[0] == "8" ||
            n[0] == "9") &&
          n[1] == "0"
        ) {
          valor =
            centenas[parseInt(n[0] - 1)] + " e " + unidades[parseInt(n[2])];
        }

        //Cento + Nº Especiais
        else if (
          n[0] == "1" &&
          n[1] == "1" &&
          (n[2] == "1" ||
            n[2] == "2" ||
            n[2] == "3" ||
            n[2] == "4" ||
            n[2] == "5" ||
            n[2] == "6" ||
            n[2] == "7" ||
            n[2] == "8" ||
            n[2] == "9")
        ) {
          valor = "Cento e " + especiais[parseInt(n[2])];
        }

        //Cento + Nº Compostos
        else if (n[0] == "1" && n[1] > "1" && n[2] != "0") {
          valor =
            "Cento e " +
            dezenas[parseInt(n[1] - 2)] +
            " e " +
            unidades[parseInt(n[2])];
        }

        //Cento + Nº Compostos
        else if (n[0] == "1" && n[1] == "0" && n[2] != "0") {
          valor = "Cento e " + unidades[parseInt(n[2])];
        }

        //Cento + Nº Compostos
        else if (n[0] == "1" && n[1] == "1" && n[2] == "0") {
          valor = "Cento e " + especiais[parseInt(n[2])];
        }

        //Cento + Nº Compostos
        else if (n[0] == "1" && n[1] > "1" && n[2] == "0") {
          valor = "Cento e " + dezenas[parseInt(n[1] - 2)];
        }
      }
      $("#numero_in_full").val(valor);
    };

    $("#button_trabalho_modulo_1").click(function () {
      trabalhoModulo_1_Visibility();
      $("#button_desafio_1").attr("disabled", "true");
    });

    $("#button_desafio_1").click(function () {
      desafioModulo_1_Visibilty();
      $("#button_trabalho_modulo_1").attr("disabled", "true");
      $(".btn").attr("disabled", "true");

      inputTextoBusca.focus();
    });

    inputTextoBusca.addEventListener("keyup", validaCampos);
    inputTextoBusca.addEventListener("keydown", function (event) {
      if (event.keyCode === 13) {
        event = inputTextoBusca.value.toUpperCase().trim();
        buscaDados(event);
      }
    });

    inputBusca.addEventListener("click", function (e) {
      e = inputTextoBusca.value.toUpperCase().trim();
      buscaDados(e);
      // usuariosEncontrados();
    });

    function validaCampos(e) {
      let campo = e.target.value.toUpperCase().trim();
      if (campo === "") {
        $(".btn").attr("disabled", "true");
        usuarios.value = "";
      } else {
        $(".btn").removeAttr("disabled", "true");
      }
    }

    function buscaDados(e) {
      totalSexoFeminino = 0;
      totalSexoMasculino = 0;
      calculoMediaIdade = 0;
      somaIdades = 0;
      totalUsuarios = 0;

      if (e !== "") {
        $(".btn").removeAttr("disabled", "true");
        doFilter(e);

        document.querySelector(
          ".totalSexoMasculino"
        ).textContent = totalSexoMasculino;

        document.querySelector(
          ".totalSexoFeminino"
        ).textContent = totalSexoFeminino;

        document.querySelector(".somaIdades").textContent = somaIdades;

        document.querySelector(
          ".mediaIdades"
        ).textContent = calculoMediaIdade.toFixed(2);

        usuarios.value = totalUsuarios;
      }
    }

    //Arrow Functions
    const trabalhoModulo_1_Visibility = () => {
      $(".trabalho_modulo_1").css("display", "block");
    };

    const desafioModulo_1_Visibilty = () => {
      $(".container_desafio").css("display", "block");
    };

    fetchUsuarios();

    async function fetchUsuarios() {
      const res = await fetch(
        "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
      );
      const dadosEmjson = await res.json();

      allUsers = dadosEmjson.results.map((users) => {
        const { name, gender, dob, picture } = users;

        return {
          nome: name.first,
          sobreNome: name.last,
          sexo: gender,
          idade: dob.age,
          foto: picture.large,
        };
      });
    }

    function doFilter(nome) {
      const procuraNomes = allUsers.filter((person) => {
        let usuarios = person.nome.concat(" " + person.sobreNome).toUpperCase();
        return usuarios.includes(nome);
      });
      doForEach(procuraNomes);

      let usuariosHTML = "<div>";

      procuraNomes.forEach((serchUsers) => {
        const { nome, sobreNome, idade, foto } = serchUsers;
        let fullName = serchUsers.nome.concat(" " + serchUsers.sobreNome);

        const usuarioHTML = `

            <div class= 'serchUsuarios'>
              <div class= 'imagem' >
                <img src="${foto}" alt="${fullName}">             
                <div class ='fullName'>
                  ${fullName + ", " + idade + " Anos"}
                </div>
              </div>
            </div>
            `;

        usuariosHTML += usuarioHTML;
      });

      document.querySelector(".usuarios_encontrados").innerHTML = usuariosHTML;
    }

    function doForEach(procuraNomes) {
      const calculaValores = procuraNomes;
      calculaValores.forEach((person, i) => {
        if (person.sexo === "female") {
          totalSexoFeminino++;
        }
        if (person.sexo === "male") {
          totalSexoMasculino++;
        }
        if (person.idade) {
          somaIdades = somaIdades + person.idade;
          calculoMediaIdade =
            somaIdades / (totalSexoFeminino + totalSexoMasculino);
        }

        doReduce();

        function doReduce() {
          const totalIdades = procuraNomes.reduce((accumalator, current) => {
            return accumalator + current.idade;
          }, 0);
        }
      });
      totalUsuarios = totalSexoFeminino + totalSexoMasculino;
    }
  });
});
