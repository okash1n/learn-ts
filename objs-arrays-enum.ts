// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // Tuple
// } = {
//     name: 'yota',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],
// };

enum Role {
    ADMIN = 5,
    READ_ONLY = 100,
    AUTHOR = 200,
} // Enum
const person ={
    name: 'yota',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
    console.log('is admin');
}

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);


for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}