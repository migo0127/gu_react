import React,{useState,useEffect} from 'react'

function App(){
  const [value,setValue] = useState('');

  useEffect(()=>{
    console.log("componentDidUpdate");    
  },[value])

  const handleChange = (event) => {

    setValue(value);

    console.log('after setState', value)
  }

  return(
    <>
      <select onChange={handleChange} value={value}>
          <option value="男一" key={1}>
            男一
          </option>
          <option value="女2" key={2}>
            女2
          </option>
          <option value="React" key={3}>
            React
          </option>
        </select>
        <h1>{value}</h1>
    </>
  )
}

export default App