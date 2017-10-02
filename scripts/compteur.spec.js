describe('class Compteur', () => {
    let compteur;
    
    beforeEach(() => {
        compteur = new Compteur();
    });

    it('should be initialized to zero', () => {
        expect(compteur.compte).toBe(0);
    });

    it('should increment counter', ()=> {
        compteur.incrementer();
        expect(compteur.compte).toBe(1);
    });

    it('should decrement counter', ()=> {
        compteur.decrementer();
        expect(compteur.compte).toBe(-1);
    });

    it('should reset counter on reset', () => {
        compteur.incrementer();
        compteur.reset();
        expect(compteur.compte).toBe(0);
    });

    it('should keep incremeting', () => {
        compteur.incrementer();
        compteur.incrementer();
        expect(compteur.compte).toBe(2);
    });

});