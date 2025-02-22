/* https://stepik.org/lesson/1408057/step/1 */

console.log(getTimeBySeconds(68750));

function getTimeBySeconds(sec) {
    return `${hoursFromSeconds(sec)}:${minutesFromSeconds(sec)}:${secondsFromSeconds(sec)}`;

    function hoursFromSeconds(seconds, pack = true) {
        let hours = Math.floor(seconds / 3600);
        if (hours >= 24) {
            hours = hoursFromSeconds(seconds - 60 * 60 * 24, false);
        }
        return packer(hours);
    }

    function minutesFromSeconds(seconds, pack = true) {
        let minutes = Math.floor(seconds / 60);
        if (minutes >= 60) {
            minutes = minutesFromSeconds(seconds - 60 * 60, false);
        }
        return packer(minutes);
    }

    function secondsFromSeconds(seconds, pack = true) {
        return packer(seconds % 60);
    }

    function packer(number, pack = true) {
        if (typeof number === `string`) {
            return number;
        }
        if (pack) {
            if (number / 10 >= 1) {
                return `${number}`;
            }
            if (number % 10 >= 1) {
                return `0${number}`;
            }
            return `00`;
        }
    }
}
