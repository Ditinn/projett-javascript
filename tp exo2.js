 var verbe = prompt("bonjour entrez un verbe svp");
 document.write("je"+"");
 for( var m=1; m<=6; m++)
    {
        for ( var i=0;i<=verbe.length-3 ;i++)
            {
                var radical=verbe[i];
                 document.write(radical);
            }
            switch (m)
            {
                  case 1: document.write("e"+"<br>"+"Tu"+" <br>" +" ") ;break ;
                  case 2: document.write("es"+"<br>"+"Il"+" ");break ;
                  case 3: document.write("e"+"<br>"+"Nous"+" ");break ;
                  case 4: document.write("ons"+"<br>"+"Vous"+" ");break ;
                  case 5: document.write("ez"+"<br>"+"Ils/Elles"+" ");break ;
                  case 6: document.write("ent"+"<br>"+""+" ");break ;
                  default:("Entrez un verbe regulier");
                 
                  
            }
    }
    
