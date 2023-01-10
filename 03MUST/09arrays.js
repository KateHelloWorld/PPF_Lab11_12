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
        name: 'Bernese Mountai Dog',
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

console.log(dogs.some(dog =>temperament.includes('Trusting')));

console.log(dogs.every(dog=>dog.temprerament.includes('Trusting')));

console.log(dogs.every(dog=>dog.temperament.includes('Intelligent')));

console.log(dogs.map(dog=>dog.name));

console.log(dogs.filter(god=>dog.temperament.includes('Fainthful')));

console.log(dogs.reduce((allTemperaments, dog)=>{
    return [...allTemperaments, ...dog.temperament]
}))

//zadanie