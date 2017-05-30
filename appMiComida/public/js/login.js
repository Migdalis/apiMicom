$(document).ready(function(){
    $("#entrar").click(function(){ 
        loginUser();
    });
});

function loginUser(){
    var user = $("#email").val();
    var contrasena = $("#password").val(); 


        $.ajax({
        url: "http://localhost:3001/user/login", //
        method:'POST',
        data: {usuario:user, password:contrasena},
        dataSrc:"registros",
        success: function(){
                            console.log('process done');
                        },
                        success: function(data) {
                          //console.log(data.headers.cookie);
                          console.log('process sucess');
                          return true;
                       },

                        error: function(err) {
                          console.log(err.responseJSON.falla);
                          return false;
                        } 
        }); 
    
}