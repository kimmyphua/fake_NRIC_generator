import React from 'react'
import { Button } from 'antd';

function GenerateButton({loading, handleClick}) {
    return (
        <div>
             <Button title="generateButton" type="primary" loading={loading} onClick={handleClick}>
                Generate Random NRIC
            </Button>
        </div>
    )
}

export default GenerateButton
