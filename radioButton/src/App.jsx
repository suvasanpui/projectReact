import './App.css'

function App() {

  const options = ["cricket", "footbal", "hockey"];
  const days = ["weekday", "weekend"];

  const getData=((e)=>{
    console.log(e.target.value);
  })

  return (
    <div>
      <h1>Play Game</h1>
      <div>
        {
          options.map((oiteam, index) => {
            console.log(index);
            return (
              <div>
                <input type='radio' name='options' value={oiteam} onChange={getData}/>
                <label for='options'>{oiteam}</label>
              </div>
            )
          })
        }
      </div>
      <h1>Day</h1>
      <div>
        {
          days.map((diteam, index) => {
            console.log(index);
            return (
              <div>
                <input type='radio' name='days' value={diteam} onChange={getData}/>
                <label for='options'>{diteam}</label>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
