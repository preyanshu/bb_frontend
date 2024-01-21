export const isSameSender = (message , m, i, userId) =>{
  
    return (
         i < message.length -1 && 
         ( message[i+1].sender._id !== m.sender._id || 
            
            message[i+1].sender._id === undefined) &&
            message[i].sender._id !== userId 
    )
}

export const isLastMessage = (message, i, userId) =>{

    return(
        i === message.length -1 &&
         message[message.length - 1].sender._id !== userId
          && message[message.length - 1].sender._id
    );
}


export const isSameSenderMargin = (message, m, i, userId) =>{

    if(
        i < message.length -1 && 
        message[i+1].sender._id === m.sender._id &&
        message[i].sender._id !== userId 
    )
    return 52;

    else if(
       (i < message.length -1 && 
        message[i+1].sender._id !== m.sender._id &&
        message[i].sender._id !== userId ) ||
        (i === message.length - 1 && message[i].sender._id !== userId)
    )
    return 0;
    else return "auto";
};

export const isSameUser = (message, m, i) =>{
    return i > 0 && message[i-1].sender._id === m.sender._id
};


export   const getSender = (chat, user, picorname) => {
    if (picorname==="name"){

     if(chat && chat.users){
        const otherUser2 = chat.users.find((u) => u._id !== user._id);
        console.log("otheruser2",otherUser2);
            if (!chat.isGroupChat) {
              const otherUser = chat.users.find((u) => u._id !== user._id);
              return otherUser ? otherUser.name : otherUser2;
            }}
    }
    else{
        if(chat && chat.users){
            const otherUser2 = chat.users.find((u) => u._id !== user._id);
            console.log("otheruser2",otherUser2);
            if (!chat.isGroupChat) {
              const otherUser = chat.users.find((u) => u._id !== user._id);
              return otherUser ? otherUser.pic : otherUser2;
              
            }}
        
    }
    
  };