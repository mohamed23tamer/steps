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
      {/* <Steps /> */}
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
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#777"
                textColor="#333"
                onClick={() => alert('fvhkhbviuhvuinviunvunwr')}
              >
                Learn more
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button
              bgColor="#7950f3"
              textColor="#fff"
              onClick={handlerPervious}
            >
              <span>👈</span>Pervious
            </Button>
            <Button bgColor="#7950f3" textColor="#fff" onClick={handlerNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}: </h3>
      {children}
    </div>
  )
}

function Button({ children, bgColor, textColor, onClick }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
