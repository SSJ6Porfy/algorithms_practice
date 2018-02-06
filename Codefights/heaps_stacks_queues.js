function simplifyPath(path) {
    let arr = path.split("/");
    let stack = [];
    
    arr.forEach((el) => {
        if (el === "" || el === ".") {
            return null;
        } else if ( el === "..") {
            stack.pop();
        } else {
            stack.push("/" + el);
        }
    });
    
    if (stack.length === 0) {
        return "/";
    } else {
        return stack.join("");
    }
}
