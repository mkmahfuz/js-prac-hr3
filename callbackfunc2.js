function action(fname,lname,age,myFunc){

    var result = myFunc();
    return result;

    // function fullName(){
    //     return fname + lname;
    
    // }
}

function fullName(){
    // return fname + lname;
    return "olle olle";

}

function nameWithAge(){
    return fname + age;

}

console.log(action('khalid','mh',37,fullName));