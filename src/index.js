module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[0][0] === str[i]) {
                if (str[str.length - 1] === bracketsConfig[j][0] && str[0] !== bracketsConfig[j][1] || str.length % 2 !== 0) {
                    return false;
                } else
                    if (bracketsConfig[0][0] === str[i]) {
                        if (bracketsConfig[j][0] === str[i] && bracketsConfig[j][1] === str[i + 2]) {
                            return false;
                        }
                        if (bracketsConfig[j][1] === str[i + 1]) {
                            str = str.split(bracketsConfig[j][0], bracketsConfig[j][1]).join('');
                        } else if (bracketsConfig[j][1] !== str[i + 1]) {
                            str = str.split(bracketsConfig[j][0], bracketsConfig[j][1]).join('');
                        }
                    }
            }
        }
    }
    return str === '';
}
