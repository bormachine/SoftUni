function echoType(param) {
  let type = typeof param;
  //print data type
  console.log(type);

  if (type == "string" || type == "number") {
    console.log(param);
  } else {
    console.log(`Parameter is not suitable for printing`);
  }
  //print value if type is string o number
  //else print error message
}

echoType("Hello Man");
echoType(18);
echoType(null);
