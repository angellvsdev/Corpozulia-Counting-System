import User from './User';

class Request {
    constructor(id, message, user) {
        this.id = id;
        this.message = message;
        this.user = user; // This should be an instance of the User class
    }

    // Getters and Setters
    getId() { return this.id; }
    setId(id) { this.id = id; }

    getMessage() { return this.message; }
    setMessage(message) { this.message = message; }

    getUser() { return this.user; }
    setUser(user) { this.user = user; }

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
