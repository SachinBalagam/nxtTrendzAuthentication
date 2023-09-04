// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({errorMessage: data.error_msg})
    }
    console.log(data)
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderUserNameField = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username" className="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input"
          placeholder="Username"
          value={username}
          onChange={this.onUsernameChange}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="username">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={this.onPasswordChange}
        />
      </>
    )
  }

  render() {
    const {errorMessage} = this.state
    return (
      <div className="login-page-container">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-logo"
          />
          <form className="form-container" onSubmit={this.onFormSubmit}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="login-website-logo"
            />
            <div className="username-container">
              {this.renderUserNameField()}
            </div>
            <div className="username-container">
              {this.renderPasswordField()}
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <p className="error-message">{errorMessage}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
