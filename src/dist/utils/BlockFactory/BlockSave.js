class BlockSave {

    DefaultBlock;
    ListBlock;

    constructor() {
        if (typeof BlockSave.intance === "object") {
            return BlockSave.intance;
        }

        const self = this;
        BlockSave.intance = self;
    }

    getSaveDefaultBlock(){
        return this.DefaultBlock;
    }

    setSaveDefaultBlock(BlockId){
        this.DefaultBlock = BlockId;
    }

    setListBlock(Blocks){
        this.ListBlock = Blocks
    }

    getListBlock(){
        return this.ListBlock
    }
}
export default BlockSave;