$(document).ready(function () {
  $("#form1").submit(function (e) {
    e.preventDefault();

    const a = parseInt($("#a").val());
    const b = parseInt($("#b").val());
    const c = parseInt($("#c").val());


    if (
      (a + b <= c || b + c <= a || c + a <= b) ||
      (a <= 0 || b <= 0 || c <= 0)
      ) {
      $(".not").show()
      $(".iso").hide()
      $(".scal").hide()
      $(".equi").hide()
      $("#form1").hide()
      $(".up").hide()
    }
    else if (
      (a === b && b === c) 
      ) {
      $(".equi").show()
      $(".iso").hide()
      $(".scal").hide()
      $(".not").hide()
      $("#form1").hide()
      $(".up").hide()

    }
    else if (
      ((a === b) && (a + b > c)) ||
      ((b === c) && (b + c > a)) ||
      ((c === a) && (c + a > b)) 

    ) {
      $(".iso").show()
      $(".scal").hide()
      $(".not").hide()
      $(".equi").hide()
      $("#form1").hide()
      $(".up").hide()

    }
    else if (
      (a != b && b != c && a != c) &&
      (a + b > c || a + c > b || b + c > a) 
      ) {
      $(".scal").show()
      $(".iso").hide()
      $(".not").hide()
      $(".equi").hide()
      $("#form1").hide()
      $(".up").hide()

    }
  });
});
