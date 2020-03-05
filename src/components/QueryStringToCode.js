import React from "react"
import propTypes from 'prop-types'

const LineToP = (line) => <p>{line}</p>

const QueryStringToCode = ({queryString, title, children}) =><div className="text-left container p-sm shadow-lg">
  <h4>{title}</h4>
  <div>{children}</div>
  <pre><code className="text-left language-graphql">{queryString.split('\n').map(LineToP)}</code></pre>
</div> 

QueryStringToCode.propTypes = ({
  title: propTypes.string,
  queryString: propTypes.string,
  children: propTypes.oneOf([
    propTypes.element,
    propTypes.arrayOf(propTypes.element)
  ])
})

export default QueryStringToCode
