import { reactive } from "vue";

export const store = reactive({
    params:{
        // Guardamos los datos de la cuenta o caracteristicas
        total: 0,
        tip: 0, /* Propina */
        people: 0,
        remaining: 0, /* El valor que falta por pagar */
    },

    people:[],
});

export function getGrandTotal(){
    return store.params.total * (store.params.tip/100 + 1);
}

// Me permite hacer la división de cuanto dinero le toca a las personas correspondientes
export function calculate(){
    store.people = [];
    const total = store.params.total;
    const tip = store.params.tip;
    const people = store.params.people;
    const totalPerPerson = getGrandTotal() / people;

    store.params.remaining = getGrandTotal();

    // Generamos los objetos para cada persona que necesite pagar
    for(let i = 0; i < people; i++){
        store.people.push({
            id: crypto.randomUUID(),
            numberOfPerson: i + 1,
            totalPerPerson,
            paid: false,
        });
    } 
    calculateRemaining();
}


function calculateRemaining(){
    const missingToPay = store.people.filter(item => !item.paid);    /* Los que faltan por pagar, me regresa un arreglo deobjetos */ 
    const remaining = missingToPay.reduce((acc, item) => (acc += item.totalPerPerson), 0);
    store.params.remaining = remaining;
}

export function pay(id, paid){
    const person = store.people.find(item => item.id == id);
    if(person){
        person.paid = paid;
        calculateRemaining();
    }
}