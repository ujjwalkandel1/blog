import React, { useEffect } from 'react'

function IntroPost(){

  const getPost=()=>{

    useEffect(()=>{
      getPost();
    },[])
    GlobalApi.getPost.then(resp=>{
      console.log(resp)
    })
  }
  return (
    <div>IntroPost</div>
  )
}

export default IntroPost