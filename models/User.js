const { fstat } = require('fs')
const fs = require('fs')


const User = {

    fileName: './database/users.json',

    create: function(userData) {
        let AllUser= this.getUser();
        let NewUser={
            id: this.generateId(),
            ...userData


        }
        AllUser.push(NewUser);
        fs.writeFileSync(this.fileName, JSON.stringify(AllUser,null,''));
        return NewUser;
    },

    generateId: function(){
        let AllUser= this.getUser();
        let lastUser= AllUser.pop();
        
        if (lastUser){
            return lastUser.id +1;
        }
        return 1

    },

    getUser: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },
    findUserbyId: function (id) {
        let AllUser = this.getUser();
        let Userfound = AllUser.find(oneUser => oneUser.id === id);
        return Userfound
    },
    findUserbyField: function (field,value) {
        let AllUser = this.getUser();
        let Userfound = AllUser.find(oneUser => oneUser[field] === value);
        return Userfound

},
}

module.exports= User;