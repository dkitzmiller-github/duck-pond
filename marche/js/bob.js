arr = [ 1,2,3];

function changer(arr) {

    console.log('arr:' + typeof arr + 'len: ' + arr.length);

    var x = 1;
    console.log('number: ' + typeof x);

    arr = x;
    console.log('arr: ' + typeof arr + 'len: ' + arr.length);

    var arr2 = [ 5];
    console.log('arr2' + typeof arr2 + 'len: ' + arr2.length);

    arr = arr2;
    console.log('arr changing arr to arr2: ' + arr + 'len: ' + arr.length);
}

console.log(arr);

changer(arr);

console.log(arr);
