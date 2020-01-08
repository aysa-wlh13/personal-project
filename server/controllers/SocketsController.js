const socket = require('socket.io');

module.exports = {
    getChats: async (req, res) => {
        const db = req.app.get('db');

        let users_id = req.session.user.users_id

        let room1 = `${users_id}:%`
        let room2 = `%:${users_id}`

        let chats = await db.chats.get_user_chats({room1,room2,user_id})

        if(chats.length !==0){
            const array = []
            let users =
            chats.map(room=>{
                const roomArr = room.room_id.split(':')
                const id = roomArr.filter(item=>{
                    if(item != user_id){
                        return item
                    }
                })
                return id
            }).map(userId => {
                return +userId[0]
            })

            let awaiting = users.map(async id1 =>{
                let awaitedUsers = await db.chats.get_user_chat({id1})
                array.push(awaitedUsers[0])
                return array
            })

        Promise.all(awaiting).then(
            (awaitingU)=>{
                awaitingU = awaitingU[0]
                awaitingU = awaitingU.sort((a,b)=>{return b.user_id - a.user_id })
                res.status(200).send(awaitingU)
            })
        }
    },

    getChat: async(req,res)=>{
        const db = req.app.get('db')

        let {users_id} = req.params

        users_id = +users_id

        let big
        let small 

        if(users_id > req.session.user.users_id){
            big = users_id;
            small = req.session.user.users_id
        } else {
            small = users_id;
            big = req.session.user.users_id
        }
        const room = big + ':' + small
        let chat = await db.chats.get_chats({room})
        res.status(200).send(chat)

    }
}