import React from "react";
import First from "./components/First";
let ob={
   a:10,
   b:20,
c:30,
}
let arr=[1,2,3]
let [d,e,f]=arr;
console.log(d,e,f)
let {a,b,c}=ob;
console.log(a,"a",b,c);
const App=()=>{
 return(
    <diV><h1>hello</h1>
    <First color="red" price="100" name="apple" />
    <First color="green" price="100" name="mango" />
    <First color="orange" price="100" name="orange" />

    </diV>
 )
}

export default App;