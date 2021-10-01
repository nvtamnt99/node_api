const db = require('../utils/db');


module.exports = {
    async getAllUser() {
        let userData = await db.select('id', 'email', 'phone_number').from('users');
        return userData;
    },

    async checkUserData(email) {
        let user = await db('users').where('email', email);
        if (user != null && user.length > 0) {
            return user[0];
        }
        return null;

    },

    async saveUser(email, phone_number, password) {
        let create = await db('users')
            .insert({
                email: email,
                phone_number: phone_number,
                password: password
            })

        return create;
    },

    async getUserByUserName(email) {
        let userName = await db('users').where('email', email);
        return userName;
    }
}