// Topic Null vs Undefined

/* undefined -> A variable exist, but not been assigned any value at.
                Javascript itself set as this automatically.

null          -> A variable exist, but developer explicitly assigns "no Value" or "empty"
                 It is intentional absence of any value.
*/

/* Example -> a baby just born later naming ceremony 
                Undefined -> A baby name not yet given 
                Null -> A baby name yet to be given (Parent says)
*/

let userName;
console.log(userName);
console.log(typeof (userName));

let profilepicture = null;
console.log(profilepicture);
console.log(typeof (profilepicture));
