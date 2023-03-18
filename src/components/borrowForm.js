// import './borrow.css'
// import {useState} from 'react'
// import  ReactDOM from 'react-dom/client';

// function BorrowForm(props) {
//   const [name, setName] = useState("");

//   const handleSubmit = (event) =>{
//     event.preventDefault();
//     alert(`the name you entered was:${name}`);
//   }

//   return (props.trigger) ? (
//     <div className='popup'>
//       <div className='popup-inner'>
//         <button className='close-btn' onClick={() =>{props.setTrigger(false)}}>close</button>
//         <center><h3>Enter your library id!</h3></center>
//         <form onSubmit={handleSubmit}>
//           <label>Enter your name:
//             <input 
//             type="text"
//             value={name}
//             onChange = {(e) =>setName(e.target.value)}
//             />
//           </label>
//         </form>
//         { props.children }
//       </div>
//     </div>
//   ): "";
// }

// export default BorrowForm

import './borrow.css'
import {useState} from 'react'
import  ReactDOM from 'react-dom/client';

function BorrowForm(props) {

  const [ inputs, setInputs ] = useState({});

  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,[name]:value}))
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(inputs)
  }

  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() =>{props.setTrigger(false)}}>close</button>
        <center><h3>Enter your library id!</h3></center>
        <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
        { props.children }
      </div>
    </div>
  ): "";
}

export default BorrowForm









