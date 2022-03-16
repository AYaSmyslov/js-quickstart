#!/usr/bin/node

// Задача на обход дерева по стеку

const src = {
    a: 'a string',
    b: 'b string',
    c: {
        ca: {
            caa: 'caa string',
            cab: {
                caba: 'caba string',
                cabb: 'cabb string'
            }
        },
        cb: {
            cba: 'caa string',
            cbb: {
                cbba: 'caba string',
                cbbb: 'cabb string'
            }
        }
    },
};

/*Надо вывести в консоль полные пути до листов дерева (обход дерева без рекурсий, по стеку и по очереди). В нашем случае должны быть выведены следующие строки (не обязательно в таком порядке):
a
b
c/ca/caa
c/ca/cab/caba
c/ca/cab/cabb
c/cb/cba
c/cb/cbb/cbba
c/cb/cbb/cbbb
*/

/*
Как получить дочерние элементы у элемента:
for (const i in object){
    let child = object[i];
}

Как проверить, что перед нами не лист (конечный элемент в дереве), узел (который имеет дочерние элементы):
if (typeof object === 'object'){
    if (object instanceof Array){
        // это список. Можем обойти циклом "of".
    }
    else{
        // это просто объект. Можем обойти по ключам (цикл "in")
    }
}
else {
    // это лист
    if (typeof object === 'string'){
        // ...
    }
    else if (typeof object === 'number'){
        // ...
    }
}

Работа со стеком (список в качестве стека):
let stack = [];
stack.push(5);
let someItem = stack.pop();

Работа с очередью (список в качестве очереди):
let queue = [];
queue.push(5);
let someItem = queue.shift();
*/
