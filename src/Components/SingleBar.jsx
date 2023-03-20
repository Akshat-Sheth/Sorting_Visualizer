import React from 'react'
import '../Styles/SingleBar.css'

function SingleBar({height,mode, setValues,values,index,color}) {

    const style = {
        height : `${20 * height}px`,
        backgroundColor:`${color[index] || 'white'  }`,
        width:'50px',
        borderTopRightRadius:'10px',
        borderTopLeftRadius:'10px',
        
    }
    const change = (e) => {
        console.log('values changes')
        const newValue = e.target.value
        console.log('new value ->',newValue)
        let arr = [];
        for(let i=0;i<values.length;i++){
            if(i === index){
                arr.push(Number(newValue))
            }else{
                arr.push(Number(values[i]))
            }
        }
        console.log('Arr ->',arr)
        setValues(arr)
    }

    return (
        <div className={`singlebar`}  style={style}   >
            <input type="text" id={`${height}`} value={height} readOnly={mode === 'view' ? true : false} onChange={change} />
        </div>
    )
}

export default SingleBar