import React, { useState } from "react";
import Buttons from './Buttons'
import { CardTitle } from './Shared'
import { CardLayout } from './Shared/styled'
import Week1 from "./Week1";
import Week2 from "./Week2";

const HomeContent = () => {
    const [step, setStep] = useState(0);

    const steps = [
        "Week 1",
        "Week 2",
    ];

    const handleStep = (id) => {
        setStep(id);
    }

    function _renderStepContent(step) {
        switch (step) {
            case 0: return <Week1></Week1>;
            case 1: return <Week2></Week2>;
        }
    }

    return (
        <CardLayout>
            <Buttons handleStep={handleStep} step={step}></Buttons>
            <div className="card">
                <CardTitle steps={steps} activeStep={step}>
                </CardTitle>
                <div className="card__content">
                    {_renderStepContent(step)}
                </div>
            </div>
        </CardLayout>
    )
}

export default HomeContent