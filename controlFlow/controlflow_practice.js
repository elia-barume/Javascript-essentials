/**
 * Suppose an organization arranges a "Dietary Services" program to provide diets to its employees and customers, based on a person's
 *  weight and day-to-day routine. You need to create 
 * an authorization-based code to provide access to
 *  people based on their roles in organization, 
 * such as employees, enrolled members for
 *  "Dietary Services," and subscribers.

If the person is an Employee, they are authorized to have access to "Dietary Services".

If the person is an Enrolled Member, they are authorized to have access to "Dietary Services" and one-on-one interaction with a dietician.

If the person is a Subscriber, they are authorized to have partial access to facilitate "Dietary Services" only.

If the person is a Non-Subscriber, they need to enroll or at least subscribe first to avail this facility.

You need to communicate with the user by printing a message indicating whether that person is eligible to avail which type of services.
 */

//development

let isLoggin = false;
let user_message;
let user_type = "Employee";

if(isLoggin){
    switch (user_type) {
        case "Employee":
            user_message = "authorized to have access to \"Dietary Services\".";

            break;
        case "Enrolled Member":
            user_message = "authorized to have access to \"Dietary Services\" and one-on-one interaction with a dietician.";
            break;
        case "subscriber":
            user_message = "authorized to have partial access to facilitate \"Dietary Services\" only";
            break;
        
        default:
            user_message = "need to enroll or at least subscribe first to avail this facility.";
            break;
    }

}else{
    user_message="you  must login first";
}

console.log("User Role message:", user_message);