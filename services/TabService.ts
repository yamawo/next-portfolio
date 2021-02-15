export class TabService {
  /**
   * 元の配列を元に、 0 から始まる number の配列を生成する
   * ex) tabList = ["a", "b"] の時、 return = [0, 1]
   * @param number の配列に変換したい配列
   */
  public static makeTabNumberAry = (tabList: string[]): number[] => {
    return tabList.map((_, index) => {
      return index;
    });
  };

  /**
   * 次に selected にするタブを求める
   * @param currentTabAry 今画面上に存在しているタブの配列
   * @param targetTabNumber 今回削除されたタブの数字
   * @param tabList 元になるタブの配列
   */
  public static selectNextTab = (currentTabAry: number[], targetTabNumber: number, tabList: string[]): number => {
    if (targetTabNumber === tabList.length) {
      return currentTabAry.slice(-1)[0];
    }

    let nextSetTabNumber;
    let tmp;
    currentTabAry.forEach((v, index) => {
      let diff = v - targetTabNumber;
      if (index === 0) {
        tmp = diff;
      } else {
        // tmp がマイナスかどうかみわけなあかん
        if (tmp < diff) return;
      }
    });
  };
}
