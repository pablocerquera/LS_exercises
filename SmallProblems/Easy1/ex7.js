function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    let short = str1;
    let long = str2;
    console.log(`${short}${long}${short}`);
  } else {
    console.log(`${str2}${str1}${str2}`);
  }
}


shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"