const generateRandomID = () => '_' + Math.random().toString(36).substr(2,5)

const createID = (id:string, arr: [], generateID: () => string) =>{
    let isDuplicated = true;
    while(isDuplicated){
        if(!arr.find((item: any) => item.id === id)){
            isDuplicated = false;
            break;
        }
        id = generateID();
    }
    return id;
}

export const addIdToItem = (item:any, arr:any) => {
    const randomId = createID(generateRandomID(), arr, generateRandomID);
    return {...item, id: randomId}
}

// console.log(addIdToItem({name:'hoa'}, []));
