class Request {
    constructor(id, message, user) {
        this.id = id;
        this.message = message;
        this.user = user;
    }

    // Método para crear una instancia de Request desde un objeto plano
    static fromJson(json) {
        return new Request(json.id, json.message, json.user);
    }

    // Método para convertir una instancia de Request a un objeto plano
    toJson() {
        return {
            id: this.id,
            message: this.message,
            user: this.user
        };
    }
}

export default Request;
