let obj = {
    "A":{
        "_F_":"d",
        "a1":{
            "_F_":"d"
        },
        "a2":{
            "_F_":"d"
        }
    },
    "B":{
        "_F_":"d",
        "b1":{
            "_F_":"d"
        }
    },
    "C":{
        "_F_":"d"
    },
    "a.svg":{
        "_F_":"f",
        "size":255,
        "mtime":"2020-08-02T21:18:31.000Z"
    },
    "clock.hta":{
        "_F_":"f",
        "size":264
    }
};

function get_keys_by_level(obj, value, level){
    let list = [];
    
    (level <= 0)? level = 1 :
    (level > 2)? level = 2 : level = level;

    for(k1 in obj){
        let level1 = obj[k1];
        for(k2 in level1){
            let level2 = level1[k2];
            if(typeof level2 == "object"){
                for(key in level2){
                    if(level2[key] == value){
                        if(level == 1 && !list.includes(k1)){
                            list.push(k1);
                        }else if (level == 2 && !list.includes(k2)){
                            list.push(k2);
                        } 
                    }
                }
            }else{
                if(level2 == value){
                    if(level == 1 && !list.includes(k1)){ 
                        list.push(k1);
                    }
                }
            }
        }
    }
    return list;
}
// console.log(typeof obj == 'object');f
console.log(get_keys_by_level(obj, 'f', 1));