export const increment = (pas) =>(  {
    type : 'increment',
    payload: pas
}) ;
export const decrement = (pas) => (
    {
        type : 'decrement',
        payload: pas
    }
)