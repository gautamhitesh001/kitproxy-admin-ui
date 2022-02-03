import * as Yup from "yup";
import {
	ConfigurationMultiCheckboxForm,
	ConfigurationSingleRadioOptions,
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
				id: "cacheOriginCustomHeaders",
				label: "Custom Security Headers",
				subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
				settings: [
					{
						id: "cacheOriginCustomHeaders",
						title: "Custom Security Headers",
						form: [
							{
								id: "cacheOriginCustomHeadersForm",
								form: (
									<ConfigurationMultiCheckboxForm
										inputLabel="Select headers"
										id="cacheOriginCustomHeader"
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
				id: "firewallConfiguration",
				label: "Origin Firewall Configuration",
				settings: [
					{
						id: "wafStatus",
						switchId: "wafStatus",
						isSwitchBoolean: false,
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
												inputId="illegalFileTypeRegex"
												inputLabel="Illegal File Type"
												inputPlaceholder=""
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													illegalFileTypeRegex: Yup.string().required("Please enter value."),
												}}
											/>
										),
									},
									{
										id: "illegalFilePathForm",
										form: (
											<ConfigurationSingleTextFieldWithTagsForm
												inputId="illegalFilePathRegex"
												inputLabel="Illegal File Path"
												inputPlaceholder=""
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													illegalFilePathRegex: Yup.string().required("Please enter value."),
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
												inputId="whitelistedPathRegex"
												inputPlaceholder="Add path"
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													whitelistedPathRegex: Yup.string().required("Please enter whitelist path."),
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
												sectionid="geolocationConfiguration"
												inputId="whitelistedCountryCodes"
												inputLabel=""
												inputPlaceholder="Add Countries"
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={
													{
														// countryInput: Yup.string().required("Please enter value."),
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
		settingGroups: [
			{
				id: "cacheConfig_status",
				label: "Cache Control",
				hasParent: true,
				parentId: "assetsControl",
				hasConfig: true,
				configKey: "configs",
				settings: [
					{
						id: "cacheConfig_status",
						switchId: "cacheConfig_status",
						isSwitchBoolean: false,
						title: "Cache Config Status",
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						form: null,
						subSettings: [],
					},
					{
						id: "queryParamsCacheKey",
						switchId: "includeQueryParamsForCacheKey",
						isSwitchBoolean: true,
						title: "Include Query Params for Cache Key",
						subtext: "Examples of Firewall Rules",
						form: null,
						subSettings: [],
					},
					{
						id: "overrideNoCacheHeader",
						switchId: "overrideNoCacheHeader",
						isSwitchBoolean: true,
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
										inputId="cacheControlMaxAge"
										inputLabel="Max Age"
										inputPlaceholder="eg 50"
										initValues={{}}
										submitFunc={() => {}}
										validationSchema={{
											cacheControlMaxAge: Yup.string().required("Please enter max age."),
										}}
									/>
								),
							},
						],
						subSettings: [],
					},
				],
			},
			{
				id: "pathIdentification",
				label: "Path Identification",
				settings: [
					{
						id: "requestMethodIdentifier",
						title: "Request Method Identifier",
						subtext: "",
						form: [
							{
								id: "requestMethodIdentifierForm",
								form: (
									<ConfigurationMultiCheckboxForm
										id="requestMethodIdentifier"
										inputLabel="Here will come the description"
										initValues={{}}
										submitFunc={() => {}}
										validationSchema={{}}
										checkboxFields={["GET", "POST", "PUT", "DELETE"]}
									/>
								),
							},
						],
						subSettings: [],
					},
					{
						id: "staticAssetIdentifier",
						title: "Static Asset Identifier",
						subtext: "Here will come the description",
						form: [
							{
								id: "staticAssetIndentifierForm",
								form: (
									<ConfigurationSingleTextFieldWithTagsForm
										inputId="staticAssetIdentifierRegex"
										inputLabel="Illegal File Type"
										inputPlaceholder=""
										initValues={{}}
										submitFunc={() => {}}
										validationSchema={{
											staticAssetIdentifierRegex: Yup.string().required("Please enter value."),
										}}
									/>
								),
							},
						],
						subSettings: [],
					},
					{
						id: "htmlAssetIdentifier",
						title: "HTML Asset Identifier",
						subtext: "Here will come the description",
						form: [
							{
								id: "htmlAssetIdentifierForm",
								form: (
									<ConfigurationSingleTextFieldwithListForm
										title="Whitelisted Paths"
										inputId="htmlAssetIdentifierRegex"
										inputPlaceholder="eg50"
										initValues={{}}
										submitFunc={() => {}}
										validationSchema={{
											htmlAssetIdentifierRegex: Yup.string().required("Please enter whitelist path."),
										}}
									/>
								),
							},
						],
						subSettings: [],
					},
					{
						id: "homePageIdentifier",
						title: "Home Page Identifier",
						subtext: "Here will come the description",
						form: [
							{
								id: "homePageIdentifierForm",
								form: (
									<ConfigurationSingleTextFieldForm
										inputId="homePageIdentifierRegex"
										inputLabel="Set Home Page"
										inputPlaceholder="index.html"
										initValues={{}}
										submitFunc={() => {}}
										validationSchema={{
											homePageIdentifierRegex: Yup.string().required("Please enter max age."),
										}}
									/>
								),
							},
						],
						subSettings: [],
					},
					{
						id: "excludeStaticURL",
						title: "Exclude static URL",
						subtext: "Here will come the description",
						form: [
							{
								id: "excludeStaticURLForm",
								form: (
									<ConfigurationSingleTextFieldwithListForm
										title="Whitelisted Paths"
										inputId="excludeStaticUrlRegex"
										inputPlaceholder="eg50"
										initValues={{}}
										submitFunc={() => {}}
										validationSchema={{
											excludeStaticUrlRegex: Yup.string().required("Please enter whitelist path."),
										}}
									/>
								),
							},
						],
						subSettings: [],
					},
				],
			},
			{
				id: "optimizationConfig",
				label: "Optmization Configuration",
				hasParent: true,
				parentId: "assetsControl",
				settings: [
					{
						id: "minifyJS",
						switchId: "minifyJs",
						isSwitchBoolean: true,
						title: "Minify JS",
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						form: null,
						subSettings: [],
					},
					{
						id: "minifyCSS",
						switchId: "minifyCss",
						isSwitchBoolean: true,
						title: "Minify CSS",
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						form: null,
						subSettings: [],
					},
					{
						id: "minifyHTML",
						switchId: "minifyHtml",
						isSwitchBoolean: true,
						title: "Minify HTML",
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						form: null,
						subSettings: [],
					},
					{
						id: "minifyInlineCSS",
						switchId: "minifyInlineCss",
						isSwitchBoolean: true,
						title: "Minify Inline CSS",
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						form: null,
						subSettings: [],
					},
					{
						id: "minifyInlineJS",
						switchId: "minifyInlineJs",
						isSwitchBoolean: true,
						title: "Minify Inline JS",
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						form: null,
						subSettings: [],
					},
					{
						id: "imageOptimization",
						title: "Image Optmization ",
						subtext: "Allowed Relative Max Total Size: numeric value, size, Eg: 1000000 / 1 MB",
						form: null,
						subSettings: [
							{
								id: "includeImageOptimization",
								title: "Include Image Optmization",
								subtext: "Allowed Relative Max Total Size: numeric value, size, Eg: 1000000 / 1 MB",
								form: [
									{
										id: "includeImageOptimizationForm",
										form: (
											<ConfigurationSingleTextFieldwithListForm
												title="Whitelisted Paths"
												inputId="imageOptimization_config_includeImageOptimizationPathRegex"
												inputPlaceholder="Path or Domain"
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													imageOptimization_config_includeImageOptimizationPathRegex: Yup.string().required("Please enter whitelist path."),
												}}
											/>
										),
									},
								],
								subSettings: [],
							},
							{
								id: "excludeImageOptimization",
								title: "Exclude Image Optmization",
								subtext: "Allowed Relative Max Total Size: numeric value, size, Eg: 1000000 / 1 MB",
								form: [
									{
										id: "excludeImageOptimizationForm",
										form: (
											<ConfigurationSingleTextFieldwithListForm
												title="Whitelisted Paths"
												inputId="imageOptimization_config_excludeImageOptimizationPathRegex"
												inputPlaceholder="Path or Domain"
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													imageOptimization_config_excludeImageOptimizationPathRegex: Yup.string().required("Please enter whitelist path."),
												}}
											/>
										),
									},
								],
								subSettings: [],
							},
							{
								id: "allowedReleativeSize",
								title: "Allowed Relative Max Size",
								subtext: "Here will come the description",
								form: [
									{
										id: "allowedReleativeSizeForm",
										form: (
											<ConfigurationSingleTextFieldForm
												inputId="allowedRelativeMaxTotalSize"
												inputLabel="Max Age"
												inputPlaceholder="eg 50"
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													allowedRelativeMaxTotalSize: Yup.string().required("Please enter max age."),
												}}
											/>
										),
									},
								],
								subSettings: [],
							},
						],
					},
				],
			},
			{
				id: "compressionConfig",
				label: "Compression Config",
				hasParent: true,
				parentId: "assetsControl",
				hasConfig: true,
				configKey: "config",
				settings: [
					{
						id: "excludeCompressionConfig",
						title: "Exclude Compression Paths",
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						form: [
							{
								id: "excludeCompressionConfigForm",
								form: (
									<ConfigurationSingleTextFieldwithListForm
										title="Whitelisted Paths"
										inputId="compressionConfig_config_excludeCompressionPathRegex"
										inputPlaceholder="Path"
										initValues={{}}
										submitFunc={() => {}}
										validationSchema={{
											compressionConfig_config_excludeCompressionPathRegex: Yup.string().required("Please enter whitelist path."),
										}}
									/>
								),
							},
						],
						subSettings: [],
					},
					{
						id: "brotilCompression",
						title: "Brotli Compression",
						switchId: "brotliCompression",
						isSwitchBoolean: true,
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						form: null,
						subSettings: [],
					},
					{
						id: "gzipCompression",
						switchId: "gzipCompression",
						isSwitchBoolean: true,
						title: "Gzip Compression",
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						form: null,
						subSettings: [],
					},
				],
			},
		],
	},
	{
		tabTitle: "Custom Configuration",
		index: 3,
		settingGroups: [
			{
				id: "origin",
				label: "Origin Configuration",
				settings: [
					{
						id: "originProtocol",
						title: "Origin Protocol",
						subtext: "Examples of Firewall Rules",
						form: [
							{
								id: "originProtocolForm",
								form: (
									<ConfigurationSingleRadioOptions
										inputId="originProtocol"
										initValues={{}}
										submitFunc={() => {}}
										options={["HTTP", "HTTPS"]}
										validationSchema={{
											originProtocol: Yup.string().required("Please select an origin protocol."),
										}}
									/>
								),
							},
						],
						subSettings: [],
					},
					{
						id: "originKeepAliveTimeout",
						title: "Origin Keep-Alive Timeout",
						subtext: "Set a limit on the number of hits(CDN requests) over a period of time",
						form: null,
						subSettings: [],
					},
					{
						id: "maxAge",
						title: "Set Max Age",
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
						id: "overrideOriginHostHeaders",
						title: "Override Origin Host Headers",
						switchId: "overrideOriginHostHeaders",
						isSwitchBoolean: true,
						subtext: "Here will come the description",
						form: null,
						subSettings: [],
					},
					{
						id: "bypassSSLValidation",
						title: "Bypass SSL Validation",
						switchId: "bypassSSLValidation",
						isSwitchBoolean: true,
						subtext: "Here will come the description",
						form: null,
						subSettings: [],
					},
					{
						id: "originConfiguration",
						title: "Origin Configuration",
						subtext: "Here will come the description",
						form: null,
						subSettings: [
							{
								id: "rootURL",
								title: "Root URL",
								subtext: "Here will come the description",
								form: [
									{
										id: "whitelistedPathForm",
										form: (
											<ConfigurationSingleTextFieldwithListForm
												title="Whitelisted Paths"
												inputId="rootURL"
												inputPlaceholder="eg50"
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													rootURL: Yup.string().required("Please enter whitelist path."),
												}}
											/>
										),
									},
								],
								subSettings: [],
							},
							{
								id: "proxyHostName",
								title: "Proxy Host Name",
								subtext: "Here will come the description",
								form: [
									{
										id: "whitelistedPathForm",
										form: (
											<ConfigurationSingleTextFieldwithListForm
												title="Whitelisted Paths"
												inputId="proxyHostName"
												inputPlaceholder="eg50"
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													proxyHostName: Yup.string().required("Please enter whitelist path."),
												}}
											/>
										),
									},
								],
								subSettings: [],
							},
							{
								id: "targetProxyDomain",
								title: "Target Proxy Domain",
								subtext: "Here will come the description",
								form: [
									{
										id: "targetProxyDomainForm",
										form: (
											<ConfigurationSingleTextFieldwithListForm
												title="Whitelisted Paths"
												inputId="targetProxyDomain"
												inputPlaceholder="eg50"
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													targetProxyDomain: Yup.string().required("Please enter whitelist path."),
												}}
											/>
										),
									},
								],
								subSettings: [],
							},
							{
								id: "targetProxyPort",
								title: "Target Proxy Port",
								subtext: "Here will come the description",
								form: [
									{
										id: "targetProxyPortForm",
										form: (
											<ConfigurationSingleTextFieldwithListForm
												title="Whitelisted Paths"
												inputId="targetProxyPort"
												inputPlaceholder="eg50"
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													targetProxyPort: Yup.string().required("Please enter whitelist path."),
												}}
											/>
										),
									},
								],
								subSettings: [],
							},
							{
								id: "targetProxyProtocol",
								title: "Target Proxy Protocol",
								subtext: "Here will come the description",
								form: [
									{
										id: "targetProxyProtocolForm",
										form: (
											<ConfigurationSingleRadioOptions
												inputId="targetProxyProtocol"
												initValues={{}}
												submitFunc={() => {}}
												options={["HTTP", "HTTPS"]}
												validationSchema={{
													targetProxyProtocol: Yup.string().required("Please select a target proxy protocol."),
												}}
											/>
										),
									},
								],
								subSettings: [],
							},
							{
								id: "proxySubdomain",
								title: "Proxy Sub-Domain",
								subtext: "Here will come the description",
								form: [
									{
										id: "proxySubdomainForm",
										form: (
											<ConfigurationSingleTextFieldwithListForm
												title="Whitelisted Paths"
												inputId="pathName"
												inputPlaceholder="eg50"
												initValues={{}}
												submitFunc={() => {}}
												validationSchema={{
													pathName: Yup.string().required("Please enter whitelist path."),
												}}
											/>
										),
									},
								],
								subSettings: [],
							},
						],
					},
				],
			},
			{
				id: "proxySubdomain",
				label: "Email Notification",
				subtext: "Here will come the description",
				form: [
					{
						id: "proxySubdomainForm",
						form: (
							<ConfigurationSingleTextFieldwithListForm
								title="Whitelisted Paths"
								inputId="pathName"
								inputPlaceholder="eg50"
								initValues={{}}
								submitFunc={() => {}}
								validationSchema={{
									pathName: Yup.string().required("Please enter whitelist path."),
								}}
							/>
						),
					},
				],
				settings: [],
			},
			{
				id: "proxySubdomain",
				label: "SEO Optimization",
				subtext: "Here will come the description",
				form: [
					{
						id: "proxySubdomainForm",
						form: (
							<ConfigurationSingleTextFieldwithListForm
								title="Whitelisted Paths"
								inputId="pathName"
								inputPlaceholder="eg50"
								initValues={{}}
								submitFunc={() => {}}
								validationSchema={{
									pathName: Yup.string().required("Please enter whitelist path."),
								}}
							/>
						),
					},
				],
				settings: [],
			},
		],
	},
];
