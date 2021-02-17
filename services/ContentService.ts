export class ContentService {
  /**
   * 今日の年齢を算出する
   */
  public static getAge = (year = 1995, month = 7, day = 31): number => {
    const birthdayDate = new Date(year, month - 1, day);
    const todayDate = new Date();

    let age = todayDate.getFullYear() - birthdayDate.getFullYear();

    const currentYearDate = new Date(todayDate.getFullYear(), birthdayDate.getMonth(), birthdayDate.getDate());

    if (currentYearDate > todayDate) age -= 1;

    return age;
  };
}
