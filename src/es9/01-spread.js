const user = {username: 'wida', age:25, country: 'CO'}; 
const { username, ...values} = user;
console.log(username);
console.log(values);