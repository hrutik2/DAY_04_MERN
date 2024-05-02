function map(fun,array) {
   let ans=[]
   for(let i=0;i<array.length;i++){
    ans.push(fun(array[i]))
   }
   return ans
    
}