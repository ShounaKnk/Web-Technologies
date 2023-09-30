function arrydisp(A,     B, C)
{
    var comp = []
    comp.push(A);
    comp.push(B);
    comp.push(C);

    for(x in comp)
    {
        console.log(comp[x]);
        console.log(typeof x)   
    }    
}

arrydisp("i5", 16 , "rtx3050");