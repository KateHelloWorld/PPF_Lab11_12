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

console.log(dogs.filter(dog=>dog.temperament.includes('Fainthful')));

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
console.log();