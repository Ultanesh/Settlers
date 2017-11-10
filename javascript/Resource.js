export default class Resource {
    constructor(type,number) {
        this.type=type
        this.number=number
    }
    render() {
        return `<div class="card ${this.type}">
                    <div class="dice ${this.number}">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>`
    }
}