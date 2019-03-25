describe('Sencha Test Hooks', () => {
    beforeEach(() => ST.navigate('#senchatesthooks'));
    
    it('should support selector by item id attribute', () => {
        ST.element('//ext-button[@itemid]').visible();
    });
    
    it('should support component selection by Item Id', () => {
        ST.component('#targetSenchaHooks').visible();
        ST.component('#targetSenchaHooks').visible().text("Target");
    });
});