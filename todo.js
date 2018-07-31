$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(400, function() {
    $(this).remove();
  })
  event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
  if (event.which === 13 && $(this).val() !== "") {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li>"+todoText+"<span><i class='fa fa-trash'></i> </span></li>");
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").toggleClass("notDisplayed")
})
