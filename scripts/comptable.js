class Comptable {
    constructor() {
        this.calculette = new Calculette();
    }

    getBenefices(recettes, salaires, tva) {
        let recetteTaxees = this.calculette.calcul(recettes,tva,'*');
        if(recetteTaxees > salaires) {
            return this.calculette.calcul(recetteTaxees, salaires, '-');
        }
        return 'en faillite';
        
    }


}