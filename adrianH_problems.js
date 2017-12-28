// Here she is:
// write a function that takes 2 parameters, S and T
// S will be a string, for example "Hello ${val1} and ${val2}!"
// T will be a string, for example "{"val1":"Sarah","val2":"Jane"}"
// your output should return "Hello Sarah and Jane!"

function interpolateVals(str1, str2) {
    let valObj = JSON.parse(str2);
    let keys = Object.keys(valObj);

    keys.forEach(key => {
        str1 = str1.replace("${" + `${key}` + "}", valObj[key]);
    });

    return str1;
}

var str1 = "Hello ${val1} and ${val2}!";
var str2 = '{"val1":"Sarah","val2":"Jane"}';

console.log(interpolateVals(str1, str2));
