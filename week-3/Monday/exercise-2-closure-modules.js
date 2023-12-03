function Bank(){
    let _money = 500
    function deposit(num){
         _money = _money + num
        return _money;
    }
    function showBalance(){
        console.log(_money)
    }

    return{
        deposit: deposit,
        showBalance: showBalance
    }
}


const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950