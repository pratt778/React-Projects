import { useState } from "react"
import './random.css'
const randomCol = ()=>{
    const [coltype,setColtype]= useState('hex')
    const [col,setCol] = useState('#ffffff')

    const randomColGenerator=(len)=>{
        let num = Math.floor(Math.random()*len)
        return num   
    }

    const generatehex = ()=>{
        console.log('hex')
        const hexpattern = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hex = '#'
        for(let i=0;i<6;i++){
            hex+=hexpattern[randomColGenerator(hexpattern.length)]
        }
        setCol(hex)

    }
    const generatergb = ()=>{
        console.log('rgb')
        let r = randomColGenerator(256)
        let g = randomColGenerator(256)
        let b = randomColGenerator(256)
        setCol(`rgb(${r},${g},${b})`)
    }
    return <>
        <section>
            <div className="randomcont" style={{height:'100vh',width:'100%',backgroundColor:col}}>
                <div className="btns">
                <button onClick={()=>setColtype('hex')} id="hex" >Hex Color</button>
                <button onClick={()=>setColtype('rgb')} id="rgb">RGB Color</button>
                <button onClick={coltype=='hex'?generatehex:generatergb} id="gen">Generate Color</button>
                </div>
                <div className="show">
                    <h2>{coltype=='hex'?'Hex Color':'RGB Color'}</h2>
                    <p>{col}</p>
                </div>
            </div>
        </section>
    </>
}

export default randomCol