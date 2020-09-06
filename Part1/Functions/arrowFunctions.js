//Arrow functions have no 'this'
//if this is accesse it is taken from the outside
let group = {
    prof: "Jhon",
    students: ["Mary", "Ann", "Tom"],
    showList(){
        this.students.forEach(
            student => console.log(
                this.prof + ": " + student
            )
        );
    }
};
group.showList();