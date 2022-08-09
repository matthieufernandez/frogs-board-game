import React from "react"
import Layout from "../components/Layout"

export default function forms() {
  return (
    <Layout>
      <>
        <h2>Sample form</h2>
        <form>
          <label>Test form</label>
          <input type="text" required />
        </form>
      </>
    </Layout>
  )
}
