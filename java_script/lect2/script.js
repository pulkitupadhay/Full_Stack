function fun1(d){
    let a = 10;
    let b = 20;
    function fun2(e){
        // return a+b;
        let c = 40;
        function fun3(f){
            return a+b+c+d+e+f;
        }
        return fun3;
    }
    return fun2;
}
console.log(fun1(50)(60)(70));
// let returnval = fun1();
// console.log(returnval())