/*var n1 = parseInt (prompt ("veillez saisir un nombre svp"));
 //document.write(typeof (n1)); 
//document.write("<br/>")
var n2 = parseInt(prompt ("veillez saisir le 2e nombre"));
//document.write (typeof (n2));
//document.write("<br/>")
var s;
s = n1 + n2 ;
document.write(s);*/
/*var n1 = parseInt(prompt(" bonjour veillez entrer un nombre"));
var p;
p= n1 * n1;
document.write(" le carré du nombre que vous avez saissi est "+p);*/
/*var n1 = parseInt (prompt("veillez entrez une valeur "));
var n2= parseInt (prompt(" veillez entrez une autre valeur "));
var s;
s = n1 + n2;
document.write(" la somme =" +s);
document.write("<br/>")
var S;
S = n1 - n2 ;
document.write(" la soustraction =" +S);
document.write("<br/>");
var d;
d= n1/n2;
document.write(" la division =" +d);
document.write("<br/>");
var p;
p = n1 * n2;
document.write(" la multiplication =" + p);
document.write("<br/>");
var m;
m = n1 % n2 ;
document.write(" le modulo =" + m);
document.write("<br/>");
var c;
c= n1*n1*n1;
document.write(" le cube="+ c);*/
/*var n1 = parseInt(prompt("entrez une valeur "));
if ( n1 % 2 == 0){
    document.write(" le nombre " + n1 +" est paire");
}
else{
    document.write(" le nombre " + n1 + " est impaire");
}*/
/*var a = parseInt(prompt(" veillez entrez un nombre "));
if ( a== 1){
    document.write(" bonjour c'est le mois de Janvier");
}
else if (a == 2){
    document.write(" bonjour c'est le mois de Fevrier");
}
else if (a == 3){
    document.write(" bonjour c'est le mois de Mars");
}
else if (a == 4){
    document.write(" bonjour c'est le mois d'Avril");
}
else if (a == 5){
    document.write(" bonjour c'est le mois de Mai");
}
else if (a == 6){
    document.write(" bonjour c'est le mois de juin");
}
else if (a == 7){
    document.write(" bonjour c'est le mois de Juillet");
}
else if (a == 8){
    document.write(" bonjour c'est le mois d'Aout");
}
else if (a == 9){
    document.write(" bonjour c'est le mois de Septembre");
}
else if (a == 10){
    document.write(" bonjour c'est le mois d'Octobre");
}
else if (a == 11){
    document.write(" bonjour c'est le mois de Novembre");
}
else if (a == 12){
    document.write(" bonjour c'est le mois Decembre");
}
else{
    document.write(" bonjour, desolé veillez saisir un nombre compris entre 1 et 12");
}*/
/*var n1 = parseInt (prompt(" entrez un nombre"));
(n1 % 2 == 0)? document.write(" le nombre " + n1+" est paire"):document.write("le nombre"+n1+"est impaire");*/
/*var a = parseInt (prompt("entrez unz valeur "));
switch (a){
    case 1 : document.write (" lundi "); break;
    case 2 : document.write (" mardi "); break;
    case 3 : document.write (" mercredi "); break;
    case 4 : document.write (" jeudi"); break;
    case 5 : document.write (" vendredi"); break;
    case 6 : document.write (" samedi "); break;
    case 7 : document.write (" dimanche "); break;
    default: document.write (" desolé, le nombre saisi est invalide");
    
}*/
/*var a = parseInt (prompt("entrez unz valeur "));
switch (a){
    case 1 : document.write (" Janvier "); break;
    case 2 : document.write (" Fevrier "); break;
    case 3 : document.write (" Mars "); break;
    case 4 : document.write (" Avril"); break;
    case 5 : document.write (" Mai"); break;
    case 6 : document.write (" Juin "); break;
    case 7 : document.write (" Juillet "); break;
    case 8 : document.write (" Aout "); break;
    case 9 : document.write (" Septembre "); break;
    case 10 : document.write (" Octobre "); break;
    case 11 : document.write (" Novembre "); break;
    case 12 : document.write (" Decembre "); break;
    default: document.write (" desolé,veillez saissir un nombre compris entre 1 et 12");
    
}*/
/*var a=parseInt(prompt("saisir le nombre"));
document.write(typeof(a));
var b=parseInt(prompt("entrez un autre nombre"));
document.write(typeof(b));
var s=a+b;
document.write(" la somme est :" +s);
var k=confirm(" bienvenue")*/
/*var t=parseInt(prompt(" bonjour veillez entrez le nombre à multiplier"));
for( var i=1 ; i<=10; i++)
    {
      if(i%2==0)
      {
          document.write(t+"x"+i+"="+t+"x"+2+"<br>");
      }
      else if(i%2!=0)
      {
        document.write(t+"x"+i+"="+t+"x"+3+"<br>");
      }
      else 
      {
        document.write("zero")
      }
      
   
    }*/
    /* var a= parseInt(prompt("bonjour veillez entrer un nombre"));
     var i =a-1;
     while(i>0)
        {
            a=a*i;
           
            i--;

        }
        document.write(a);*/
      
     /*var a = parseInt(prompt("enter un nombre"));
      var b = parseInt(prompt("enter un nombre"));
        if(a<b){ document.write(" le minimum ="+a);}
         else{document.write("le min="+b);}*/
         /*var a = parseInt(prompt("enter un nombre"));
         var b = parseInt(prompt("enter un nombre"));
         var c = parseInt(prompt("enter un nombre"));
           if(a<b){ document.write(" le minimum ="+a);}
            else if(c>a){document.write("le min="+a);}
            else if(a>b){document.write("le minimum ="+b);}
            else if (c>b){document.write("le minimum="+b);}
            else if (a>c){document.write("le minimum ="+c);}
            else if (b>c){document.write("le minimum ="+c);}
            else{document.write(0);}*/
         /*var t=parseInt(prompt(" bonjour combien de nombre voulez vous saisir"));
          var i ;
          var som=0,moy=0;

           for(i=1; i<=t; i++)
            {
                var s=parseInt(prompt("entrez les valeurs"+i));
                   som=som + s;
            }
            moy= (som/t);

            
         document.write("la moyenne ="+moy +"<br>");
         document.write("la somme ="+som);*/
         /*function etats ()
         {
            document.write("indiana <br>");
            document.write("Arizona <br>");
            document.write("Ohio <br>");
            document.write("nouveau Mexique <br>");
            document.write("Missouri <br>");
         }
         etats ();
         etats ();
         etats ();*/
         /*function somme ( a ,b)
         {
            document.write(" la somme = "+(a+b)+"<br>");
         }
         somme (10 , 5);
         somme (20 , 5);
         somme (14 , 25);
         somme (150 , 15);*/
         /*var a = parseInt(prompt(" bonjour entrez le premier nombre"));
         var b = parseInt(prompt(" bonjour entrez le premier nombre"));
         var c = parseInt(prompt(" bonjour entrez le premier nombre"));
         function produit ( a ,b, c)
         {
            document.write(" la multiplication = "+(a*b*c)+"<br>");
         }
            produit(a,b,c);*/
            
            /*var a = parseInt(prompt(" bonjour entrez le premier nombre"));
            function calculecarré ( b)
            {
               document.write("le carré de "+a  +"="+(b*b)) ;
            }
               calculecarré(a);*/
              var a= parseInt(prompt("bonjour entrez un nombre "));
               function estPair (a)
               {
                if(a%2==0){
                    document.write("true");

                }
                else{ document.write("false");}
               }
               estPair (a);



