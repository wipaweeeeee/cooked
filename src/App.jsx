import { useState } from 'react'
import './styles.scss'

function App() {

  const cookedLevels = [
    "absolutely cooked.", 
    "cooked.", 
    "so cooked.", 
    "nah, let her cook.", 
    "we're not sure at this point.", 
    "duh.",
    "she's always cooked.",
    "she's cooked but it's ok.",
    "1000% cooked.",
    "Been cooked for days."
  ]

  const max = 35;
  const [active, setActive] = useState("cooked.");
  const [curr, setCurr] = useState(1);

  const handleCookedState = () => {
    const chance = Math.floor(Math.random() * cookedLevels.length);
    setActive(cookedLevels[chance]);

    if (curr < max) {
      setCurr(curr => curr + 1);
    } else {
      setCurr(1);
    }
  }

  return (
    <div className='container'>
        <div className='content'>
          <div className='question'>Is Priscilla Cooked?</div>
          <div className='answer'>{active}</div>
        </div>
        <div onClick={handleCookedState} className='button'>(check again)</div>
        <div className='scrim' />
        <div className='imageContainer' style={{backgroundImage: `url(/images/${curr}.png)`}}></div>
        <div className='imageBlur' style={{backgroundImage: `url(/images/${curr}.png)`}}></div>
    </div>
  )
}

export default App
