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
						form: null,
						subSettings: [],
					},
					{
						id: "overrideNoCacheHeader",
						title: "Override No Cache Header",
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						hasSwitch: true,
						form: null,
						subSettings: [],
					},
					{
						id: "cacheControlMaxAge",
						title: "Cache Control Max Age",
						subtext: "Desc Max Age Range",
						hasSwitch: true,
						form: null,
						subSettings: [],
					},
					{
						id: "cacheOriginCustomHeaders",
						title: "Cache Origin Custom Headers",
						subtext: "Strict Transport Security",
						hasSwitch: true,
						form: null,
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
						form: null,
						subSettings: [],
					},
					{
						id: "wafConfiguration",
						title: "WAF Configuration",
						subtext: "",
						hasSwitch: true,
						form: null,
						subSettings: [
							{
								id: "illegalFileTypeandPath",
								title: "Illegal File Type and Path",
								subtext: "Desc Illegal File Type",
								form: null,
							},
							{
								id: "whitelistPath",
								title: "Whitelist Path",
								subtext: "Desc Whitelist Path",
								form: null,
							},
							{
								id: "geolocation Configuration",
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
