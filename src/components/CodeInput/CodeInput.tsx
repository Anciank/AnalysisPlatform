// CodeInput.tsx

import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/snippets/sql'; 
import './CodeInput.css';

interface CodeInputProps {
  runCodeInput: (code: string) => void;
  defaultQuery?: string;
}

const CodeInput: React.FC<CodeInputProps> = ({ runCodeInput, defaultQuery = `-- Your code here` }) => {
  const [sqlQuery, setSqlQuery] = useState(defaultQuery);

  useEffect(() => {
    // Update the state if the defaultQuery prop changes
    setSqlQuery(defaultQuery);
  }, [defaultQuery]);

  const handleChange = (value: string) => {
    setSqlQuery(value);
  };

  const handleRunClick = () => {
    runCodeInput(sqlQuery);
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
        //value={defaultQuery}
      />

      <button className='runButton' onClick={handleRunClick}>Run SQL Query</button>
    </div>
  );
};

ace.config.set('basePath', '/path/to/ace');

export default CodeInput;
