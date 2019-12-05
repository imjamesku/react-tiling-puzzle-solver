import React from 'react'
import Button from '@material-ui/core/Button'
const ImportFromFileBodyComponent = ({ setInput }) => {
    let fileReader;

    const handleFileRead = (e) => {
        const content = fileReader.result;
        console.log(content);
        setInput(content)
        // … do something with the 'content' …
    };

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };

    return <div className='upload-expense'>
        <Button variant="contained" component="label">
            Select File
            <input type='file'
                id='file'
                className='input-file'
                style={{ display: "none" }}
                // accept='.csv'
                onChange={e => handleFileChosen(e.target.files[0])}
            />
        </Button>

    </div>;
};

export default ImportFromFileBodyComponent