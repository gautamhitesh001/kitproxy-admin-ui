import * as Yup from "yup";
import {
	ConfigurationMultiCheckboxForm,
	ConfigurationSingleTextFieldForm,
	ConfigurationSingleTextFieldwithListForm,
	ConfigurationSingleTextFieldWithTagsForm,
} from "../../components/forms";
import { ConfigurationMultiselectWithTags } from "../../components/forms/configuration/configurationMultiselectWithTags";

export const configurationSchema = [
	{
		tabTitle: "Security",
		index: 1,
		settingGroups: [
			{
				id: "accessControl",
				label: "Asset Control",
				settings: [
					{
						id: "queryParamsCacheKey",
						title: "Include Query Params for Cache Key",
						subtext: "Examples of Firewall Rules",
						form: null,
						subSettings: [],
					},
					{
						id: "overrideNoCacheHeader",
						title: "Override No Cache Header",
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						form: null,
						subSettings: [],
					},
					{
						id: "cacheControlMaxAge",
						title: "Cache Control Max Age",
						subtext: "Desc Max Age Range",
						form: [
							{
								id: "maxAgeForm",
								form: (
									<ConfigurationSingleTextFieldForm
										inputId="maxAge"
										inputLabel="Max Age"
										inputPlaceholder="eg 50"
										initValues={{}}
										submitFunc={() => {}}
										validationSchema={{
											maxAge: Yup.string().required("Please enter max age."),
										}}
									/>
								),
							},
						],
						subSettings: [],
					},
					{
						id: "cacheOriginCustomHeaders",
						title: "Cache Origin Custom Headers",
						subtext: "",
						form: [
							{
								id: "cacheOriginCustomHeadersForm",
								form: (
									<ConfigurationMultiCheckboxForm
										inputLabel="Select headers"
										initValues={{}}
										submitFunc={() => {}}
										validationSchema={{}}
										checkboxFields={[
											"Strict-Transport-Security",
											"X-Frame-Options",
											"Content-Securty-Policy",
											"Referrer-Policy",
											"Pragma",
											"X-Content-Security-Policy",
											"X-XSS-Protection",
										]}
									/>
								),
							},
						],

						subSettings: [],
					},
				],
			},
			{
				id: "originalFirewallConfiguration",
				label: "Origin Firewall Configuration",
				settings: [
					{
						id: "wafStatus",
						title: "WAF Status",
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						form: null,
						subSettings: [],
					},
					{
						id: "wafConfiguration",
						title: "WAF Configuration",
						subtext: "",
						form: null,
						subSettings: [
							{
								id: "illegalFileTypeandPath",
								title: "Illegal File Type and Path",
								subtext: "Desc Illegal File Type",
								form: [
									{
										id: "illegalFileTypeForm",
										form: (
											<ConfigurationSingleTextFieldWithTagsForm
												inputId="illegalFileType"
												inputLabel="Illegal File Type"
												inputPlaceholder=""
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													illegalFileType: Yup.string().required("Please enter value."),
												}}
											/>
										),
									},
									{
										id: "illegalFilePathForm",
										form: (
											<ConfigurationSingleTextFieldWithTagsForm
												inputId="illegalFilePath"
												inputLabel="Illegal File Path"
												inputPlaceholder=""
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													illegalFilePath: Yup.string().required("Please enter value."),
												}}
											/>
										),
									},
								],
							},
							{
								id: "whitelistPath",
								title: "Whitelisted Paths",
								subtext: "Description for Whitelisted Paths comes here",
								form: [
									{
										id: "whitelistedPathForm",
										form: (
											<ConfigurationSingleTextFieldwithListForm
												title="Whitelisted Paths"
												inputId="pathName"
												inputPlaceholder="Add path"
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													pathName: Yup.string().required("Please enter whitelist path."),
												}}
											/>
										),
									},
								],
							},
							{
								id: "geolocationConfiguration",
								title: "Geolocation Configuration",
								subtext: "Desc of Geolocation Configuration",
								form: [
									{
										id: "geoLocationForm",
										form: (
											<ConfigurationMultiselectWithTags
												inputId="countryInput"
												inputLabel=""
												inputPlaceholder="Add Countries"
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={
													{
														// illegalFileType: Yup.string().required("Please enter value."),
													}
												}
												extraHeader="Countries Added"
											/>
										),
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		tabTitle: "Acceleration",
		index: 2,
		settingGroups: [],
	},
	{
		tabTitle: "Custom Configuration",
		index: 3,
		settingGroups: [],
	},
];
