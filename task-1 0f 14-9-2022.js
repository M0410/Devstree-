let array = [
    {
        firstname: 'Jack',
        lastname: 'Miller',
        age: 25,
        gender: 'male'
    },{
        firstname: 'John',
        lastname: 'Jackson',
        age: 28,
        gender: 'male'
    },{
        firstname: 'Jack',
        lastname: 'Evans',
        age: 21,
        gender: 'male'
    },{
        firstname: 'Chris',
        lastname: 'Schulz',
        age: 32,
        gender: 'male'
    }];
array.sort(function(a,b){return a.age - b.age});
console.log(array)