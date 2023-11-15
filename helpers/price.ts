import { TCopper, TPercent, TPrice } from '@/types';

const SILVER_PER_GOLD = 100;
const COPPER_PER_SILVER = 100;

export const calcPriceDifference = (fromAmount: TPrice, toAmount: TPrice) => {
  // Calculate the total values in copper coins
  const fromAmountInCopper = calcPriceToCopper(fromAmount);
  const toAmountInCopper = calcPriceToCopper(toAmount);

  //We are not interested if there is no profit to find
  if (fromAmountInCopper > toAmountInCopper) {
    return { gold: 0, silver: 0, copper: 0 };
  }

  // Calculate the difference
  const difference = toAmountInCopper - fromAmountInCopper;

  return calcCopperToPrice(difference);
};

export const calcPriceMultiply = (amount: TPrice, multiplier: number) => {
  // Calculate the total value in copper coins
  const priceInCopper = calcPriceToCopper(amount);

  // Multiply the total value by the multiplier
  const priceInCopperWithMultiplier = priceInCopper * multiplier;

  return calcCopperToPrice(priceInCopperWithMultiplier);
};

export const calcPriceToCopper = (price: TPrice): TCopper => {
  const gold = price.gold;
  const silver = price.silver;
  const copper = price.copper;

  return gold * 10000 + silver * 100 + copper;
};

export const calcProfitInPrice = (from: TPrice, to: TPrice, amount: number): TPrice => {
  const difference = calcPriceDifference(from, to);
  const multiplied = calcPriceMultiply(difference, amount);

  return multiplied;
};

export const calcProfitInPercent = (from: TPrice, to: TPrice, amount: number): TPercent => {
  const fromInCopper = calcPriceToCopper(calcPriceMultiply(from, amount));
  const profitInPrice = calcProfitInPrice(from, to, amount);
  const profitInCopper = calcPriceToCopper(profitInPrice);

  const result = Math.floor((profitInCopper / fromInCopper) * 100);
  if (profitInCopper > 0 && fromInCopper > 0) {
    return result;
  }

  return 0;
};

export const calcCopperToPrice = (copper: TCopper): TPrice => {
  const gold = Math.floor(copper / 10000);
  copper %= 10000;
  const silver = Math.floor(copper / 100);
  copper %= 100;

  return {
    gold: gold,
    silver: silver,
    copper: copper,
  };
};

export const calcQuantity = (quantity: number, needed: number): number => {
  const ratio = Math.round((quantity as number) / needed);
  const result = needed * ratio > 0 ? needed * ratio : needed;
  return result;
};

export const calcUnitPrice = (stackSize: number, stackPrice: TPrice): TPrice => {
  const copper = calcPriceToCopper(stackPrice);
  const unitCopper = copper / stackSize;
  const unitPrice = calcCopperToPrice(unitCopper);

  return unitPrice;
};

export const calcStackPrice = (stackSize: number, unitPrice: TPrice): TPrice => {
  const copper = calcPriceToCopper(unitPrice);
  const stackCopper = copper * stackSize;
  const stackPrice = calcCopperToPrice(stackCopper);

  return stackPrice;
};
