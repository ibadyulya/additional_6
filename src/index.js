module.exports = function zeros(expression) 
{
    var zerosCount = 0;
    var factr = [];
    var dblFactr = [];
    var power = 0;
    var splt1 = [];
    var splt2 = [];

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
            power--;
        }     
    }
    for(var i = 0; i < dblFactr.length ;i++)
    {
        if(dblFactr[i] % 2)
        {
            zerosCount += Math.ceil(parseInt(dblFactr[i]/5)/2);
            zerosCount += Math.ceil(parseInt(dblFactr[i]/25)/2);
        }
        else
        {  
            zerosCount += ~~(dblFactr[i]/10);
            zerosCount += ~~(dblFactr[i]/50);       
        }
    }

    return zerosCount;
}
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x); //logxY
}
