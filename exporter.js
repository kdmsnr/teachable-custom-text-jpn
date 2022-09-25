// Execute in developer console in Google Chrome
let output = "";
let elements = $$(".CustomTextTable_container__1ry3X");
elements.forEach(e => {
  let category = e.firstChild.firstChild.firstChild.textContent;
  let table = e.lastChild;
  let trs = table.lastChild.childNodes;

  trs.forEach(tr => {
    let key = tr.firstChild.firstChild.lastChild.firstChild.textContent.trim();
    let en = tr.childNodes[1].firstChild.lastChild.firstChild;
    let ja = tr.lastChild.firstChild.lastChild.firstChild.firstChild;

    if (en == null) {en = ""};
    if (ja == null) {ja = ""};

    let line = category + "," + key + ",'" + en.textContent + "'," + ja.textContent + "\n";
    console.log(line);
    output += line;
  });
});
copy(output);
