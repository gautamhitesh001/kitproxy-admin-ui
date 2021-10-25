import { OnboardingLayout } from "../../../layouts/onboarding";
import { useState } from "react";
import { CustomStepper } from "../../../components/customStepper";
import { UpdateDNS } from "./updateDns";
import { VerifyDNS } from "./verifyDns";
import { WebsiteAnalysis } from "./websiteAnalysis";
import { Resource } from "./resourceSelect";
import { VerificationComplete } from "./verificationCompleted";

const stepperLabelData = ["Website Analysis", "Resource", "Update DNS", "Verify DNS"];

export const OnboardingMain = () => {
	const [activeStep, setActiveStep] = useState(4);

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
				return <VerificationComplete />;
		}
	};

	return (
		<OnboardingLayout showWebsite={activeStep > 0} website="mywebsite.com">
			<CustomStepper stepperLabelData={stepperLabelData} activeStep={activeStep} />
			{displayActiveStep()}
		</OnboardingLayout>
	);
};
