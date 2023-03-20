import React, {useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import '../Styles/Base.css'
import Bar from './Bar';

function Base() {

    const [values, setValues] = useState([])
    const [mode , setMode] = useState('view')
    const [color,setColor] = useState([])
    const [visualizing,setVisualizing] = useState(false)
    const [sorted,setSorted] = useState(false)

    const generateRandomValues = () =>{
        let arr = []
        for(let i=0;i<10;i++){
            let num = ( Math.floor(Math.random() * 20) + 1 )
            arr.push(num)
        }
        setValues(arr)
        setSorted(false)
        reset()
    }

    const reset = () => {
        setColor([])
    }
    
    const startSort = async() => {
        setVisualizing(true)
        let final = values
        for(let i=0;i<10;i++){
            let counter = 10;
            for(let j=0;j<10-i-1;j++){
                let c = []
                for(let k=0;k<counter;k++){
                    if(k === j+1 || k === j){
                        c[k] = '#1876d1'
                    }
                }
                setColor(c)
                await pauser()
                if(final[j] > final[j+1] ){
                    final = swap(final,j,j+1)
                    let temp = [...final]
                    setValues(temp)
                }
            }
            let temp = color
            for(let q = 0;q<=9;q++){
                if(q >=9-i){
                    temp[q]= 'green'
                }else{
                    temp[q] = 'white'
                }
            }
            setColor(temp)
        }
        setVisualizing(false)
        setSorted(true)
    }

    const swap = (arr,i,j) =>{
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        return arr
    }

    const customize = () => {
        setMode('edit')
        setSorted(false)
        reset()
    }

    const save = () => {
        setMode('view')
    }

    const pauser = () => {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve()
            },200)
        })
    }

  return (
    <>
        <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: 'black', height: '100vh',display:'flex',flexDirection:'column',alignItems:'center',gap:'3.5em' }}>
                    <div className="heading">
                        BUBBLE SORT
                    </div>
                    <Bar values={values}  generateRandomValues={generateRandomValues} mode={mode} setValues={setValues} color={color} />
                    <div className="buttons">
                        <Button variant="contained"  disabled={mode === 'edit' || visualizing ? true : false}  disableElevation  onClick={generateRandomValues} >Randomize</Button>
                        <Button variant="contained"  disabled={mode === 'edit' || visualizing || sorted ? true : false} disableElevation  onClick={startSort} >Visualize</Button>
                        {
                            mode === 'view' && <Button variant="contained" disabled={visualizing}  disableElevation  onClick={customize}>Customize</Button>
                        }
                        {
                            mode === 'edit' && <Button variant="contained" disableElevation  onClick={save}>Save</Button>
                        }
                    </div>
                </Box>
            </Container>
    </>
  )
}

export default Base