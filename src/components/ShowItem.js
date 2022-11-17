import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ShowItem() {
     
    const initialList =  [
        {
            id: 1,
            name: 'Bananas'
        },{
            id: 2,
            name: 'Grapes'
        },{
            id: 3,
            name: 'Mango'
        }
    ]
    const [name,setName] = useState('');
    const [List,setList] = useState(initialList);
   
    const handleChange = (event) => {
        setName(event.target.value)
    }
    const handleAdd = () => {
        if(name.length !== 0){
            const newList = List.concat({name, id: uuidv4()})
            setList(newList)
            setName('')
        }
    }
    const handlePressEnter = (e) => {
        if(e.key === 'Enter'){
            if(name.length !== 0){
                const newList = List.concat({name, id: uuidv4()})
                setList(newList)
                setName('')
            }
        }
    }
  return (
    <>
        <div className="container">
            <input type="text" className="me-2" onChange={handleChange} onKeyPress={handlePressEnter}/>
            <button type="button" onClick={handleAdd}>Add Item</button>
            <ol>
                {List.map((item) => (<li key={item.id}>{item.name}</li>))}
            </ol>
        </div>
    
    </>
  )
}
