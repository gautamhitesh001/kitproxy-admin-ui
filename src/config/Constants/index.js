import logo from "../../assets/images/logo.png";
import fullLogo from "../../assets/images/logo_1.png";
import registrationLayoutLogo from "../../assets/images/registration_layout_kitsune_logo.svg";
import registrationLayoutIllustration from "../../assets/images/registration_layout_illustration.svg";
import resetPasswordEmailValidation from "../../assets/images/reset_password_email_validation.svg";
import resetPasswordSuccess from "../../assets/images/reset_password_success.svg";

import googleIcon from "../../assets/icons/google.svg";
import githubIcon from "../../assets/icons/github.svg";
import outlookIcon from "../../assets/icons/outlook.svg";

import packageJson from "../../../package.json";

export var ui_logo = logo;
export var ui_fullLogo = fullLogo;
export var ui_registrationLayoutLogo = registrationLayoutLogo;
export var ui_registrationLayoutIllustration = registrationLayoutIllustration;
export var ui_resetPasswordEmailValidation = resetPasswordEmailValidation;
export var ui_resetPasswordSuccess = resetPasswordSuccess;

export var icon_google = googleIcon;
export var icon_github = githubIcon;
export var icon_outlook = outlookIcon;

console.log(packageJson.version);
export var app_version = "v" + packageJson.version;

export const roleConstants = {
	ADMIN_ROLE: "Admin",
	CUSTOMER_ROLE: "Customer",
};
