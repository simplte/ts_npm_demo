const arrayMap = <T,U>(arr:T[] , callback:(item:T,index:number,arr:ReadonlyArray<T>)=>U): U[]=>{
    let i = -1;
    const len = arr.length;
    const resArr = [];
    while(++i < len) {
        resArr.push(callback(arr[i], i ,arr));
    }
    return resArr;
}

export = arrayMap;