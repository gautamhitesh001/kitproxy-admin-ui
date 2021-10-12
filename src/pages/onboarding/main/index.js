import { OnboardingLayout } from "../../../layouts/onboarding";
import { useState } from "react";
import { CustomStepper } from "../../../components/custom-stepper";
import { WebsiteAnalysis } from "./websiteAnalysis";
import { Resource } from "./resource";
import { UpdateDNS } from "./updateDNS";
import { VerifyDNS } from "./verifyDNS";

const stepperLabelData = ["Website Analysis", "Resource", "Update DNS", "Verify DNS"];

export const OnboardingMain = () => {
	const [activeStep, setActiveStep] = useState(0);

	const handleNextStep = () => {
		setActiveStep(activeStep + 1);
	};

	const displayActiveStep = () => {
		switch (activeStep) {
			case 0:
				return <WebsiteAnalysis />;
			case 1:
				return <Resource />;
			case 2:
				return <UpdateDNS />;
			case 3:
				return <VerifyDNS />;

			default:
				return null;
		}
	};

	return (
		<OnboardingLayout>
			<CustomStepper stepperLabelData={stepperLabelData} activeStep={activeStep} />
			{displayActiveStep()}
		</OnboardingLayout>
	);
};
