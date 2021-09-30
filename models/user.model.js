const db = require('../utils/db');


module.exports = {
   async getAllUser() {
        let userData = await db.select('id', 'name', 'email').from('users');
        return userData;
    },

   async checkUserData(email) {
        let user = await db('users').where('email', email);
        if (user != null && user.length > 0) {
            return user[0];
        }
        return null;
    
    }, 

    async getUserByUserName(name) {
        let userName = await db('users').where('name', name);
        return userName;
    }
}