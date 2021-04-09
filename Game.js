
        const bet = document.querySelector(".bet input");
        const btn = document.querySelector(".submit button");
        const car1 = document.querySelector(".car1");
        const car2 = document.querySelector(".car2");
        let money = 500;
        const yourMoney = document.querySelector(".yourMoney");
        yourMoney.innerHTML = `Your money:${money}$`;
        let betValue = 0;
        let result1;
        let result2;
        let carPosition1 = 0;
        let carPosition2 = 0;

        bet.addEventListener("change", ()=>{
            let x = parseInt(bet.value);
            bet.value = "";
             betValue = x;
        });

    const choseDriver = ()=>{
        car1.addEventListener("click",()=>{
            car1.classList.toggle("active");
        })
        car2.addEventListener("click",()=>{
            car2.classList.toggle("active");
        })
    }

    const checking =()=>{
            if(car1.classList.contains("active")){
                 alert(`You choose car1`);
                return true;
            }else if(car2.classList.contains("active")){
                 alert(`You choose car2`);
                return true;
            }
        
    }

    const checkMoney=()=>{
        if(betValue> 100 && betValue <= money){
            document.querySelector(".yourMoney").innerHTML = `Your money:${money - betValue}$`;
            document.querySelector(".currentBet").innerHTML += `${betValue}$`;
            return true;
        } else if(betValue < 100){
            alert("Bet more money please");
            return false;
        }else if(betValue > money){
            alert("There's not enough money bro :b");
            return false;
        }

    }

    const drive=()=>{
        carPosition1 = Math.floor(Math.random()*(250-210)+210);;
        carPosition2 = Math.floor(Math.random()*(250-210)+210);;
        result1 = carPosition1;
        result2 = carPosition2;
    }
    

    const displayWinner = ()=>{
    const winning=()=>{
         if(car1.classList.contains("active") && result1>result2){
             
                return true;
            } else if(car2.classList.contains("active") && result1<result2){
                return true;
            }else{
                return false;
            }
    } 
    let win = winning(); 

    const statistics = ()=>{
    if(win){ 
    document.querySelector(".Winner").innerHTML ="Result: You won!";
        document.querySelector(".currentBet").innerHTML = "CurrentBet:";
        yourMoney.innerHTML = `Your money:${money+=betValue}$`;
    }else{
    document.querySelector(".Winner").innerHTML ="Result: You lost!";
        document.querySelector(".currentBet").innerHTML = "CurrentBet:";
        yourMoney.innerHTML = `Your money:${money-=betValue}$`;
    }
    }
    statistics();
}

    const run = ()=>{
        // alert("Let's play the game, choose driver and set your bet");
        choseDriver();
        btn.addEventListener("click", () => {
            let check = checking();
            if(check){
            let moneyCheck = checkMoney();
            if(moneyCheck){
            drive();
            setTimeout(displayWinner, 2000);
                car1.animate({
                    left: `${carPosition1}%`,
                    easing: "ease-in"
                },5000);
                car2.animate({
                    left: `${carPosition2}%`,
                    easing: "ease-in"
                },5000);
            }
        }
            else{
                alert("Choose a driver please");
            }
     });
    }
run();

