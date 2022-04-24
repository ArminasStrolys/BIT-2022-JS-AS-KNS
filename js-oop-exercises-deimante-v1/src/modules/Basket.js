class Basket{
    constructor(){
        this.size = 500
        this.filled = 0
    }
    add(shroomWeight){
        this.filled + shroomWeight < 500 ? this.filled += shroomWeight : console.log('Netelpa')
    }
}
export default Basket