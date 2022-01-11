function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
  }


function mondayWork(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`);
  }


  function wrapAdjective(a = "*") {
    const innerFunction =function (b = "special") {
      return `You are ${a}${b}${a}!`;
    };
    return innerFunction;
  }