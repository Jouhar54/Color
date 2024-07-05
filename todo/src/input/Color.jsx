import './color.css'

const Color = ({col}) => {

  const box = {
    width: '80px',
    height: '80px',
    backgroundColor: col ,
    border: '1px solid black',
    marginTop: '10px'
  };

  return (
    
    <div style={box} >
        
    </div>
  )
}

export default Color