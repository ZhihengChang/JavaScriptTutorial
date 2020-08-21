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

function get_keys_by_level(obj, target, level){
    let result = [];
    if(!obj) return result;
    let levelList = get_level(obj, level);
    if(!levelList) return result;
    for(let i = 0; i < levelList.length; i++){
        let cur = levelList[i];
        for(let key in cur){
            let value = cur[key];
            if(typeof value == 'object'){
                for(let k in value){
                    if(value[k] == target && !result.includes(k)){
                        result.push(key);
                    }
                }
            }
        }
    }
    return result;

};

function get_level(obj, level){
    let result = [];
    let list = [];
    if(!obj) return result;
    list.push(obj);
    for(let lv = 0; lv < level; lv++){
        let levelList = [];
        let count = list.length;
        for(let i = 0; i < count; i++){
            let cur = list.shift();
            levelList.push(cur);
            if(Object.keys(cur).length != 0){
                for(let key in cur){
                    list.push(cur[key]);
                }
            }
        }
        result.push(levelList);
    }
    return result[level-1];
}

console.log(get_keys_by_level(obj, 'd', 2));