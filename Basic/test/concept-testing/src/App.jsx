import React from 'react';
import User from './concepts/props/User'

const App = () => {
  return (
    <div>
      <User name="Abhishek" age={23} email="abhishek@test.com"/>
    </div>
  )
}

export default App