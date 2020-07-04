
export const increment =()=>
{
    return{
        type:'INCREMENT'
    }
} 

export const decrement =()=>
{
    return{
        type:'DECREMENT'
    }
} 
export const details =(data)=>
{
    console.log(data,"data")
    return{
        type:"UPDATE",
        payload:data
    }
}