import { configurationConstants } from "../constants";

const initialSettings = {
    configurationSettings: {
        domainName: "www.example.com",
        assetsControl_status: "disabled",
        cacheConfig_status: "enabled",
        includeQueryParamsForCacheKey: true,
        overrideNoCacheHeader: true,
        cacheControlMaxAge: 0,
        cacheOriginCustomHeader: [
            "Strict-Transport-Security",
            "X-Frame-Options",
            "Referrer-Policy",
            "X-Content-Type-Options",
            "Content-Security-Policy",
            "Pragma",
            "X-XSS-Protection",
        ],
        requestMethodIdentifier: ["GET", "POST", "PUT", "DELETE"],
        staticAssetIdentifierRegex: ".(css|js|jpg|jpeg|svg|png|gif|webp|ico|ttf|eot|woff2|woff|bmp|ejs|pdf|ps|pict|eps|svgz|csv|mid|swf|doc|midi|ppt|pptx|tif|xls|xlsx|docx|tiff|jar|otf|zip|txt|rar|mov|mp4|mp3|mpeg|webm|avi|gz).*|^/blog/.*|^/blog$|^/kitextproxy*",
        staticAssetIdentifierRegexOption: "i",
        htmlAssetIdentifierRegex: ".(html)$|/family-health-insurance.*|^/health-insurance-for-senior-citizens.html.*|^/heart-health-insurance.html.*|^/buy-maternity-health-insurance-plan.html.*|^/buy-top-up-medical-insurance-policy.html.*|^/policy-buy-senior-citizens-health-insurance-online.html.*|^/travel-insurance-explore.html.*|^/cancer-insurance.html.*|^/heart-insurance.html.*|^/travel-insurance-student-explore.html.*|^/critical-insurance.html.*|^/operation-insurance.html.*|^/personal-accident-insurance-policy.html.*",
        htmlAssetIdentifierRegexOption: "i",
        homePageIdentifierRegex: "^/$",
        homePageIdentifierRegexOption: "i",
        excludeStaticUrlRegex: "/blog/admin*|/self-help-policy-details.html|/quote-request.html|/religare-health-insurance-agent.html|/health-insurance-branch-locator.html|/religare-health-insurance-eagency.html|/cpproject/thankyou.html|/cpproject/otp-varification.html|/health-plan-certified-network-hospitals.html|no-cache=true|/care-health-insurance-in-media.html|/public-disclosures.html|/health-insurance-brochure.html|/health-insurance-claim-forms.html|/other-downloads.html|/tools.html|/modified-or-withdrawn-product.html|^/kitextproxy/www-notifyvisitors-com/ext/v1/settings",
        excludeStaticUrlRegexOption: "i",
        minifyStaticAssets: true,
        minifyJs: true,
        minifyCss: true,
        minifyHtml: true,
        minifyInlineCss: true,
        minifyInlineJs: true,
        imageOptimization_status: "enabled",
        excludeImageOptimizationPathRegex: "^$",
        includeImageOptimizationPathRegex: "https://cms.careinsurance.com/upload_master/*",
        allowedRelativeMaxTotalSize: 1000000,
        compressionConfig_status: "enabled",
        excludeCompressionPathRegex: "^$",
        brotliCompression: "enabled",
        gzipCompression: "enabled",
        customClientConfiguration_status: "disabled",
    },
    updatedConfigurationSettings: {},
};

const Configuration = (state = initialSettings, action) => {
    if (!action.data) {
        return {...state };
    }
    switch (action.type) {
        case configurationConstants.GET_CONFIGURATION_SETTINGS_REQUEST:
            return {
                ...state,
                updatedConfigurationSettings: {}
            };
        case configurationConstants.GET_CONFIGURATION_SETTINGS_SUCCESS:
            return {
                ...state,
                configurationSettings: action.data,
                updatedConfigurationSettings: {}
            };
        case configurationConstants.GET_CONFIGURATION_SETTINGS_FAILURE:
            return {
                ...state,
                updatedConfigurationSettings: {}
            };
        case configurationConstants.CONFIGURATION_CHANGE_REQUEST:
            return {
                configurationSettings: Object.assign({}, state.configurationSettings, action.data),
                updatedConfigurationSettings: Object.assign({}, state.updatedConfigurationSettings, action.data),
            };
        case configurationConstants.DEPLOY_CONFIGURATION_SETTINGS_SUCCESS:
            return {
                configurationSettings: Object.assign({}, state.configurationSettings, action.data),
                updatedConfigurationSettings: {},
            };
        default:
            return state;
    }
};

export default Configuration;