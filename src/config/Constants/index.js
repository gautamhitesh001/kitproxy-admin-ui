import logo from "../../assets/images/logo.png";
import fullLogo from "../../assets/images/logo_1.png";
import kitsuneLogoMain from "../../assets/images/kitsune_logo_main.svg";
import registrationLayoutIllustration from "../../assets/images/registration_layout_illustration.svg";
import resetPasswordEmailValidation from "../../assets/images/reset_password_email_validation.svg";
import resetPasswordSuccess from "../../assets/images/reset_password_success.svg";
import onboardingWelcome from "../../assets/images/onboarding_welcome.svg";
import onboardingResourceActiveKitsune from "../../assets/images/onboarding_resource_active_kitsune.svg";
import onboardingResourceInactiveKitsune from "../../assets/images/onboarding_resource_inactive_kitsune.svg";
import onboardingResourceDeploymentInProgress from "../../assets/images/onboarding_resource_deployment_in_progress.png";
import onboardingResourceDeploymentCompleted from "../../assets/images/onboarding_resource_deployment_completed.png";
import onboardingVerificationCompleted from "../../assets/images/onboarding_verification_completed.png";
import awsLogo from "../../assets/images/aws_logo.png";
import successWithTick from "../../assets/images/success.png";
import sampleCompanyLogo from "../../assets/images/sample_company_logo.png";
import networkError from "../../assets/images/network_error.svg";
import deviceNotSupported from "../../assets/images/device_not_supported.png";
import browserNotSupported from "../../assets/images/browser_not_supported.png";

import googleIcon from "../../assets/icons/google.svg";
import githubIcon from "../../assets/icons/github.svg";
import outlookIcon from "../../assets/icons/outlook.svg";
import awsIcon from "../../assets/icons/aws.svg";
import azureIcon from "../../assets/icons/microsoft_azure.svg";
import googleCloudIcon from "../../assets/icons/google_cloud.svg";
import awsIconGrey from "../../assets/icons/aws_grey.svg";
import azureIconGrey from "../../assets/icons/microsoft_azure_grey.svg";
import googleCloudIconGrey from "../../assets/icons/google_cloud_grey.svg";
import cloudIcon from "../../assets/icons/cloud.svg";
import cloudDullIcon from "../../assets/icons/cloud_dull.svg";
import playIconRight from "../../assets/icons/play_right.png";
import trashIcon from "../../assets/icons/trash.svg";

import packageJson from "../../../package.json";

export var ui_logo = logo;
export var ui_fullLogo = fullLogo;
export var ui_kitsuneLogoMain = kitsuneLogoMain;
export var ui_registrationLayoutIllustration = registrationLayoutIllustration;
export var ui_resetPasswordEmailValidation = resetPasswordEmailValidation;
export var ui_resetPasswordSuccess = resetPasswordSuccess;
export var ui_onboardingWelcome = onboardingWelcome;
export var ui_onboardingResourceActiveKitsune = onboardingResourceActiveKitsune;
export var ui_onboardingResourceInactiveKitsune = onboardingResourceInactiveKitsune;
export var ui_onboardingResourceDeploymentInProgress = onboardingResourceDeploymentInProgress;
export var ui_onboardingResourceDeploymentCompleted = onboardingResourceDeploymentCompleted;
export var ui_onboardingVerificationCompleted = onboardingVerificationCompleted;
export var ui_awsLogo = awsLogo;
export var ui_sampleCompanyLogo = sampleCompanyLogo;
export var ui_successWithTick = successWithTick;
export var ui_networkError = networkError;
export var ui_deviceNotSupported = deviceNotSupported;
export var ui_browserNotSupported = browserNotSupported;

export var icon_google = googleIcon;
export var icon_github = githubIcon;
export var icon_outlook = outlookIcon;
export var icon_azure = azureIcon;
export var icon_azure_grey = azureIconGrey;
export var icon_aws = awsIcon;
export var icon_aws_grey = awsIconGrey;
export var icon_google_cloud = googleCloudIcon;
export var icon_google_cloud_grey = googleCloudIconGrey;
export var icon_cloud = cloudIcon;
export var icon_cloud_dull = cloudDullIcon;
export var icon_play_right = playIconRight;
export var icon_trash = trashIcon;

console.log(packageJson.version);
export var app_version = "v" + packageJson.version;

export const roleConstants = {
	ADMIN_ROLE: "Admin",
	CUSTOMER_ROLE: "Customer",
};
