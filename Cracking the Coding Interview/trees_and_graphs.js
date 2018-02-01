class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


var productExceptSelf = function(nums) {
    const result = [];
  
    for (let i = 0; i < nums.length; i ++) {
      result.push(nums.reduce((product, number, idx) => {
        if (idx !== i) {
          console.log('Product/number/index: ', product, number, idx);
          return product * number;
        } else {
          return product;
        }
      }, 1))
    }
  
    return result;
  };
  
  
  console.log(productExceptSelf([1,2,3,4])); // [24, 12, 8, 6]
  console.log(productExceptSelf([2,3,4])); // [12, 8, 6]
  console.log(productExceptSelf([-1,1,-1])); // [-1, 1, -1]