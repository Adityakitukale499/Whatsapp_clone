import { Avatar } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import '../style/sidebar.css'

const SidebarChats = (props) => {
  
  const showChat = (e) => {
    // console.log(e.currentTarget.id);
    props.setChat(e.currentTarget.id)
  }

  return (<div className='sidebar_chat' id={props.id} onClick={showChat}>
      <Avatar />
      <div className="sidebar_chatInfo">
        <h2>{props.name}</h2>
        <p>{props.time}</p>

      </div>
    </div>
  )
}

export default SidebarChats