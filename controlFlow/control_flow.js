let user_role = "admin";
let access_level;
let isLoggedIn = "true";
let userMessage;
let userCategory;
let userType ="subscriber";

if (user_role ==="admin") {
    access_level = "Full access granted";
} else if(user_role ==="manager") {
  access_level = "limited access granted";  
}
else{
    access_level = "No access granted";
}
//nested if statement

if(isLoggedIn){
    if(user_role=== "admin"){
        userMessage="welcome, admin";
    }
    else{
        userMessage = "welcome, User";
    }

}
else{
    userMessage = "please log in to access the system";
}

//switch statements 

switch (userType) {
    case "admin":
        userCategory="administrator";
        break;
    case "manager":
        userCategory ="manager";
        break;
    case "subscriber":
        userCategory ="subscriber";
        break;

    default:
        userCategory="Unknown user";
        break;
}


console.log("Access Level:", access_level);
console.log("User Message:", userMessage);
console.log("User category:", userCategory);