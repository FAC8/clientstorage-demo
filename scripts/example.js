/*************************************************************/
/***************** Setting cookies    ************************/
/*************************************************************/

// You can add/alter values in a cookie
document.cookie = 'name=rory';
document.cookie = 'favourite_pony=fluttershy';

console.log('Setting initial values:', document.cookie);

// You can set a key to blank but cannot delete it
document.cookie = 'favourite_pony=';

console.log('Deleting a key:', document.cookie);

// And you can reset a value
document.cookie = 'favourite_pony=rarity';

console.log('Updating with the right values:', document.cookie);

// Matching a value
console.log('Rory\'s favourite pony is:', /favourite_pony=(\w+)/.exec(document.cookie)[1]);


/*************************************************************/
/***************** Setting localStorage    *******************/
/*************************************************************/
console.log('------------------------------------------------------------');

// You can add/alter values via setItem or directly
localStorage.setItem('name', 'matt');
localStorage.setItem('age', 39);
localStorage.favourite_pony = 'fluttershy';

// You can get values via getItem or directly
console.log('Getting a value via getItem:', localStorage.getItem('name'));
console.log('Getting a value directly:', localStorage.favourite_pony);

// You can delete items
localStorage.removeItem('favourite_pony');
console.log('No favourite_pony property now:', localStorage.getItem('favourite_pony'));

// You can check how many items are in localStorage
console.log('Currently storing', localStorage.length, 'items in localStorage');

// And even clear all items
localStorage.clear();
console.log('All keys cleared! There are now', localStorage.length, 'items in localStorage');

// NOTE: sessionStorage works in the same way as localStorage, but data is cleared at the end of a session



/*************************************************************/
/***************** Setting indexedDB    **********************/
/*************************************************************/

// It's complicated and new... so best just to know it exists and explore when you're ready!
