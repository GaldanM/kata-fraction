import Fraction from "../src/Fraction";

describe("additions", () => {
  it("should add same denominator", () => {
    const fraction1 = new Fraction(2, 4);
    const fraction2 = new Fraction(3, 4);

    const fractionResult = fraction1.add(fraction2);

    expect(fractionResult.getNumerator()).toStrictEqual(5);
    expect(fractionResult.getDenominator()).toStrictEqual(4);
  });
  it("should add not same denominator", () => {
    const fraction1 = new Fraction(2, 4);
    const fraction2 = new Fraction(3, 5);

    const fractionResult = fraction1.add(fraction2);

    expect(fractionResult.getNumerator()).toStrictEqual(11);
    expect(fractionResult.getDenominator()).toStrictEqual(10);
  });
  it("should throw on 0 as numerator", () => {
    expect(() => new Fraction(0, 2)).toThrow("numerator_null");
  });
});
