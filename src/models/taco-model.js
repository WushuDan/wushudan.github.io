import Card from './section-model'

class Taco {
    constructor ({base_layer, condiment, mixin, seasoning, shell}) {
        this.baseLayer = new Card(base_layer);
        this.condiment = new Card(condiment);
        this.mixin = new Card(mixin);
        this.seasoning = new Card(seasoning);
        this.shell = new Card(shell);
    }
}

export default Taco;
