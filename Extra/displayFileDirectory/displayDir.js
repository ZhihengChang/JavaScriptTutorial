const fs = require('fs');
const path = "Extra/displayFileDirectory/Test";

async function displayDir(path){
    let counter = -1;
    dirList = fs.readdirSync(path, {withFileTypes:true});
    print(path, counter);

}

function print(path, counter){
    if(!fs.lstatSync(path).isDirectory()){
        printPathHelper(path, counter + 1);
        path = path.split('/').slice(0, -1).join('/');
        counter--;
        return;
    }
    let dirList = fs.readdirSync(path, {withFileTypes:true});
    counter++;
    printPathHelper(path, counter);
    for(dirent of dirList){
        print(path + `/${dirent.name}`, counter);
    }
}

function printPathHelper(path, counter){
    //console.log(counter);
    let result = new Array(counter + 1).join('\t');
    if(counter != 0) result += '└──';
    result += ` ${path.split('/').slice(-1).join()}`;
    console.log(result);
}

displayDir(path).catch(console.error);


