import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(Emoji) {
  return (
    <Entry
      key={Emoji.id}
      emoji={Emoji.emoji}
      name={Emoji.name}
      description={Emoji.meaning}
    />
  );
  //left side things should be in the Entry.jsx props
  //right side things should be in the contacts.js 
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
