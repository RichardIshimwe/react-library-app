import './App.css'
import BorrowForm from './components/borrowForm';
import react, { useState, useEffect } from 'react';

function App() { 
 const [data1, setData1] = useState([]);
 const [data2, setData2] = useState([]);
 const imageUrl = 'https://puce-helpful-xerus.cyclic.app/blogs';
const url = 'http://localhost:3200/book';
 useEffect(() => {
  Promise.all([
   fetch(imageUrl),
   fetch(url)
  ])
  .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
  .then(([data1, data2]) =>{
    setData1(data1.data);
    setData2(data2.books);
  })
  .catch((error) => console.log(error))
 }, [])
const [popup, setPopup] = useState(false);
return(
<div className="App">
  <center><h1>Library app!</h1></center>
<div className='booksHolder'>
  {
  data2.map((dataObj, i) =>{
    return (
    <div className='card' key={i}>
      <div className='image'><img src={data1[i].image} alt='fethcing image'/></div>
      <div className='bookName'><center><p>{dataObj.title}</p></center></div>
      <div className='author'><p>Author:{dataObj.author}</p></div>
      <div className='button'><center><button onClick={() =>{setPopup(true)}}>Get Me</button></center></div>
    </div>
    );
  })}
</div>
<BorrowForm trigger={popup} setTrigger={setPopup}>
</BorrowForm>
</div>
);

}

export default App;