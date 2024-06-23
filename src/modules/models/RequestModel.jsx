import User from './UserModel';

class Request {
    constructor(id, message, user) {
        this.id = id;
        this.message = message;
        this.user = new User(user.id, user.name, user.surname, user.email, user.idNumber, user.sector, user.location, user.gender, user.age, user.phone); // This should be an instance of the User class
    }

    // Getters and Setters

    // toJson method
    toJson() {
        return {
            id: this.id,
            message: this.message,
            user: this.user.toJson()
        };
    }

    // fromJson method
    static fromJson(json) {
        return new Request(
            json.id,
            json.message,
            User.fromJson(json.user)
        );
    }
}

export default Request;
