
import './accord.css'
import data from './accdata'
import { useState } from 'react'
const Accord = ()=>{
    const [select, setSelect]= useState(null)
    const [isenabled,setIsEnabled]=useState(false)
    const [multi,setMulti]=useState([])
    const handlesingle=(itemid)=>{
        setSelect(itemid==select?null:itemid)
    }
    const handlemultiple=(itemid)=>{
        let another = [...multi]
        let findidindex= another.indexOf(itemid)
        findidindex==-1?another.push(itemid):another.splice(findidindex,1)
        setMulti(another)
    }
    return <>
       <section>
        <div className="accordcont">
            <button onClick={()=>setIsEnabled(!isenabled)}>Multiple Selection</button>
            {
                data && data.length>0?
                data.map(items=><div className='accord' key={items.id} onClick={isenabled?()=>handlemultiple(items.id):()=>handlesingle(items.id)}>
                    <div className="title">
                    <h3>{items.question}</h3>
                    <span>+</span>
                    </div>
                    {isenabled?multi.indexOf(items.id)!==-1?<div className='answer'>{items.answer}</div>:null:select==items.id?<div className='answer'>{items.answer}</div>:null}
                    
                </div>

                
                )
                :<div>No data found</div>
            }
        </div>
       </section>
    </>
}


export default Accord