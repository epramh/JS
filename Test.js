    console.log("My First JavaScript");
    
    const age=16;
    console.log(age > 18 ? "Majeur" : "Mineur");
    
    console.log("0 à 10 :");
    for(let a=0; a<=10; a++) 
      {
        console.log(a);
      }
    console.log("\n\n");

    console.log("10 à 0 :");
    for(let b=10; b>0; b--)
      {
        console.log(b);
      }
    console.log("\n\n");

    console.log("0 à 10 et < 5 :");
    for(let c=0; c<=10; c++) 
      {
      if(c<5)
        {
        console.log(c);
        }   
      }
    console.log("\n\n");

    console.log("0 à 12 impair :");
    for(let d=2; d<12; d=d+2)
      {
        console.log(d);
      }
    console.log("\n\n");

    console.log("factorielle de 5:");
    let nbr = 5;
    let fact=nbr;
    for(let e=1; e<nbr;e++)
      {
      console.log(fact*=e);
      }

