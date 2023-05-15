const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');

const randomDice = () =>{
    
    const random = Math.floor(Math.random() * 10);

    if(random >= 1 && random <= 6){
        rollDice(random);
    } else {
        randomDice();
    }
}

const rollDice = random =>{

    dice.style.animation = 'rolling 4s';

    setTimeout(() => {

        switch(random) {
            case 1: 
                dice.style.transform = 'rotateX(8deg) rotate(8deg)';
            break;

            case 6: 
                dice.style.transform = 'rotateX(180deg) rotate(0deg)';
                break;

            case 2: 
                dice.style.transform = 'rotateX(-90deg) rotate(0deg)';
                break;

            case 5: 
                dice.style.transform = 'rotateX(90deg) rotate(0deg)';
                break;

            case 3: 
                dice.style.transform = 'rotateX(0deg) rotate(90deg)';
                break;

            case 4: 
                dice.style.transform = 'rotateX(0deg) rotate(-90deg)';
                break;

            default: 
                break;
        }

        dice.style.animation = 'none';

    }, 4050);

}

rollBtn.addEventListener('click', randomDice);