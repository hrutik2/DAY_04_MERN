function counters(){
    let count=0
    function counter(){
        count++
        return count
    }
    return counter
}