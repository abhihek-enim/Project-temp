const CalculateTemp= ()=>{
    const numberTemp= document.getElementById('temp').value;
    const tempType= document.getElementById('temp-diff').value;
    const result= document.getElementById('result-container');

    const celtoFah=(cel)=>{
        let fahr= Math.round((cel* 9/5)+32);
        return fahr;
    }
    const fabtoCel=(fehr)=>{
        let celi=Math.round((fehr-32)* 5/9);
        return celi;
    }

    if(tempType=='cel'){
        tempvalue= celtoFah(numberTemp);
        result.innerHTML=`${tempvalue}*Fahrenheit`;
    }
    else{
        tempvalue= fabtoCel(numberTemp);
        result.innerHTML=`${tempvalue}*Celsius`;
    }
    
    
    
}