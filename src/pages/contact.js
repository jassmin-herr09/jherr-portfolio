import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { navigate } from "gatsby-link"

const Contact  = () => {
    return (
        <Layout>
            <Head page="Contact" />
            <h1>Contact</h1>
              <form data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <label>
                      Name
                        <input type="text" placeholder="John Doe" />
                    </label>
                    <label>
                        Email
                        <input type="email" placeholder="youremail@email.com" />
                    </label>
                    <label>
                        Message
                        <textarea placeholder="Hello">

                        </textarea>
                    </label>                
              </form>
        </Layout>

    )



}

export default Contact
