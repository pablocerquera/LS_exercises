
function cleanUp(string) {
  console.log(string.replace(/[^A-Za-z]+/gi, " "));
}

cleanUp("---what's my +*& line?");    // " what s my line "
cleanUp("&(*&3) how 0972()& well ()&09378 does this work?");