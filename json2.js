myObj = {
    "name":"John",
    "age":30,
    "cars": [
      { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
      { "name":"BMW", "models":[ "320", "X3", "X5" ] },
      { "name":"Fiat", "models":[ "500", "Panda" ] }
    ]
   }

   console.log(myObj.cars[0].name); // it will return Ford
   console.log(myObj.cars[0].models[0]); // it will return Fiesta
   

   //using for in loop

   for (const key in myObj.cars) {       
           const element = myObj.cars[key].name;
           console.log(`Make ${element}`);
           for(mod in myObj.cars[key].models){
               const model = myObj.cars[key].models[mod];
               console.log(`Model ${model}`);
           }
           
   }