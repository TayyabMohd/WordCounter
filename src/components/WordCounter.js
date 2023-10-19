import React from "react";

function WordCounter() {
  function WC() {
    const text = document.getElementById("inp");
    const value = text.value;

    var arr = value.split(" ");
    console.log(arr.length);
    document.getElementById("res").innerHTML = arr.length;
    return;
  }
  return (
    <div>
      <label for="inp">Responsive Paragraph Word Counter</label>
      <br />
      <textarea type="text" name="inp" id="inp"></textarea>
      <br />
      <button onClick={WC}>Count</button>
      <br />
      Word Count: <span id="res" name="res"></span>
    </div>
  );
}

export default WordCounter;
