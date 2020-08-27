'use strict' ;

const fib = (x) => {
    if (!x || x <= 1) return 1 ;
    return fib (x - 1) + fib (x-2) ;
} ;

const obj = {
    a : 2 ,
    fib : function (x) {
        return fib (x) + this.a ;
    } ,
} ;

const decorator = function (fnc) {
    const cache = new Map () ;
    return  function (x) {
        if (cache.has (x)) {
            return cache.get (x) ;
        }
        cache.set (x, fnc(x)) ;
        return cache.get(x) ;
    }
}

obj.fib = decorator(obj.fib) ;

console.log (obj.fib(40)) ;
console.log (obj.fib(40)) ;
