export const debounce = (fun,time) => {
    let timer;
    return () => {
         if(!timer){
            timer = setTimeout(fun,time)
         }else { 
           clearTimeout(timer); 
           timer = setTimeout(fun,time)
        }
    }
}