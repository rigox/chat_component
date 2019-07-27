import openSocket  from 'socket.io-client'
import {CREATE_MESSAGE , NEW_MESSAGE} from '../utils/events'

const io =  openSocket('http://localhost:3005')

const message_list  = []

io.on('connect',()=>{
      console.log("connected to the web socket")
})

export   const sendMessage = (txt)=>{
      io.emit(CREATE_MESSAGE,txt)
}


export const  newMessage = () =>{
    io.on(NEW_MESSAGE,function(msg){
         console.log('newMessage', msg)
    })
}




