'use strict';

/*export function isBalanced(str) {
  const open_brackets = ['(', '[', '{'];
  const close_brackets = [')', ']', '}'];
  let arr = [];
  for (let sym of str) {
    if (open_brackets.includes(sym)) {
      arr.push(sym);
    } else {
      let index = close_brackets.indexOf(sym);
      if (index != -1) {
        if (arr[arr.length - 1] != open_brackets[index]) {
          return false;
        } else {
          arr.pop();
        }
      }
    }
  }
  return true;
}*/

export function isBalanced(str) {
  const brackets = {')': '(', ']': '[', '}': '{'};
  let work_arr = [];

  for (const sym of str) {
    if (Object.values(brackets).includes(sym)) {
      work_arr.push(sym);
    } else if (Object.keys(brackets).includes(sym)) {
      if (work_arr[work_arr.length - 1] != brackets[sym]) {
        return false;
      } else {
        work_arr.pop();
      }
    }
  }
  return true;
}
