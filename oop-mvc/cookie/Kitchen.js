// const { Chocolate, Sweet, Strawberry } = require('./Cookie');

class Kitchen {
    constructor(container) {
        this._container = container || [];
    }
    get container() {
        return this._container
    }
    set setContainer(container){
        this._container.push(container)
    }
    set setContainerOverwrite(container){
        this._container = container
    }
    showCookies(){
        console.log("Cookies in container : ");
        this.container.forEach((cookie,index) => {
            const {name, price, ingredients, type, isSweet} = cookie
            console.log(`${index+1}. ${name}, Rp. ${price}`)
        })
    }
    eat(cookie_name){
        let temp = this.container.filter(cookie => cookie.name !== cookie_name);
        this.setContainerOverwrite = temp
    }
    addSugar(cookie_name){
        let temp = this.container.map(cookie => {
            if(cookie.name === cookie_name){
                cookie.setIsSweet = true;
                return cookie;
            }else {
                return cookie;
            }
        })
        this.setContainerOverwrite = temp;
    }
    bake(cookie){
        this.setContainer = cookie;
    }
}

module.exports = Kitchen;