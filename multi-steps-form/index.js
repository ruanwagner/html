let currentStep = 0
const formSteps = document.querySelectorAll('.form-step')
const progressSteps = document.querySelectorAll('.step-progress [data-step]')
const form = document.querySelector('form')
form.addEventListener('click', (e) => {
  if (!e.target.matches('[data-action')) {
    return
  }
  const actions = {
    next() {
      if (!isValidToProceed()) {
        return
      }
        currentStep++
    },
    prev() {
      currentStep--
    }
  }
  const action = e.target.dataset.action
  actions[action]()
  console.log(currentStep)
  updateActiveStep()
  updateProgressStep()
})
function updateActiveStep() {
  formSteps.forEach(step => step.classList.remove('active'))
  formSteps[currentStep].classList.add('active')
}
function updateProgressStep() {
  progressSteps.forEach((step, idx) => {
    step.classList.remove('active')
    if (!isValidToProceed())
      step.classList.remove('done')
    if (idx < currentStep + 1) {
      step.classList.add('active')
    }
    if (idx < currentStep) {
      step.classList.add('done')
    }
  })
}
function isValidToProceed() {
  const currentFormStep = formSteps[currentStep]
  const formFields = [
    ...currentFormStep.querySelectorAll('input'),
    ...currentFormStep.querySelectorAll('textarea')
  ]
  return formFields.every((input) => input.reportValidity())
}
formSteps.forEach(formStep => {
  function addHide() {
    formStep.classList.add('hide')
  }
  formStep.addEventListener('animationend', e => {
    addHide()
    formSteps[currentStep].classList.remove('hide')
  })
})
form.addEventListener('submit', () => {
  e.preventDefault()
  const data = new FormData(form)
  alert(`Thanks ${data.get('name')} for your submit!`)
  console.log('submitting answer')
})