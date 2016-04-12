function shuffle(ary){
    for(var j, x, i = ary.length; i; j = Math.floor(Math.random() * i), x = ary[--i], ary[i] = ary[j], ary[j] = x);
    return ary;
};