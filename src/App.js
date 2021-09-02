
import { useState } from 'react';
import './App.css';

function App() {
  let container ={
    backgroundColor:"#00bfff",
    width:"100%",
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  }

  let toDoContainer = {
    backgroundColor:'rgba(255,255,255,.6)',
    width:'350px',
    height:'52vh',
    borderRadius:'4px',
  textAlign:'center',
  padding:'12px 10px',
    
  }

  let todoInp = {
    border:'none',
    outline:'none',
    width:'300px',
    padding:'6px 3px',
    fontSize:'20px',
  }
  let addBtn ={
    position:'relative',
    color:'white',
    top:'2px',
    right:'2px',
   border:'none',
   outline:'none',
   cursor:'pointer',
   padding:'2px 10px',
   backgroundColor:'#008b8b',
   fontSize:'25px',
   fontWeight:'bold'
  }
  let todoList ={
    listStyle:'none',
    position:'relative',
    right:'6%',
    height:'40vh',
    overflowY:'auto',
    
  }
  let todoTask = {
    textAlign:'left',
    backgroundColor:'rgba(255,255,255,.6)',
    margin:'10px 8px 3px 0px',
    padding:'3px 3px 3px 5px',
    display:'flex',
    justifyContent:'space-between',
   
    
    fontSize:'19px',

  }
  let deletebtn = {
    marginRight:'2px',
    borderRadius:'3px',
    border:'none',
    color:'white',
    outline:'none',
    cursor:'pointer',
    transition:'.3s',
    padding:'2px 2px',
    width:'35px',
     backgroundColor:'#008b8b',
    fontSize:'18px',
    
  }

  let editbtn = {
    
    borderRadius:'3px',
    border:'none',
    color:'black',
    outline:'none',
    cursor:'pointer',
    transition:'.3s',
    padding:'2px 3px',
    width:'35px',
     backgroundColor:'#16e2f5',
    fontSize:'18px',
    
  }

  let clearTodo = {
    
    color:'white',
   
   border:'none',
   outline:'none',
   cursor:'pointer',
   padding:'4px 8px',
   backgroundColor:'#008b8b',
   fontSize:'18px',
   borderRadius:'4px',
   
    
  }

   const [text,setText] = useState("");
   const [todoarr,settodoarr] = useState([]);


   function addtodo(){
     
     let arr = [...todoarr,text];
     settodoarr(arr);
     setText('');
   }


   function deletetodo(ind){
    todoarr.splice(ind,1);
    settodoarr([...todoarr]);
   }

    function edittodo(index){
      let prom = prompt('add the channges',todoarr[index]);
      todoarr[index] = prom;
      settodoarr([...todoarr]);

    }

    function cleartodolist(){
      settodoarr([]);
    }

  return (
    <div style={container}>
      <h1>To Do App</h1>
      <div style={toDoContainer}>
        <input value={text} onChange={(a)=>setText(a.target.value)} style={todoInp}/><button onClick={()=>addtodo()} style={addBtn}>+</button>
        <ul style={todoList}>
           {todoarr.map((e,i)=>{
        return     <li key={i} style={todoTask}>{e}<span> <button onClick={()=>deletetodo(i)} style={deletebtn}>del</button> <button onClick={()=> edittodo(i)} style={editbtn}>edit</button> </span></li>
             
           })}

      
      
        </ul>
      <button onClick={cleartodolist} style={clearTodo}>Clear All Todo</button>
      </div>

     
    </div>
  );
}

export default App;
