describe('class Calculette', () => {
    let calculette;
    beforeEach(() => {
        calculette = new Calculette();
    });

    it('should add 2 to 2', () => {
        expect(calculette.calcul(2, 2, '+')).toBe(4);
    });

    it('should substract 2 from 2', () => {
        expect(calculette.calcul(2, 2, '-')).toBe(0);
    });

    it('should mutliply 4 to 2', () => {
        expect(calculette.calcul(4, 2, '*')).toBe(8);
    });

    it('should divide 2 from 2', () => {
        expect(calculette.calcul(2, 2, '/')).toBe(1);
    });
    
});