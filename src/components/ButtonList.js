import React from 'react'
import Button from './Button'

const List = ["All","Trending","News","Sports","Music","Cricket","Football","IAS","RBI","Tech","Motivation"]
const ButtonList = () => {
  return (
    <div className=' flex'>
      {List.map((listIten,index)=>{
        return <Button name={listIten} key={index}/>
      })}
    </div>
  )
}

export default ButtonList