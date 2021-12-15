import * as Yup from "yup";

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
						hasSwitch: true,
						doesHeaderHaveFormEdit: false,
						hasDivider: false,
						form: null,
						subSettings: [],
					},
					{
						id: "overrideNoCacheHeader",
						title: "Override No Cache Header",
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						hasSwitch: true,
						doesHeaderHaveFormEdit: false,
						hasDivider: false,
						form: null,
						subSettings: [],
					},
					{
						id: "cacheControlMaxAge",
						title: "Cache Control Max Age",
						subtext: "Desc Max Age Range",
						hasSwitch: true,
						hasDivider: true,
						form: [
							{
								id: "maxAgeForm",
								handleSubmit: () => {},
								initialValues: {},
								validationSchema: {
									maxAge: Yup.string().required("Please enter max age."),
								},
								isFormSingleField: true,
								hasSaveCancelBtn: false,
								hasEdit: true,
								formType: "singleField",
								formLabel: "Max Age",
								fields: [
									{
										id: "maxAge",
										label: "Max Age",
										placeholder: "eg 50",
										type: "text",
									},
								],
							},
						],
						subSettings: [],
					},
					{
						id: "cacheOriginCustomHeaders",
						title: "Cache Origin Custom Headers",
						subtext: "Strict Transport Security",
						hasSwitch: true,
						doesHeaderHaveFormEdit: false,
						hasDivider: true,
						form: [
							{
								id: "cacheOriginCustomHeadersForm",
								handleSubmit: () => {},
								initialValues: {},
								validationSchema: {},
								isFormSingleField: true,
								hasSaveCancelBtn: true,
								hasEdit: true,
								formType: "multipleCheckbox",
								formLabel: "Select headers",
								fields: [
									{
										id: "xFrameOptions",
										label: "X-Frame-Options",
										type: "checkbox",
									},
									{
										id: "contentSecurtyPolicy",
										label: "Content-Securty-Policy",
										type: "checkbox",
									},
									{
										id: "referrerPolicy",
										label: "Referrer-Policy",
										type: "checkbox",
									},
									{
										id: "pragma",
										label: "Pragma",
										type: "checkbox",
									},
									{
										id: "xContentSecurityPolicy",
										label: "X-Content-Security-Policy",
										type: "checkbox",
									},
									{
										id: "xXSSProtection",
										label: "X-XSS-Protection",
										type: "checkbox",
									},
								],
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
						hasSwitch: true,
						doesHeaderHaveFormEdit: false,
						hasDivider: false,
						form: null,
						subSettings: [],
					},
					{
						id: "wafConfiguration",
						title: "WAF Configuration",
						subtext: "",
						hasSwitch: true,
						doesHeaderHaveFormEdit: false,
						hasDivider: false,
						form: null,
						subSettings: [
							{
								id: "illegalFileTypeandPath",
								title: "Illegal File Type and Path",
								subtext: "Desc Illegal File Type",
								form: [
									{
										id: "illegalFileTypeForm",
										handleSubmit: () => {},
										initialValues: {},
										validationSchema: {},
										isFormSingleField: true,
										hasSaveCancelBtn: true,
										hasEdit: true,
										formType: "singleFieldWithTags",
										formLabel: "Illegal File Type",
										fields: [
											{
												id: "illegalFileType",
												label: "",
												placeholder: "",
												type: "textWithTags",
											},
										],
									},
									{
										id: "illegalFilePathForm",
										handleSubmit: () => {},
										initialValues: {},
										validationSchema: {},
										isFormSingleField: true,
										hasSaveCancelBtn: true,
										hasEdit: true,
										formType: "singleFieldWithTags",
										formLabel: "Illegal File Path",
										fields: [
											{
												id: "illegalFilePath",
												label: "",
												placeholder: "",
												type: "textWithTags",
											},
										],
									},
								],
							},
							{
								id: "whitelistPath",
								title: "Whitelist Path",
								subtext: "Desc Whitelist Path",
								form: null,
							},
							{
								id: "geolocationConfiguration",
								title: "Geolocation Configuration",
								subtext: "Desc of Geolocation Configuration",
								form: null,
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
