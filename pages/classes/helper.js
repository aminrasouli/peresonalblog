import moment from "jalali-moment";

class Helper {
    static formatDate(date) {
        return this.numberToFa(moment(date).locale('fa').format('D  MMM YYYY'));
    }
    static formatExpext(text) {
        return this.trunc(this.strip(text),230);
    }
    static numberToEn(value) {
        value = value.toString();
        let englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
            arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"],
            persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];

        for (let i = 0, numbersLen = persianNumbers.length; i < numbersLen; i++) {
            value = value.replace(new RegExp(persianNumbers[i], "g"), englishNumbers[i]);
        }
        for (let i = 0, numbersLen = arabicNumbers.length; i < numbersLen; i++) {
            value = value.replace(new RegExp(arabicNumbers[i], "g"), englishNumbers[i]);
        }
        return value;
    }

    static numberToFa(value) {
        value = value.toString();
        let englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
            arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"],
            persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];

        for (let i = 0, numbersLen = englishNumbers.length; i < numbersLen; i++) {
            value = value.replace(new RegExp(englishNumbers[i], "g"), persianNumbers[i]);
        }
        for (let i = 0, numbersLen = arabicNumbers.length; i < numbersLen; i++) {
            value = value.replace(new RegExp(arabicNumbers[i], "g"), persianNumbers[i]);
        }
        return value;
    }

    static trunc(t,n) {
        return (t.length > n) ? t.substr(0, n-1) + '...' : t;
    }
    static strip(str) {
        str=str.replace(/<\s*br\/*>/gi, "\n");
        str=str.replace(/<\s*a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 (Link->$1) ");
        str=str.replace(/<\s*\/*.+?>/ig, "\n");
        str=str.replace(/ {2,}/gi, " ");
        str=str.replace(/\n+\s*/gi, "\n\n");
        str=str.replace("&hellip;", "");
        return str;
    }

}
export default  Helper;