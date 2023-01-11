const dogs = [
    {
        id: 'dog-1',
        name: "Poodle",
        temperament: [
            'Intelligent',
            'Active',
            'Alert',
            'Faithful',
            'Trainable',
            'Instinctual',
        ],
    },
    {
        id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperament: [
            'Affectionate',
            'Intelligent',
            'Loyal',
            'Faithful' 
        ],
    },
    {
      id: 'dog-3',
      name: 'Labrador Retriever',
      temperament:[
        'Intelligent',
        'Event Tempered',
        'Kind',
        'Agile',
        'Outgoing',
        'Trusting',
        'Gentle',
      ],  
    },
]

console.log(dogs.find(dog => dog.name === 'Bernese Mountain Dog'));

console.log(dogs.some(dog => dog.temperament.includes('Aggressive')));

console.log(dogs.some(dog =>dog.temperament.includes('Trusting')));

console.log(dogs.every(dog=>dog.temperament.includes('Trusting')));

console.log(dogs.every(dog=>dog.temperament.includes('Intelligent')));

console.log(dogs.map(dog=>dog.name));

console.log(dogs.filter(dog=>dog.temperament.includes('Faithful')));

console.log(dogs.reduce((allTemperaments, dog)=>{
    return [...allTemperaments, ...dog.temperament]
},[]));

//zadanie 4.9.1

const courseData ={
    name: "Projektowanie i programowanie front-end",
    shortcut: 'PPFront',
    year: '2',
    start: '2020',
    end: '2024',
    content:{
        types:{
            lectures: true,
            laboratories: true,
            profects: true
        },
        hours:{
            lectures: 15,
            laboratories: 15,
            profects: 15
        }
    }
}
console.log("courseData.start:",courseData.start);
console.log("courseData.end:",courseData.end);

//zadanie 4.12.1
const moreDogs = [
{
    id: 'dog-4',
    name: "Bulldog",
    temperament: [
        'Active',
        'Alert',
        'Faithful',
        'Agressive',
        'Intelligent',
        'Faithful'
    ],
},
{
    id: 'dog-5',
    name: 'Dog',
    temperament: [
        'Kind',
        'Friendly',
        'Intelligent',
        'Loyal',
        'Faithful' 
    ],
},
]

//zadanie 4.12.2
//console.log(dogs.concat(moreDogs));
console.log("1. Dog's names:",(dogs.concat(moreDogs)).map(dog=>dog.name));
console.log("2. Agressive dogs:",(dogs.concat(moreDogs)).filter(dog=>dog.temperament.includes('Agressive')));
