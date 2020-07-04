const sampleReducer =(state = 0,Action)=>
{
   switch(Action.type)
   {
       case "INCREMENT":
           return state+1
       case "DECREMENT":
            return state-1
   }
 
    return state;
}

export default sampleReducer; 