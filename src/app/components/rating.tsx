
type Props = {
rate: number;
}

export const Rating = ({rate}: Props)=>{


 if(rate > 5) rate = 5
 if(rate < 0) rate = 1

// let face = ''

// switch (rate) {
//     case 1:
//         face = '😔'
//         break;
//     case 2:
//         face = '😐'
//         break;
//     case 3:
//         face = '🙂'
//         break;
    
//     case 4:
//          face = '😀'
//         break;
//     case 5:
//         face = '😁'
//         break;
                        
   
// }

let face = ['','😔','😐','🙂','😀','😁', ]

let msg = `${face[rate]}`.repeat(rate)

    return(

       
        <div>
        {rate}
        {msg}
        </div>
    )
}