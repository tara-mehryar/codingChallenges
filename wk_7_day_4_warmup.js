class FakeArray {
    constructor (arr){
        this.arr = arr
    }
}

// Given this starter code. Write a method for FakeArray that mimics the Array.includes method. 

const fakeArray = (arr, element) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            return true;
        }
    }
    return false
}

//  Solution in class:
class FakeArray {
    constructor (arr){
        this.arr = arr
    }
}
Includes (data){
    let array = this.arr;

    for(let i = 0; i < array.length; i++){
        if(array[i] === data){
            return true
        }
    }
    return false
}