//Async iteration and generators

/*
async iteration is needed when values come asynchronously
the most common case is that the object needs to make a network request to deliver the next value
to make an object iterable asynchronously:
-Symbol.asyncIterator instead of Symbol.iterator
-next() method return a promise (to be fulfilled with the next value)
-iterate over such an object, use a for await loop
*/
let range = {
    from: 1,
    to: 5,
    [Symbol.asyncIterator](){
        return{
            current: this.from,
            last: this.to,
            async next(){
                await new Promise(resolve => setTimeout(resolve, 1000));
                if(this.current <= this.last){
                    return {done: false, value: this.current++};
                }else{
                    return {done: true};
                }
            }
        }
    }
};
(async () => {
    for await (let value of range){
        console.log(value);
    }
})()