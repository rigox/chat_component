import React , {useState} from 'react'
import {Launcher} from 'react-chat-window'
import {Modal , Button} from 'react-bootstrap'
import openSocket  from 'socket.io-client'
//import js file
import  {sendMessage ,newMessage}  from '../utils/chat'

class Chat extends React.Component{
      constructor(){
            super()
             this.state ={
                 message_list : [],
                 show : false,
                 message:"test",
                 send:false,
                 incoming:false,
                 message_list  : []
                                }

                               
            }
      handleClose  =() =>{
                    this.setState({show:false})
      }

      handleShow  =()=>{
                    this.setState({show:true})
      }

      onChange =(e)=>{
          let name = e.target.name;
          let value =  e.target.value   
        this.setState({
                [name]: value
           });
      }  

      sendMessage=()=>{
             sendMessage(this.state.message)
             newMessage();
            }
      

      receiveMessage =()=>{
           
      }
    
      renderMessages = ()=>{
        return this.state.message_list
      }

      render(){
  
    
     return(
               <div className="" >
      <Button variant="primary" onClick={this.handleShow}>
        Launch demo modal
      </Button>

      <Modal size="lg"  className="modal_height  " show={this.state.show} onHide={this.handleClose}>
        <Modal.Header className="test" closeButton>
          <Modal.Title className="modal_header"  >Messenger</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <h1></h1>
       
    <div className="container_custom ">
    <div className="chat_container">
   <div id="test">{}</div>
 </div>
   <input  className="form-control" name="message"  onChange={this.onChange}   type="text-area"/>
   <button type="button"  className="btn btn-primary btn_pad" onClick={this.sendMessage} > Send </button>
 
    </div>
   
        </Modal.Body>
      </Modal>
               </div>
       )
  }

}

export default Chat;