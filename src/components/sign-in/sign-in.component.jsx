import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.state({ email: '', password: '' })
  }

  handleChange = (event) => {
    // event.target.value -- event.target.name
    const { value, name } = event.target

    this.setState({ [name]: value })
    //means that password:value
  }
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='Email'
            type='email'
            name='email'
            handleChange={this.handleChange}
            required
            value={this.state.email}
          />

          <FormInput
            label='Password'
            type='password'
            name='password'
            required
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
