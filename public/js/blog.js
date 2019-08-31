$(document).ready(function() {
  var user_ip;
  var qtd = 1;
  var email, nome_input, email_input;

  $.ajax({
    url: "https://api.ipify.org",
    type: "GET",
    success: function(data) {
      user_ip = data;
    }
  });

  //modal de saida de pagina
  setInterval((qtd = 0), 10000);
  $("#header-page").hover(
    function() {
      if (qtd == 0) {
        //$('#modalExemplo').modal('show')

        //webinar
        $("#modal-webinar").modal("show");
      }
      qtd = 1;
    },
    function() {}
  );
  /*
    //modal webinar
    setTimeout(function () {
        $('#modal-webinar').modal('show')
        qtd = 0
    }, 0);
*/
  $("#btn_suspect").click(function() {
    nome_input = $("#nome-cta-home").val();
    email_input = $("#email-cta-home").val();
    if (nome_input != "" && email_input != "") {
      createEmailSuspect(nome_input, email_input);
      $("#modal-cadastro-concluido").modal("show");
    } else {
      alert("Por favor informar Nome e E-mail.");
    }
  });

  $("#btn-modal").click(function() {
    nome_input = $("#nome-modal").val();
    email_input = $("#email-modal").val();
    if (nome_input != "" && email_input != "") {
      createEmailSuspect(nome_input, email_input);
      $("#modalExemplo").modal("hide");
    } else {
      alert("Por favor informar Nome e E-mail.");
    }
  });

  $("#btn-modal-webinar").click(function() {
    nome_input = $("#nome-modal-webinar").val();
    email_input = $("#email-modal-webinar").val();
    if (nome_input != "" && email_input != "") {
      createEmailSuspect(nome_input, email_input);
      $("#modal-webinar").modal("hide");
    } else {
      alert("Por favor informar Nome e E-mail.");
    }
  });

  // ------------------------------------------------------------
  //Abre Modal de cadastro para receber o ebook
  $("#cta-ebook-funil").click(function() {
    $("#modal-cadastro-ebook-funil-vendas").modal("show");
  });

  //Evento de click do modal #cta-ebook-funil
  $("#btn-cadastro-ebook-funil-vendas").click(function() {
    nome_input = $("#nome-modal-ebook-funil-vendas").val();
    email_input = $("#email-modal-ebook-funil-vendas").val();
    if (nome_input != "" && email_input != "") {
      //Salva dados no firebase
      createEmailSuspect(nome_input, email_input);
      //Fecha modal de cadastro
      $("#modal-cadastro-ebook-funil-vendas").modal("hide");
      //Abre modal de download
      $("#modal-download-ebook-funil-vendas").modal("show");
    } else {
      alert("Por favor informar Nome e E-mail.");
    }
  });
  // ------------------------------------------------------------

  // ------------------------------------------------------------
  //Abre Modal de cadastro para receber o infografico
  $("#cta-infografico-5-metricas").click(function() {
    $("#modal-cadastro-infografico-5-metricas").modal("show");
  });

  //Evento de click do modal #cta-infografico-5-metricas
  $("#btn-cadastro-infografico-5-metricas").click(function() {
    nome_input = $("#nome-modal-infografico-5-metricas").val();
    email_input = $("#email-modal-infografico-5-metricas").val();
    if (nome_input != "" && email_input != "") {
      //Salva dados no firebase
      createEmailSuspect(nome_input, email_input);
      //Fecha modal de cadastro
      $("#modal-cadastro-infografico-5-metricas").modal("hide");
      //Abre modal de download
      $("#modal-download-infografico-5-metricas").modal("show");
    } else {
      alert("Por favor informar Nome e E-mail.");
    }
  });

  //Abre Modal de cadastro para receber o infografico
  $("#cta-ebook-follow-up").click(function() {
    $("#modal-cadastro-ebook-follow-up").modal("show");
  });
  //Evento de click do modal #cta-ebook-follow up
  $("#btn-cadastro-ebook-follow-up").click(function() {
    nome_input = $("#nome-modal-ebook-follow-up").val();
    email_input = $("#email-modal-ebook-follow-up").val();
    if (nome_input != "" && email_input != "") {
      //Salva dados no firebase
      createEmailSuspect(nome_input, email_input);
      //Fecha modal de cadastro
      $("#modal-cadastro-ebook-follow-up").modal("hide");
      //Abre modal de download
      $("#modal-download-E-book-follow-up").modal("show");
    } else {
      alert("Por favor informar Nome e E-mail.");
    }
  });

  //paginacao
  $("#btn-pagina-1").click(function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    $(".pg1").show();
    $(".pg2").hide();

    $("#btn-pagina-1").addClass("disabled");
    $("#btn-pagina-2").removeClass("disabled");
  });
  $("#btn-pagina-2").click(function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    $(".pg1").hide();
    $(".pg2").show();

    $("#btn-pagina-1").removeClass("disabled");
    $("#btn-pagina-2").addClass("disabled");
  });
  // ------------------------------------------------------------

  function createEmailSuspect(nome, email) {
    var timestamp = new Date().getTime();
    var data = {
      email: email,
      nome: nome,
      ip: user_ip,
      tipo: "",
      date: DateBRT()
    };

    firebase
      .database()
      .ref("lead")
      .child(timestamp)
      .set(data);
  }

  function DateBRT() {
    var date = new Date();
    var aaaa = date.getFullYear();
    var gg = date.getDate();
    var mm = date.getMonth() + 1;

    if (gg < 10) gg = "0" + gg;
    if (mm < 10) mm = "0" + mm;
    var cur_day = aaaa + "-" + mm + "-" + gg;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return cur_day + " " + hours + ":" + minutes + ":" + seconds;
  }
});
