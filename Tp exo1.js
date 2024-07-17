var t=parseInt(prompt(" bonjour veillez entrez la taille du tableau"));
var tab=[t];
 
    for( var i=0 ; i<=t;i++)
    {
        tab[i]=parseInt(prompt(" entrez les valeurs du tableau entre 10 et 50 "));

        while(tab[i]<10 || tab[i>50]){ tab[i]=parseInt(prompt(" entrez un nombre valide"))}        
            
            
       
    }
    var max=0;
    var min=99999;
   for(var i =0 ;i<=t;i++)
    {
        if (tab[i]>max){ max = tab[i];}
       if (tab[i]<min){ min=tab[i];}
    }
    document.write(" le minimum=" +min + "<br> le maximum ="+max);