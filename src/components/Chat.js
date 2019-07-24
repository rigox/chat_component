import React , {useState} from 'react'
import {Launcher} from 'react-chat-window'
import {Modal , Button} from 'react-bootstrap'

class Chat extends React.Component{
      constructor(){
            super()
             this.state ={
                 message_list : [],
                 show : false,
                 message:"test",
                 send:false,
                 incoming:false

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
           })
      }  

      sendMessage=()=>{
         return(
          <div className="speech-bubble" >
          {this.state.message}
     </div>
         )
      }

      receiveMessage =()=>{
          return(
            <div className="speech-bubble2">
            hola
       </div>
          )
      }
      

      render(){
  
    
     return(
               <div>
      <Button variant="primary" onClick={this.handleShow}>
        Launch demo modal
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header className="test" closeButton>
          <Modal.Title className="modal_header"  >Messenger</Modal.Title>
        </Modal.Header>
        <Modal.Body>

       
    <div class="container">
    {this.state.send ? this.sendMessage() : null }
   <input  class="form-control" name="message"  onChange={e=>{this.onChange(e)}} type="text-area"/>
   <button type="button"  className="btn btn-primary" onClick={this.setState({send:true})} > Send </button>

    </div>
   
        </Modal.Body>
      </Modal>
               </div>
       )
  }

}

export default Chat;