
import { differenceInSeconds, interval } from "date-fns";
import inquirer from "inquirer"

const res = await inquirer.prompt({
    type:"number",
    name:"userInput",
    message:"please enter the amount of second",
    validate: (input)=>{
        if (isNaN(input)){
            return"please enter vaild number"
        }else if (input >60){
            return"Second must be in 60";
        }else{
          return true  
        }   
    }
    
});


let input = res.userInput
function startTime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds()+ val)
    const intervalTime= new Date(intTime )
    setInterval(()=>{
       const currentTime =new Date()
       const timediff = differenceInSeconds(intervalTime,currentTime)
       if (timediff<=0){
          console.log("Timer has expired");
          process.exit()
       }
       const min = Math.floor((timediff%(3600*24))/3600)
       const  sec = Math.floor(timediff%60);
       console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`)
    },1000)
}



startTime(input)

