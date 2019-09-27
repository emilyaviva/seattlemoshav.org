import React from "react"
import Recaptcha from "react-recaptcha"
import { Link } from "gatsby"
import axios from 'axios'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Contact extends React.Component {
  recaptchaInstance = null

  executeCaptcha = () => {
    this.recaptchaInstance.execute()
  }

  verifyCallback = response => {
    // Drop the submitted attribute from the component state
    const { submitted, ...formContent } = this.state
    formContent['g-recaptcha-response'] = response
    axios({
      method: "post",
      url: "/contact-form-submit-ajax",
      data: formContent,
      headers: { "Accept": "application/json" }
    })
    .then(() => {
      // this.setState({ submitted: true })
      alert(`Your message has been sent. Name: ${formContent.name}, Email: ${formContent.email}, Message: ${formContent.message}, Subscribe? ${formContent.subscribed}`)
    })
    .catch(error => {
      console.error(error)
    })
  }

  state = {
    name: "",
    email: "",
    message: "",
    subscribed: false,
    // submitted: false
  }

  handleInputChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
      subscribed: false,
      // submitted: false
    })
  }

  render () {
    return (
      <Layout>
        <SEO title="Contact Us" />
        <div className="is-hidden-mobile" style={{ padding: `2rem 0` }} />
        <h1 className="title is-1 has-text-centered">Contact Us</h1>
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter"
            onSubmit={this.executeCaptcha}
            method="post"
            id="contact-form"
            style={{ background: `cornsilk`, borderRadius: `3px`, border: `2px solid black` }}
          >
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  required
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  required
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  placeholder="Optional message"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="subscribe"
                    value={this.state.subscribed}
                    onChange={this.handleInputChange}
                  />
                  {' '}Subscribe to our newsletter
                </label>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit" onClick={this.executeCaptcha}>Submit</button>
              </div>
              <div className="control">
                <button className="button is-link" type="reset" onClick={this.resetForm}>Clear</button>
              </div>
              <div className="control">
                <Link className="button is-link" to="/">Cancel</Link>
              </div>
            </div>
            <Recaptcha
              sitekey="6LdtLbkUAAAAAAr2RSu0kLGyQl-AlecGVBuIZa1e"
              ref={e => this.recaptchaInstance = e}
              size="invisible"
              verifyCallback={this.verifyCallback}
            />
          </form>
        </div>
      </Layout>
    )
  }
}

