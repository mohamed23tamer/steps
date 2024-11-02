import { useState } from 'react'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
]

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  )
}
function Steps() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlerPervious() {
    if (step > 1) setStep((currStep) => currStep - 1)
  }
  function handlerNext() {
    if (step < 3) {
      setStep((currStep) => currStep + 1)
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: '#7950f3', color: '#fff' }}
              onClick={handlerPervious}
            >
              Pervious
            </button>
            <button
              style={{ backgroundColor: '#7950f3', color: '#fff' }}
              onClick={handlerNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}