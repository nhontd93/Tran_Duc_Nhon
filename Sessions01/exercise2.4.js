function findMissingElement(arr,brr)
    {   let newArr = [];
        
        for (let i = 0; i < brr.length; i++)
        {
            let j;
            for (j = 0; j < arr.length; j++)
                if (brr[i] == arr[j])
                    break;
   
            if (j == arr.length)
            
                newArr.push(brr[i]);
    
        }
        return newArr;
        
    }
   
    a = [7,2,5,3,5,3];
    b = [7,2,5,4,6,3,5,3];
    console.log(findMissingElement(a,b));
