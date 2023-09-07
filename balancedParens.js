function balancedParens(input) {
    const stack = [];
  
    for (let char of input) {
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      } else if (char === ')' || char === ']' || char === '}') {
        const last = stack.pop();
  
        if (!last || !Matching(last, char)) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  function Matching(open, clos) {
    return (
      (open === '(' && clos=== ')') ||(open === '[' && clos=== ']') ||(open === '{' && clos=== '}')
    );
  }
  

  console.log(balancedParens('(')); // false
  console.log(balancedParens('()')); // true
  console.log(balancedParens(')(')); // false
  console.log(balancedParens('(())')); // true
  console.log(balancedParens('[](){}')); // true
  console.log(balancedParens('[({})]')); // true
  console.log(balancedParens('[(]{)}')); // false
  console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
  console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
  


