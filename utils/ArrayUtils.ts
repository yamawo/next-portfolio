/**
 * 指定した値(number)の配列を除外する
 * @param baseAry 元となる配列
 * @param excludeAry 除外したい値の配列
 */
export const excludeNumberArray = (baseAry: number[], excludeAry: number[]): number[] => {
  return baseAry.filter((v) => !excludeAry.includes(v));
};
