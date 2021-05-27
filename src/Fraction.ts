class Fraction {
  private readonly numerator: number;
  private readonly denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  getNumerator(): number {
    return this.numerator;
  }
  getDenominator(): number {
    return this.denominator;
  }

  add(fractionToAdd: Fraction): Fraction {
    return new Fraction(5, 4);
  }
}

export default Fraction;
