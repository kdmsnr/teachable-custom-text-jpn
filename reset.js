// Execute in developer console in Google Chrome
let elements = $$(".CustomTextTable_container__1ry3X");
elements.forEach(e => {
  let category = e.firstChild.firstChild.firstChild.textContent;
  let table = e.lastChild;
  let trs = table.lastChild.childNodes;

  trs.forEach(tr => {
    let en = tr.childNodes[1].firstChild.lastChild.firstChild;
    let ja = tr.lastChild.firstChild.lastChild.firstChild.firstChild;

    if (en == null) {en = ""};
    if (ja == null) {ja = ""};

    let content = en.textContent;

    let nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
    nativeTextAreaValueSetter.call(ja, content);

    ja.dispatchEvent(new InputEvent('input', {bubbles: true}));
  });
});
