import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Users from './components/Users'

function App() {

  const [users, setUsers] = useState()
  const [number, setNumber] = useState(1)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    const url = `https://randomuser.me/api/?results=${number}`

    setIsLoading(true)
    axios.get(url)
      .then(res => setUsers(res.data.results))
      .catch(err => {
        console.log(err)
        setHasError(true)
      }
      )
      .finally(() => setTimeout(() => {
        setIsLoading(false)
      }, 2000))
  }, [number])

  const submit = e => {
    e.preventDefault()
    if (isNaN(e.target.inputResult.value)) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 500);
      setHasError(true)
      e.target.reset()

    } else {
      setHasError(false)
      setNumber(e.target.inputResult.value)
      e.target.reset()
    }
  }

  window.addEventListener('scroll', function () {
    const btnTop = this.document.querySelector('.arrow__top')

    if (window.scrollY > 300) {
      btnTop.classList.add('active__top__btn')
    } else {
      btnTop.classList.remove('active__top__btn')
    }
  })

  return (
    <div className="App">
      <div className="container">
        <h1>User Random Card</h1>
        <form onSubmit={submit}>
          <input type="text" id='inputResult' />
          <button>Search</button>
        </form>
        <div className="box__cards">
          {
            isLoading ? <h1>Loading...</h1>
              : hasError ? <h1>Lo siento, debes ingresar un número, intentalo nuevamente</h1>
                : users?.map(user =>
                  <Users
                    key={user.login.uuid}
                    users={user} />
                )
          }
        </div>
      </div>

      <a href='#topreset' className="arrow__top">
        <i className='bx bx-chevron-up'></i>
      </a>

      <div className="top__reset" id='topreset'></div>
    </div>
  )
}

export default App
