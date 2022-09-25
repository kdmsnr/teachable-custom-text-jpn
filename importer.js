// Execute in developer console in Google Chrome

// FIXME:
// let tsv = `
// CATEGORY	KEY	DEFAULT	CURRENT
// category1	key1	default1	current1
// category2	key2	default2	current2
// `;

let nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
let lines = tsv.split("\n");
for (let i = 0; i < lines.length; i++) {
  let e = lines[i].split("\t");
  let val = e[3];

  // skip
  // 「%」が含まれるとエラーになるっぽい。エスケープが必要？あとで考える。
  if (val && val.includes("%")) {
    continue;
  }

  // idでは要素が一意に決まらない！
  let target = "#" + e[1] + "-current";
  if ($$(target)) {
    $$(target).forEach(t => {
      nativeTextAreaValueSetter.call(t, val);
      t.dispatchEvent(new Event('input', {bubbles: true}));
    });
  }
}

// References:
// * https://stackoverflow.com/questions/42511470/use-javascript-to-set-value-of-textbox-when-value-and-events-dont-seem-to-work
// * https://stackoverflow.com/questions/61107351/simulate-change-event-to-enter-text-into-react-textarea-with-vanilla-js-script
