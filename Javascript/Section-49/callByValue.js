// stack - to store primitive values
// heap  - to store array, object, function

/*  Call By Value

    Stack (Before Modification):

    | Address | Variable | Value |
    |---------|----------|-------|
    | 0x100   |    x     |   10  |
    | 0x104   |    y     |  x = 10  |

    Stack (After Modification):

    | Address | Variable | Value |
    |---------|----------|-------|
    | 0x100   |    x     |   10  |
    | 0x104   |    y     |   20  |
    
*/

let x = 10;

let y = x;

// x = 20;
y=20;

console.log( x , y );

