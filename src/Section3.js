const Section = ()=>{
 

    // const a = [1, 3, 5, 2, 4,8,9,99,8,99,89,9,98,99,77,65,5,6,77,5,8,88,7,87,7,8]
    // const result1 = a.filter((item, index)=>{
  
    //   return !(index%2)
    // })

    const a = [1, 3, 5, 2, 4,8,9,99,8,99,89,9,98,99,77,65,5,6,77,5,8,88,7,87,7,8]
    const result1 = a.reduce((preVal, currentVal, index)=>{
  
        console.log(">>>>>>>>>AAA preVal", preVal);
        console.log(">>>>>>>>>AAA currentVal", currentVal);
        console.log(">>>>>>>>>AAA index", index);
    //   return !(index%2)
    },[])


    // const a = [1, 3, 5, 2, 4,8,9,99,8,99,89,9,98,99,77,65,5,6,77,5,8,88,7,87,7,8]
    // const result1 = a.reduce((preVal, currentVal, index)=>{
  
    //   console.log("preVal", preVal);
    //   if (!(index%2)){
    //     preVal.push(currentVal*currentVal)
    //   }
    //   return preVal
    // },[])
  
}

export default Section;