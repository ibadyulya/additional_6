module.exports = function zeros(expression) 
{
    var zerosCount = 0;
    var factr = [];
    var dblFactr = [];
    var power = 0;
    var splt1 = [];
    var splt2 = [];
    var c1 = 0;
    var c2 = 0;
    splt1 = expression.split('*');
    for(var i = 0; i < splt1.length; i++)
    {
        splt2 = splt1[i].split('!');
        (splt2.length == 2) ? factr.push(splt2[0]) :  dblFactr.push(splt2[0]);  
    }
    for(var i = 0; i < factr.length ;i++)
    {
        power = ~~getBaseLog(5, factr[i]);
        while (power > 0) 
        {
            zerosCount += ~~(factr[i]/Math.pow(5,power));
            c1 += zerosCount;
            power--;
        }     
    }
    for(var i = 0; i < dblFactr.length ;i++)
    {
        if(dblFactr[i] % 2)
        {
            power = ~~getBaseLog(5, dblFactr[i]);
            while (power > 0) 
            {
                zerosCount += Math.ceil(parseInt(dblFactr[i]/Math.pow(5,power))/2);
                power--;
            }    
        }
        else
        {  
            zerosCount += ~~(dblFactr[i]/10);
            zerosCount += ~~(dblFactr[i]/50);   
            c2 += zerosCount;    
        }
    }
    if (!(c1 + c2)) return 0;
    return zerosCount;
}
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x); //logxY
}
