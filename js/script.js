$(document).ready(function () {
  $("#form1").submit(function (e) {
    e.preventDefault();

    const a = parseInt($("#a").val());
    const b = parseInt($("#b").val());
    const c = parseInt($("#c").val());
    console.log(a)
    console.log(b)
    console.log(c)

    if (a === b && b === c) {
      $(".equi").show()
      $(".iso").hide()
      $(".scal").hide()
      $(".not").hide()
    }
    else if ((a === b || b === c || c == a) && (a + b > c || a + c > b || b + c > a)) {
      $(".iso").show()
      $(".scal").hide()
      $(".not").hide()
      $(".equi").hide()
    }
    else if (a != b && b != c && a != c && (a + b > c || a + c > b || b + c > a)){
      $(".scal").show()
      $(".iso").hide()
      $(".not").hide()
      $(".equi").hide()
    }
    else if(a + b <= c || b + c <= a || c + a <= b){
      $(".not").show()
      $(".iso").hide()
      $(".scal").hide()
      $(".equi").hide()
    }
  });
});
