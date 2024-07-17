var a=prompt(" bonjour, entrez un mot svp");
palyndrome(lettre);
function palyndrome (mot)
{
    var a=[];
    var tab=[];
    var bool=true;
      for( var n=mot.length;n>0;n--)
        {
            tab[mot.length-n-1]=mot[n];
        }
        for( var i=0; i<mot.length;i++)
            {
                word[i]=mot[i];
            }
            /*document.write(a);
            document.write(tab);*/
            for(var i=0;i<mot.length;i++)
                {
                    if(word[i]!=tab[i])
                        {
                            bool=false;
                        }

                }
                if(bool==true)
                    {
                        document.write(" ce mot est palyndrome"); 
                    }
                else{ document.write(" le mot n'est palyndrome");}
                return bool;
}