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
    let nextSetTabNumber = null;
    let minAbsValue = null;
    currentTabAry.forEach((v) => {
      let diff = v - targetTabNumber;
      let tmp = diff < 0 ? -diff : diff;

      // 全ての currentTabAry が targetTabNumber より小さかった場合に返す、
      // 絶対値が最も小さいタブの番号を格納しておく
      if (!minAbsValue || tmp < minAbsValue) {
        minAbsValue = v;
      }

      if (diff < 0 || diff === 0) return;
      if (!nextSetTabNumber) {
        nextSetTabNumber = v;
      } else {
        if (nextSetTabNumber < diff) return;
        nextSetTabNumber = v;
      }
    });
    // 全ての currentTabAry が targetTabNumber より小さかった場合、絶対値が最も小さいタブの番号を返す
    if (!nextSetTabNumber) {
      nextSetTabNumber = minAbsValue;
    }
    return nextSetTabNumber;
  };
}
