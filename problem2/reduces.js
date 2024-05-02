function reduces(callback, initial, arr){
 let ans=initial
 for (let i = 0; i < arr.length; i++) {
   ans=callback(ans,arr[i])
    
 }
 return ans
}