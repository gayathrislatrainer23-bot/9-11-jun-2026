function add (a,b){
    let sum = a+b
    // return sum
    return  new Promise((resolve)=>{
        resolve(sum)
    })
}

function subtraction (num){
     let sub = num-5;
     return  new Promise ((resolve)=> resolve(sub))
     
}

function multiply (num){
    let result = num*2
    return new Promise ((resolve)=>resolve(result))
}
let finalResult 
add (10,20).then((sum)=> subtraction(sum)
            .then((sub)=> multiply(sub))
            .then((result)=>{console.log(result)  }))
            .catch((err)=>console.log(err))                
                             
// finalResult.then((result)=> console.log(result))
// // 50

//  async / await


 console.log('A')

 async function getUser(){
     let res = await fetch('https://jsonplaceholder.typicode.com/users/1')
       console.log(res)
         let user    = await res.json()
         console.log(user)


}
getUser()
console.log('B')

function greet(){
  return new Promise  ((resolve)=>{
    setTimeout(()=>{
let msg = 'Good morning' 
     resolve(msg)
    },2000)
  })

}

async function display (){
      const msg= await  greet()
      console.log(msg)
}
display();
console.log('B')
