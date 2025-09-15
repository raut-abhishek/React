import React from 'react';
import UserData from './concepts/props/UserData';
import UseStateExample from './concepts/usestate/UseStateExample';
import ButtonClick from './concepts/event-handling/ButtonClick';
import HandlingTextInput from './concepts/event-handling/HandlingTextInput';
import ConditionalRendering from './concepts/conditional-rendering/ConditionalRendering.jsx';
import RenderNameList from './concepts/list-rendering/RenderNameList.jsx';
import Parent from './concepts/Component communication/child to parent/Parent.jsx';


const App = () => {
  return (
    <div>
      {/* <UserData/> */}
      {/* <UseStateExample/> */}
      {/* <ButtonClick/> */}
      {/* <HandlingTextInput/> */}
      {/* <ConditionalRendering/> */}
      {/* <RenderNameList/> */}
      <Parent/>

    </div>
  )
}

export default App