import React from "react"
import Recaptcha from "react-recaptcha"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Contact Us" />
    <div className="is-hidden-mobile" style={{ padding: `2rem 0` }} />
    <h1 className="title is-1 has-text-centered">Contact Us</h1>
    <div className="columns">
      <form
        className="column is-half is-offset-one-quarter"
        action="/contact-form"
        method="post"
        id="contact-form"
        style={{ background: `cornsilk`, borderRadius: `3px`, border: `2px solid black` }}
      >
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input required className="input" type="text" placeholder="Your name" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input required className="input" type="email" placeholder="Your email address" />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea class="textarea" placeholder="Optional message"></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label class="checkbox">
              <input type="checkbox" />
              {' '}Subscribe to our newsletter
            </label>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <Link className="button is-link" to="/">Cancel</Link>
          </div>
        </div>
        <Recaptcha sitekey="6LcSA7kUAAAAABAn-GdEj9CM4ZE3lun0frlyCiN6" />
      </form>
    </div>
  </Layout>
)

