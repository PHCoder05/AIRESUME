import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import template1Img from 'path/to/template1Img'; // Import template images
import template2Img from 'path/to/template2Img';
import template3Img from 'path/to/template3Img';
import template4Img from 'path/to/template4Img';

function TemplateSelection() {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const navigate = useNavigate();

    const handleTemplateSelect = (template) => {
        setSelectedTemplate(template);
    };

    const handleContinue = () => {
        if (selectedTemplate) {
            // Redirect to the resume editor with the selected template
            navigate(`/dashboard/resume/${selectedTemplate}/edit`);
        }
    };

    return (
        <div className="template-selection">
            <h2>Select a Template for Your Resume</h2>
            <div className="template-options">
                <div onClick={() => handleTemplateSelect('template1')}>
                    <img src={template1Img} alt="Template 1" />
                    <p>Template 1</p>
                </div>
                <div onClick={() => handleTemplateSelect('template2')}>
                    <img src={template2Img} alt="Template 2" />
                    <p>Template 2</p>
                </div>
                <div onClick={() => handleTemplateSelect('template3')}>
                    <img src={template3Img} alt="Template 3" />
                    <p>Template 3</p>
                </div>
                <div onClick={() => handleTemplateSelect('template4')}>
                    <img src={template4Img} alt="Template 4" />
                    <p>Template 4</p>
                </div>
            </div>
            <button onClick={handleContinue} disabled={!selectedTemplate}>
                Continue
            </button>
        </div>
    );
}

export default TemplateSelection;
