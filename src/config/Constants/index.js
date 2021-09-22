import logo from "../../assets/logo.png";
import fullLogo from "../../assets/logo_1.png";
import registrationLayoutLogo from "../../assets/registration_layout_kitsune_logo.svg";
import registrationLayoutBg from "../../assets/registration_layout_bg.png";
import packageJson from "../../../package.json";

export var ui_logo = logo;
export var ui_fullLogo = fullLogo;
export var ui_registrationLayoutLogo = registrationLayoutLogo;
export var ui_registrationLayoutBg = registrationLayoutBg;

console.log(packageJson.version);
export var app_version = "v" + packageJson.version;

export const roleConstants = {
	ADMIN_ROLE: "Admin",
	CUSTOMER_ROLE: "Customer",
};
