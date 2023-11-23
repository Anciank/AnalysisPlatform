// CodeInput.tsx

import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/snippets/sql'; 
import './CodeInput.css';

interface CodeInputProps {
  onRun: (code: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ onRun }) => {
  const [sqlQuery, setSqlQuery] = useState('');

  const handleChange = (value: string) => {
    setSqlQuery(value);
  };

  const handleRunClick = () => {
    onRun(sqlQuery);
  };

  return (
    <div className='CodeInput'>
      <AceEditor
        className='editor'
        mode="sql"
        theme="github"
        onChange={handleChange}
        name="sql-editor"
        editorProps={{ $blockScrolling: true }}
        fontSize={14}
        width="100%"
        height="5vh"
        showPrintMargin={false}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          minLines: 5,
          maxLines: Infinity,
        }}
      />

      <button className='runButton' onClick={handleRunClick}>Run SQL Query</button>
    </div>
  );
};

ace.config.set('basePath', '/path/to/ace');

export default CodeInput;
