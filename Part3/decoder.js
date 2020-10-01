//TextDecoder object is used to handle string type binary data

//it takes in two parameters:
//-label: the encodeing, utf-8 by default
//-option: fatel: boolean if true then throw an exception for invalid 
//         ignoreBOM: boolean if true then ignore BOM
let uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
let decoder = new TextDecoder();
console.log(decoder.decode(uint8Array));

//to decode part of the buffer, create subarray view for it:
uint8Array = new Uint8Array([0, 72, 101, 108, 108, 111, 0]);
let binaryString = uint8Array.subarray(1, -1);
console.log(decoder.decode(binaryString));

//to encode, use TextEncoder: converts string into bytes
//different than decoder, encoder only support utf-8
let encoder = new TextEncoder();
uint8Array = encoder.encode("Hello");
console.log(uint8Array);
