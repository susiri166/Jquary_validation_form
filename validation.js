
      $(document).ready(function(){  
          var emailpattarn=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          var indexnopattarn=/[^IT][201][9][0-2][0-9][0-9]$/;
          var alpha=/^[A-Za-z]+$/;
            
          
        $("#first").keyup(function(){
          checkfirstname();
        });

        $("#first").keydown(function(){
          checkfirstname();
        });

        $("#first").mouseout(function(){
          checkfirstname();
        });

        $("#last").keyup(function(){
          checklastname();
        });

        $("#last").keydown(function(){
          checklastname();
        });

        $("#last").mouseout(function(){
          checklastname();
        });

     /*   $("#date").keydown(function(){
          checkdate();
        });*/

      /*  $("#date").keypress(function(){
          checkdate();
        });

        $("#date").keyup(function(){
          checkdate();
        });

        $("#date").mouseout(function(){
          checkdate();
        });
        */
       $("#address").keyup(function () { 
          checkaddress();
       });
       $("#address").keydown(function () { 
        checkaddress();
     });
     $("#address").mouseout(function () { 
      checkaddress();
      
       });
       $("#province").keyup(function () { 
         checkprovince();
       });
       $("#province").keydown(function () { 
        checkprovince();
      });
      $("#province").mouseout(function () { 
        checkprovince();
      });

      $("#district").keyup(function (e) { 
        checkdistrict();
      });

      $("#district").keydown(function (e) { 
        checkdistrict();
      });

      $("#district").mouseout(function (e) { 
        checkdistrict();
      });

      $("#city").keyup(function () { 
        checkcity();
      });

      $("#city").keydown(function () { 
        checkcity();
      });

      $("#city").mouseout(function () { 
        checkcity();
      });


        $("input[name=gender]").keyup(function(){
          checkgender();
        });
        $("input[name=gender]").mouseout(function(){
          checkgender();
        });
        $("input[name=gender]").keydown(function(){
          checkgender();
        });
        //email validation start
        $("#email").keyup(function(){
          checkemail();
    
        });
          
        $("#email").keydown(function(){
            checkemail();
      
          });
          $("#email").keypress(function () { 
              checkemail();
          });
          $("#email").mouseout(function () { 
            checkemail();
        });
          //email validation stop

          //phone validation start
          $("#mobile").keyup(function () { 
              checkphoneno();
          });

          $("#mobile").keydown(function () { 
            checkphoneno();
           });
           $("#mobile").keypress(function () { 
            checkphoneno();
           });
           $("#mobile").mouseout(function () { 
            checkphoneno();
           });
        //end moblie validation

        //strat nic validation
        $("#nic").keyup(function () { 
          checknic();
        });
        $("#nic").keydown(function () { 
          checknic();
        });
        $("#nic").keypress(function () { 
          checknic();
        });
        $("#nic").mouseout(function () { 
          checknic();
        });
        //stop nic valdation

        //start file upload valudation
        $("#upfile").keyup(function () { 
          checkfileupload();
        });

        $("#upfile").keydown(function () { 
          checkfileupload();
        });

        $("#upfile").mouseout(function () { 
          checkfileupload();
        });
        //stop file upload

        //start index no validation
        $("#index").keyup(function () { 
          checkindexno();
        });
        $("#index").keydown(function () { 
          checkindexno();
        });
        $("#index").keypress(function () { 
          checkindexno();
        });
        $("#index").mouseout(function () { 
          checkindexno();
        });

        function checkfirstname(){
        
          var fname=$("#first").val();
         
          if(fname.length==""){ 
            $("#first").css("border","2px solid red");
            $("#first").focus();
            $("#firerr").html("firstname be not empty");
            $("#firerr").css("color","red");
            return false;
          }
          else if (fname.match(alpha) && (fname.length>=3)){
            $("#first").css("border","2px solid green");
            $("#firerr").html(" valid firstname ");
            $("#firerr").css("color","green");
            $("#first").focus();
            return true;
          }
          else {
            $("#first").css("border","2px solid red");
            $("#firerr").html("invalid firstname");
            $("#first").focus();
            $("#firerr").css("color","red");
            return false;
          }
        }

        function checklastname(){
          var last=$("#last").val();
          
          if(last.length==""){ 
            $("#last").css("border","2px solid red");
            $("#laerr").html("lastname not be empty");
            $("#last").focus();
            $("#laerr").css("color","red");
            return false;
          }
          else if (last.match(alpha) && (last.length>=3)){
            $("#last").css("border","2px solid green");
            $("#last").focus();
            $("#laerr").html("valid lastname");
            $("#laerr").css("color","green");
            return true;
          }
          else {
            $("#last").css("border","2px solid red");
            $("#last").focus();
            $("#laerr").html("invalid lastname");
            $("#laerr").css("color","red");
            return false;
          }
        }
        function checkdate(){
          var date=$("#date").val();
          alert(date);
          var dob=currentyear-date1;
          if(date.length==""){
            $("#date").css("border","2px solid red");
            $("#daterr").html("please enter your birthday");
            $("#daterr").focus();
            return false;
          }
          else if(dob<=18){
            $("#date").css("border","2px solid green");
            $("#date").focus();
            $("#date").html("you can apply")
            return true;
          }
          else{
            $("#date").css("border","2px solid green");
            $("#date").focus();
            $("#date").html("you can not apply")
            return false;
          }
        }
        
        
        function checkgender(){
          if($('input[name=gender]:checked').length<=0){
            
            $("#generr").focus();
            $("#generr").html("gender can not be empty");
            $("#generr").css("color","red");
           return false;

          }
          else{
            
            $("#generr").focus();
            $("#generr").html("gender added");
            $("#generr").css("color","green");
            return true;
          }

        }
        
         function checkemail(){
           var email=$("#email").val();
           
           if(email==""){
            $("#email").css("border","2px solid red");
            $("#email").focus();
            $("#emailerr").html("email can not be empty");
            $("#emailerr").css("color","red");
            return false;
           }
           else if(email.match(emailpattarn)){
            $("#email").css("border","2px solid green");
            $("#email").focus();
            $("#emailerr").html("valid email");
            $("#emailerr").css("color","green");
            return true;
           }
           else{
            $("#email").css("border","2px solid red");
            $("#email").focus();
            $("#emailerr").html("invalid email");
            $("#emailerr").css("color","red");
            return false;
           }
         }

         function checkphoneno(){
            var mobile=$("#mobile").val();
            var mobilepattarn=/^[0][1-9]{9}$/;
           if(mobile.length==""){
            $("#mobile").css("border","2px solid red");
            $("#mobile").focus();
            $("#mobilerr").html("mobile no can not be empty");
            $("#mobilerr").css("color","red");
            return false;
           }
           else if(mobile.match(mobilepattarn)){
            $("#mobile").css("border","2px solid green");
            $("#mobile").focus();
            $("#mobilerr").html("valid mobile");
            $("#mobilerr").css("color","green");
            return true;
           }
           else{
            $("#mobile").css("border","2px solid red");
            $("#mobile").focus();
            $("#mobilerr").html("invalid mobile");
            $("#mobilerr").css("color","red");
            return false;
           }
         }
          function checknic(){
            var nic=$("#nic").val();
            var nicpaatarn=/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/;
            if(nic.length==""){
              $("#nic").css("border","2px solid red");
              $("#nic").focus();
              $("#nicerr").html("nic can not be empty");
              $("#nicerr").css("color","red");
              return false;
            }
             else if(nic.match(nicpaatarn)){
              $("#nic").css("border","2px solid green");
              $("#nic").focus();
              $("#nicerr").html("Valid nic");
              $("#nicerr").css("color","green");
              return true;
            }
            else{
              $("#nic").css("border","2px solid red");
              $("#nic").focus();
              $("#nicerr").html("invalid nic");
              $("#nicerr").css("color","red");
              return false;
            }

          }
          function checkfileupload(){
            var file=$("#upfile").val();
            var filepatern=/^.*\.(pdf)$/;
            if(file.length==""){
              $("#upfile").focus();
              $("#up").html("please upload your file");
              $("#up").css("color","red");
              return false;
            }
            else if(file.match(filepatern)){
              
              $("#upfile").focus();
              $("#up").html(" valid,file uploaded");
              $("#up").css("color","green");
              return true;
            }
            else{
             
              $("#upfile").focus();
              $("#up").html("invalid upload file type");
              $("#up").css("color","red");
              return false;
            }
          }

          function checkindexno(){
            indexno=$("#index").val();
            
              if(indexno.length==""){
                $("#index").css("border","2px solid red");
                $("#index").focus();
                $("#inerr").html("index no canot be empty");
                $("#inerr").css("color","red");
                return false;
              }
              else if(indexno.match(indexnopattarn)){
                $("#index").css("border","2px solid green");
                $("#index").focus();
                $("#inerr").html("valid index no");
                $("#inerr").css("color","green");
                return true;
              }
              else{
                $("#index").css("border","2px solid red");
                $("#index").focus();
                $("#inerr").html("invalid index no");
                $("#inerr").css("color","red");
                return false;
              }
          }
          function checkaddress(){
            var address=$("#address").val();
            if(address.length==""){
              $("#address").css("border","2px solid red");
              $("#address").focus();
              $("#adderr").html("address can not be empty");
              $("#adderr").css("color","red");
              return false;
            }else{
              $("#address").css("border","2px solid green");
              $("#address").focus();
              $("#adderr").html("address added");
              $("#adderr").css("color","green");
            }
          }
          function checkprovince(){
            var province=$("#province").val();
            if(province=="Choose"){
              $("#province").css("border","2px solid red");
              $("#province").focus();
              $("#proerr").html("province not be empty");
              $("#proerr").css("color","red");
            }
            else{
              $("#province").css("border","2px solid green");
              $("#province").focus();
              $("#proerr").html("province added");
              $("#proerr").css("color","green");
            }
          }
          function checkdistrict(){
            var district=$("#district").val();
            if(district=="Choose"){
              $("#district").css("border","2px solid red");
              $("#district").focus();
              $("#diserr").html("district not be empty");
              $("#diserr").css("color","red");
              return false;
            }
            else{
              $("#district").css("border","2px solid green");
              $("#district").focus();
              $("#diserr").html("district added");
              $("#diserr").css("color","green");
              return true;
            }
          }

          function checkcity(){
            var city=$("#city").val();
            if(city=="Choose"){
              $("#city").css("border","2px solid red");
              $("#city").focus();
              $("#cierr").html("city not be empty");
              $("#cierr").css("color","red");
              return false;
            }
            else{
              $("#city").css("border","2px solid green");
              $("#city").focus();
              $("#cierr").html("city added");
              $("#cierr").css("color","green");
              return true;
            }
          }
          $("form").submit(function(){
            checkfirstname();
            checklastname();
            checkemail();
            checkphoneno();
            checknic();
            checkaddress();
            checkprovince();
            checkdistrict();
            checkcity();
            checkindexno();
          });
        }); 

        
          
          
    
    