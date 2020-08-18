//Reachability
/*
in JS memory management, reachable values are those that are accessible 
or usable somehow. They are guaranteed to be stored in memory

Below values can NOT be deleted:
- local variables and parameters of the current function
- variables and parameters for other functions on the current chain of nested calls
- global variables
these values are called roots

Any other values is considered reachable if its rechable from a root by a reference
or by a chain of references
*/
let user = {
    name: "Ryan"
};
//the user is a global variable references the object {name: "Ryan"}
user = null;
//now the value of user is overwritten, thus the reference is lost
//now {name: "Ryan"} becomes unreachable. There is no way to access it,
//no references to it. Garbage collector will junk the data and free the memory

user = {
    name: "Ryan"
};
let admin = user;
//now we have two references to {name: "Ryan"}
//if we do the same:
user = null;
//then the object is still reachable via admin global variable

//A complex example
function marry(man, woman){
    woman.husband = man;
    man.wife = woman;
    return {
        father: man,
        mother: woman
    }
}

let family = marry(
    {name: "Jhon"},
    {name: "Ann"}
);
//Now, all objects are reachable
delete family.father;
delete family.mother.husband;
//the {name: "Jhon"} is still reachable and in memory 
//because {name: "Jhon"}.wife is still linked to {name: "Ann"}
//if we delete both then  {name: "Jhon"} would be unreachable 
//and will be removed from memory with all its data

//if we change family to null
family = null;
//{name: "Jhon"} and {name: "Ann"} are no longer reachable 
//although they are still link with each other
//because family object has been unlinked from the root
