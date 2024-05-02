function rateLimiter(limit){
     let amount=0
     function limter() {
        amount++
        if(amount<=limit){
            return true
        }
        else{
            amount=0
            return false
        }
     }
     return limter
}