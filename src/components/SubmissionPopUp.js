import React from 'react'

const SubmissionPopUp = (props) => {
    console.log('subission props', props);
    return (
        <div id="submission-pop-up">
            {
                props.success ?
                "Submitted successfully!" : "there was an error please try again"
            }
        </div>
    )
}

export default SubmissionPopUp;