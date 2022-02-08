function mostrar_color(check)
{       
      if($(check).is(":checked")){
          $('input[name=check]').not(check).prop('checked', false);
      }
     
        $(".circulo").css('background', $(check).val());
        $("#valor").text("El color es " + $(check).val());
}

    