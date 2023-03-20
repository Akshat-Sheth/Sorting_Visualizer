import React, {useEffect} from 'react'
import SingleBar from './SingleBar'
import '../Styles/Bar.css'

function Bar({values,generateRandomValues,mode, setValues,color}) {

    useEffect(()=>{
        generateRandomValues()
    },[])

  return (
    <div className='bar' >
        <div className="barArea">
        {
            values.map((ele,i) =>(
                <SingleBar height={ele} index={i} mode={mode} setValues={setValues} values={values} color={color}/>
            ))
        }
        </div>
    </div>
  )
}

export default Bar