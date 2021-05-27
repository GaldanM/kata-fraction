class Fraction {
  private readonly numerator: number;
  private readonly denominator: number;

  constructor(numerator: number, denominator: number) {
    if (numerator === 0) {
      throw Error("numerator_null");
    }

    const gcd = this.computeGcd(numerator, denominator);

    this.numerator = numerator / gcd;
    this.denominator = denominator / gcd;
  }

  getNumerator(): number {
    return this.numerator;
  }
  getDenominator(): number {
    return this.denominator;
  }

  add(fractionToAdd: Fraction): Fraction {
    const sumNumerator = this.numerator * fractionToAdd.denominator + fractionToAdd.numerator * this.denominator;
    const sumDenominator = this.denominator * fractionToAdd.denominator;

    return new Fraction(sumNumerator, sumDenominator);
  }

  private computeGcd(numerator: number, denominator: number): number {
    if (denominator === 0) {
      return numerator;
    }

    return this.computeGcd(denominator, numerator % denominator);
  }
}

export default Fraction;
