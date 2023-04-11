import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify'
import { URL } from '../../config'
// import UserDashboard from './../../components/user/UserDashboard'
// import '../../components/user/dashboard.css'
// import WelcomeBlock from './../../components/user/WelcomeBlock'

const WriteFeedback = () => {
    const [urll, setUrll] = useState(`${URL}/user/addfeedback`)  
    const [email, setEmail] = useState('')
    const [feedback, setFeedback] = useState('')
    const currentUserId = sessionStorage['id']
  
    const navigate = useNavigate()
  
    const save = () => {
      const url = `${urll}/${currentUserId}`
      console.log(url)
      if (email.length == 0) {
        toast.warning('please enter email')
      }
      else if (feedback.length == 0) {
        toast.warning('please enter feedback')
      } else {
        const body = {
          email,
          feedback,
          userId: sessionStorage['id'],
        }
  
        axios.post(url, body).then((response) => {
          const result = response.data
          setFeedback('')
          if (result['status'] == 'success') {
            toast.success('added new feedback..')
            console.log(result.data)
            navigate('/view-issued-books')
          } else {
            toast.error(result['error'])
          }
        })
      }
    }
  
    return (
      <div id="#App" className='row'>
        <div className='col-3'>
        <UserDashboard></UserDashboard>
        </div>
        <div className='col'>
        <div className="col">
            <WelcomeBlock></WelcomeBlock>
          </div>
          <div class="container">
    <div class="row">
      <div class="col">
      </div>
  
      <div class="col-12">
        <h1 className="title">Write To us</h1>
  
        <div className="form">
          <div className="mb-3">
            <label htmlFor="" className="label-control">
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="email"
              className="form-control"
            />
          </div>
  
  
          <div className="mb-3">
            <label htmlFor="" className="label-control">
              Feedback
            </label>
            <textarea
              onChange={(e) => {
                setFeedback(e.target.value)
              }}
              rows="10"
              className="form-control"
            ></textarea>
          </div>
  
          <div className="mb-3">
            <button onClick={save} className="btn btn-success">
              Save
            </button>
            <Link to="/view-issued-books" className="btn btn-danger float-end">
              Cancel
            </Link>
          </div>
          </div>
        </div>
      </div>
      </div>
  
      <div class="col">
      </div>
    </div>
  </div>
    )
  }
  
  export default WriteFeedback