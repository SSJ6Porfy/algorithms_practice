class Node {
    constructor(val) {
        this.val = val;
        this.children = {};
        this.completeWord = false;
    }
}

function makeTrie(root, part) {
    if (part === "") {
        root.completeWord = true;
        return root;
    }
    let newNode = new Node(part[0]);
    if (!root.children[part[0]]) {
        root.children[part[0]] = newNode;
    } else {
        newNode = root.children[part[0]];
    }
    makeTrie(newNode, part.slice(1));
    return root;
}

function findSubstrings(words, parts) {
    let result = [];
    let root = new Node(null);
    
    for (let i = 0; i <parts.length; i++) {
        makeTrie(root, parts[i]);  
    };
    
    for (let i = 0; i < words.length; i++) {
        let long = 0;
        let idx = 0;
        let currWord = words[i];
        
        let j = 0
        let currLong = 0
        let currIdx = 0
        while (j < currWord.length) {
            let currNode = checkWord(root, currWord[j])
            let last = j + 1;
            while (currNode) {
                if (!currNode.completeWord && currLong === 0) {
                    currIdx = j;
                    currLong += 1;
                } else if (!currNode.completeWord) {
                    currLong += 1
                } else if (currNode.completeWord && currLong === 0) {
                    currLong += 1;
                    currIdx = j
                    if (currLong > long) {
                        long = currLong;
                        idx = currIdx;
                    }
                } else if (currNode.completeWord) {
                    currLong += 1;
                    if (currLong > long) {
                        long = currLong;
                        idx = currIdx;
                    }
                } else {
                    currLong = 0;
                    currIdx = 0;
                }
                j += 1;
                currNode = checkWord(currNode, currWord[j]);
            }
            if (!currNode) {
                currIdx = j;
                currLong = 0;
                j = last;
                
            }
        }
        
        if (long) {
            let begin = currWord.substr(0, idx);
            let mid = currWord.substr(idx, long);
            let end = currWord.substr(idx + long, currWord.length - 1);
            result.push(begin + '[' + mid + ']' + end);
        } else {
            result.push(currWord);
        }
    }
    return result;
}

function checkWord(tree, chr) {
    if (!tree) { return false; }
    return tree.children[chr];
}
