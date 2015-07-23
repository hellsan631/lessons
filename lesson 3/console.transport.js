var people = 30;
var cars = 40;
var buses = 15;

if ( cars > people ){
    console.log( "We should take the cars." );
}else if ( cars < people ){
    console.log( "We should not take the cars." );
}else{
    console.log( "We can't decide." );
}

if ( buses > cars ){
    console.log( "That's too many buses." );
}else if ( buses < cars ){
    console.log( "Maybe we could take the buses." );
}else{
    console.log( "We still can't decide." );
}

if ( people > buses ){
    console.log( "All right, let's just take the buses." );
}else{
    console.log( "Fine, let's stay home then." );
}
