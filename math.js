
let a=new Date()
console.log(a.getFullYear())
console.log(a.getMonth())
console.log(a.getDate())
console.log(a.getDay())
console.log(a.getHours())
console.log(a.getMinutes())
console.log(a.getSeconds())
console.log(a.getMilliseconds())

function alaramRing(){
    let prsntTime=new Date()
    let alarmTime=new Date()
    alarmTime.setFullYear(2024)
    alarmTime.setDate(31)
    alarmTime.setMonth(11)
    alarmTime.setHours(12)
    alarmTime.setMinutes(0 )
    alarmTime.setSeconds(0)
    let timeDiff=alarmTime-prsntTime;
    console.log(timeDiff)
    setTimeout(()=>{
     alert("happy new year 2025")
    },timeDiff)
    console.log("happy new year 2025");
}
alaramRing()

let z=6.6;
console.log(Math.round(z));
let b=6.3
console.log(Math.round(b))
let c=12.88
console.log(Math.ceil(c))
console.log(Math.floor(c))
let d=4
console.log(Math.pow(d,4))
console.log(Math.max(1,2,3,5,6))
let M=10
console.log(Math.floor(Math.random()*10))