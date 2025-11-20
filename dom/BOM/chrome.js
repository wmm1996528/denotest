native_getDetails = function () {
    return null
}
native_getIsInstalled = function () {
    return false
}
native_installState = function () {
    return undefined
}
native_runningState = function () {
    if (!window.chrome.app.isPrototypeOf(this)) {
        throw new TypeError("Error in invocation of app.runningState():");
    }
    return 'cannot_runs'
}
Utils.registerNative('getDetails', 'getDetails')
Utils.registerNative('getIsInstalled', 'getIsInstalled')
Utils.registerNative('installState', 'installState')
Utils.registerNative('runningState', 'runningState')
window.chrome = {
    loadTimes: newFunc('loadTimes', 0, function loadTimes() {
        print('loadTimes.call')
    }),
    csi: newFunc('csi', 0, function loadTimes() {
        print('csi.call')
        return new Proxy({
            get pageT() {
                print('csi.pageT.call', 181804.581)
                return 181804.581
            }
        }, {
            get(target, p, receiver) {
                print('csi.get', p)
                return Reflect.get(target, p, receiver)
            }
        })

    }),
    get app() {
        print('chrome.app.call')
        return {
            "isInstalled": false,
            getDetails: window['getDetails'],
            getIsInstalled: window['getIsInstalled'],

            installState: window['installState'],
            runningState: window['runningState'],

            "InstallState": {"DISABLED": "disabled", "INSTALLED": "installed", "NOT_INSTALLED": "not_installed"},
            "RunningState": {"CANNOT_RUN": "cannot_run", "READY_TO_RUN": "ready_to_run", "RUNNING": "running"},
        }

    },
    runtime: {
        OnInstalledReason: {
            CHROME_UPDATE: "chrome_update",
            INSTALL: "install",
            SHARED_MODULE_UPDATE: "shared_module_update",
            UPDATE: "update"
        },
        OnRestartRequiredReason: {
            APP_UPDATE: "app_update",
            OS_UPDATE: "os_update",
            PERIODIC: "periodic"
        },
        PlatformArch: {
            ARM: "arm",
            ARM64: "arm64",
            MIPS: "mips",
            MIPS64: "mips64",
            X86_32: "x86-32",
            X86_64: "x86-64"
        },
        PlatformNaclArch: {
            ARM: "arm",
            MIPS: "mips",
            MIPS64: "mips64",
            X86_32: "x86-32",
            X86_64: "x86-64"
        },
        PlatformOs: {
            ANDROID: "android",
            CROS: "cros",
            LINUX: "linux",
            MAC: "mac",
            OPENBSD: "openbsd",
            WIN: "win"
        },
        RequestUpdateCheckStatus: {
            NO_UPDATE: "no_update",
            THROTTLED: "throttled",
            UPDATE_AVAILABLE: "update_available"
        },
        get id() {
            return undefined;
        },
        set id(value) {
        }
    },

    // autofillPrivate: {
    //     AddressField: {
    //         ADDRESS_LEVEL_1: "ADDRESS_LEVEL_1",
    //         ADDRESS_LEVEL_2: "ADDRESS_LEVEL_2",
    //         ADDRESS_LEVEL_3: "ADDRESS_LEVEL_3",
    //         ADDRESS_LINES: "ADDRESS_LINES",
    //         COMPANY_NAME: "COMPANY_NAME",
    //         COUNTRY_CODE: "COUNTRY_CODE",
    //         FULL_NAME: "FULL_NAME",
    //         HONORIFIC: "HONORIFIC",
    //         POSTAL_CODE: "POSTAL_CODE",
    //         SORTING_CODE: "SORTING_CODE"
    //     },
    //     getAddressComponents() {
    //     },
    //     getAddressComponents() {
    //     },
    //     getAddressList() {
    //     },
    //     getCountryList() {
    //     },
    //     getCreditCardList() {
    //     },
    //     getUpiIdList() {
    //     },
    //     logServerCardLinkClicked() {
    //     },
    //     maskCreditCard() {
    //     },
    //     migrateCreditCards() {
    //     },
    //     get onPersonalDataChanged() {
    //         return {
    //             addListener() {
    //                 debugger;
    //             },
    //             dispatch() {
    //                 debugger;
    //             },
    //             hasListener() {
    //                 debugger;
    //             },
    //             hasListeners() {
    //                 debugger;
    //             },
    //             removeListener() {
    //                 debugger;
    //             },
    //         }
    //     },
    //     set onPersonalDataChanged(value) {
    //     },
    //     removeEntry() {
    //     },
    //     saveAddress() {
    //     },
    //     saveCreditCard() {
    //     },
    //     setCreditCardFIDOAuthEnabledState() {
    //     },
    //     validatePhoneNumbers() {
    //     }
    // },

    getVariableValue() {
    },
    // inputMethodPrivate: {
    //     AutoCapitalizeType: {
    //         CHARACTERS: "characters",
    //         OFF: "off",
    //         SENTENCES: "sentences",
    //         WORDS: "words",
    //     },
    //     FocusReason: {
    //         MOUSE: "mouse",
    //         OTHER: "other",
    //         PEN: "pen",
    //         TOUCH: "touch",
    //     },
    //     InputContextType: {
    //         EMAIL: "email",
    //         NULL: "null",
    //         NUMBER: "number",
    //         PASSWORD: "password",
    //         SEARCH: "search",
    //         TEL: "tel",
    //         TEXT: "text",
    //         URL: "url",
    //     },
    //     InputModeType: {
    //         DECIMAL: "decimal",
    //         EMAIL: "email",
    //         NO_KEYBOARD: "noKeyboard",
    //         NUMERIC: "numeric",
    //         SEARCH: "search",
    //         TEL: "tel",
    //         TEXT: "text",
    //         URL: "url",
    //     },
    //     MenuItemStyle: {
    //         CHECK: "check",
    //         RADIO: "radio",
    //         SEPARATOR: "separator",
    //     },
    //     UnderlineStyle: {
    //         DOUBLE_UNDERLINE: "doubleUnderline",
    //         NO_UNDERLINE: "noUnderline",
    //         UNDERLINE: "underline",
    //     },
    //     addWordToDictionary() {
    //     },
    //     fetchAllDictionaryWords() {
    //     },
    //     finishComposingText() {
    //     },
    //     getAutocorrectCharacterBounds() {
    //     },
    //     getAutocorrectRange() {
    //     },
    //     getCompositionBounds() {
    //     },
    //     getCurrentInputMethod() {
    //     },
    //     getEncryptSyncEnabled() {
    //     },
    //     getInputMethodConfig() {
    //     },
    //     getInputMethods() {
    //     },
    //     getSettings() {
    //     },
    //     getSurroundingText() {
    //     },
    //     getTextFieldBounds() {
    //     },
    //     hideInputView() {
    //     },
    //     notifyImeMenuItemActivated() {
    //     },
    //     onAutocorrect() {
    //     },
    //     get onChanged() {
    //     },
    //     set onChanged(value) {
    //     },
    //     get onCompositionBoundsChanged() {
    //     },
    //     set onCompositionBoundsChanged(value) {
    //     },
    //     get onDictionaryChanged() {
    //     },
    //     set onDictionaryChanged(value) {
    //     },
    //     get onDictionaryLoaded() {
    //     },
    //     set onDictionaryLoaded(value) {
    //     },
    //     get onFocus() {
    //     },
    //     set onFocus(value) {
    //     },
    //     get onImeMenuActivationChanged() {
    //     },
    //     set onImeMenuActivationChanged(value) {
    //     },
    //     get onImeMenuItemsChanged() {
    //     },
    //     set onImeMenuItemsChanged(value) {
    //     },
    //     get onImeMenuListChanged() {
    //     },
    //     set onImeMenuListChanged(value) {
    //     },
    //     get onInputMethodOptionsChanged() {
    //     },
    //     set onInputMethodOptionsChanged(value) {
    //     },
    //     get onScreenProjectionChanged() {
    //     },
    //     set onScreenProjectionChanged(value) {
    //     },
    //     get onSettingsChanged() {
    //     },
    //     set onSettingsChanged(value) {
    //     },
    //     get onSuggestionsChanged() {
    //     },
    //     set onSuggestionsChanged(value) {
    //     },
    //     openOptionsPage() {
    //     },
    //     reset() {
    //     },
    //     setAutocorrectRange() {
    //     },
    //     setComposingRange() {
    //     },
    //     setCompositionRange() {
    //     },
    //     setCurrentInputMethod() {
    //     },
    //     setSelectionRange() {
    //     },
    //     setSettings() {
    //     },
    //     setXkbLayout() {
    //     },
    //     showInputView() {
    //     },
    // },
    // languageSettingsPrivate: {
    //     MoveType: {
    //         DOWN: "DOWN",
    //         TOP: "TOP",
    //         UNKNOWN: "UNKNOWN",
    //         UP: "UP",
    //     },
    //     addInputMethod() {
    //     },
    //     addSpellcheckWord() {
    //     },
    //     disableLanguage() {
    //     },
    //     enableLanguage() {
    //     },
    //     getAlwaysTranslateLanguages() {
    //     },
    //     getInputMethodLists() {
    //     },
    //     getLanguageList() {
    //     },
    //     getNeverTranslateLanguages() {
    //     },
    //     getSpellcheckDictionaryStatuses() {
    //     },
    //     getSpellcheckWords() {
    //     },
    //     getTranslateTargetLanguage() {
    //     },
    //     moveLanguage() {
    //     },
    //     onCustomDictionaryChanged: {
    //         addListener() {
    //         },
    //         dispatch() {
    //         },
    //         hasListener() {
    //         },
    //         hasListeners() {
    //         },
    //         removeListener() {
    //         }
    //     },
    //     get onInputMethodAdded() {
    //         return {
    //             addListener() {
    //             },
    //             dispatch() {
    //             },
    //             hasListener() {
    //             },
    //             hasListeners() {
    //             },
    //             removeListener() {
    //             }
    //         }
    //     },
    //     set onInputMethodAdded(value) {
    //     },
    //     get onInputMethodRemoved() {
    //         return {
    //             addListener() {
    //             },
    //             dispatch() {
    //             },
    //             hasListener() {
    //             },
    //             hasListeners() {
    //             },
    //             removeListener() {
    //             }
    //         }
    //     },
    //     set onInputMethodRemoved(value) {
    //         debugger
    //     },
    //     onSpellcheckDictionariesChanged: {
    //         addListener() {
    //         },
    //         dispatch() {
    //         },
    //         hasListener() {
    //         },
    //         hasListeners() {
    //         },
    //         removeListener() {
    //         }
    //     },
    //     removeInputMethod() {
    //     },
    //     removeSpellcheckWord() {
    //     },
    //     retryDownloadDictionary() {
    //     },
    //     setEnableTranslationForLanguage() {
    //     },
    //     setLanguageAlwaysTranslateState() {
    //     },
    //     setTranslateTargetLanguage() {
    //     },
    //
    // },

    // management: {
    //     ExtensionDisabledReason: {
    //         PERMISSIONS_INCREASE: "permissions_increase",
    //         UNKNOWN: "unknown",
    //     },
    //     ExtensionInstallType: {
    //         ADMIN: "admin",
    //         DEVELOPMENT: "development",
    //         NORMAL: "normal",
    //         OTHER: "other",
    //         SIDELOAD: "sideload"
    //     },
    //     ExtensionType: {
    //         EXTENSION: "extension",
    //         HOSTED_APP: "hosted_app",
    //         LEGACY_PACKAGED_APP: "legacy_packaged_app",
    //         LOGIN_SCREEN_EXTENSION: "login_screen_extension",
    //         PACKAGED_APP: "packaged_app",
    //         THEME: "theme",
    //     },
    //     LaunchType: {
    //         OPEN_AS_PINNED_TAB: "OPEN_AS_PINNED_TAB",
    //         OPEN_AS_REGULAR_TAB: "OPEN_AS_REGULAR_TAB",
    //         OPEN_AS_WINDOW: "OPEN_AS_WINDOW",
    //         OPEN_FULL_SCREEN: "OPEN_FULL_SCREEN",
    //     },
    //     createAppShortcut() {
    //     },
    //     generateAppForLink() {
    //     },
    //     get() {
    //     },
    //     getAll() {
    //     },
    //     getPermissionWarningsById() {
    //     },
    //     launchApp() {
    //     },
    //     get onDisabled() {
    //         return {
    //             addListener() {
    //             },
    //             dispatch() {
    //             },
    //             hasListener() {
    //             },
    //             hasListeners() {
    //             },
    //             removeListener() {
    //             }
    //         }
    //     },
    //     set onDisabled(value) {
    //     },
    //     get onEnabled() {
    //         return {
    //             addListener() {
    //             },
    //             dispatch() {
    //             },
    //             hasListener() {
    //             },
    //             hasListeners() {
    //             },
    //             removeListener() {
    //             }
    //         }
    //     },
    //     set onEnabled(value) {
    //     },
    //     get onInstalled() {
    //         return {
    //             addListener() {
    //             },
    //             dispatch() {
    //             },
    //             hasListener() {
    //             },
    //             hasListeners() {
    //             },
    //             removeListener() {
    //             }
    //         }
    //     },
    //     set onInstalled(value) {
    //         debugger
    //     },
    //     get onUninstalled() {
    //         return {
    //             addListener() {
    //             },
    //             dispatch() {
    //             },
    //             hasListener() {
    //             },
    //             hasListeners() {
    //             },
    //             removeListener() {
    //             }
    //         }
    //     },
    //     set onUninstalled(value) {
    //         debugger
    //     },
    //     setEnabled() {
    //     },
    //     setLaunchType() {
    //     },
    //     uninstall() {
    //     }
    // },
    // metricsPrivate: {
    //     MetricTypeType: {
    //         HISTOGRAM_LINEAR: "histogram-linear",
    //         HISTOGRAM_LOG: "histogram-log"
    //     },
    //     getFieldTrial() {
    //     },
    //     getHistogram() {
    //     },
    //     getVariationParams() {
    //     },
    //     recordBoolean() {
    //     },
    //     recordCount() {
    //     },
    //     recordEnumerationValue() {
    //     },
    //     recordLongTime() {
    //     },
    //     recordMediumCount() {
    //     },
    //     recordMediumTime() {
    //     },
    //     recordPercentage() {
    //     },
    //     recordSmallCount() {
    //     },
    //     recordSparseHashable() {
    //     },
    //     recordSparseValue() {
    //     },
    //     recordTime() {
    //     },
    //     recordUserAction() {
    //     },
    //     recordValue() {
    //     }
    // },
    // passwordsPrivate: {
    //     CompromiseType: {
    //         LEAKED: "LEAKED",
    //         PHISHED: "PHISHED",
    //         PHISHED_AND_LEAKED: "PHISHED_AND_LEAKED"
    //     },
    //     ExportProgressStatus: {
    //         FAILED_CANCELLED: "FAILED_CANCELLED",
    //         FAILED_WRITE_FAILED: "FAILED_WRITE_FAILED",
    //         IN_PROGRESS: "IN_PROGRESS",
    //         NOT_STARTED: "NOT_STARTED",
    //         SUCCEEDED: "SUCCEEDED"
    //     },
    //     PasswordCheckState: {
    //         CANCELED: "CANCELED",
    //         IDLE: "IDLE",
    //         NO_PASSWORDS: "NO_PASSWORDS",
    //         OFFLINE: "OFFLINE",
    //         OTHER_ERROR: "OTHER_ERROR",
    //         QUOTA_LIMIT: "QUOTA_LIMIT",
    //         RUNNING: "RUNNING",
    //         SIGNED_OUT: "SIGNED_OUT"
    //     },
    //     PlaintextReason: {
    //         COPY: "COPY",
    //         EDIT: "EDIT",
    //         VIEW: "VIEW"
    //     },
    //     addPassword() {
    //     },
    //     cancelExportPasswords() {
    //     },
    //     changeInsecureCredential() {
    //     },
    //     changeSavedPassword() {
    //     },
    //     exportPasswords() {
    //     },
    //     getCompromisedCredentials() {
    //     },
    //     getPasswordCheckStatus() {
    //     },
    //     getPasswordExceptionList() {
    //     },
    //     getPlaintextInsecurePassword() {
    //     },
    //     getSavedPasswordList() {
    //     },
    //     getUrlCollection() {
    //     },
    //     getWeakCredentials() {
    //     },
    //     importPasswords() {
    //     },
    //     isAccountStoreDefault() {
    //     },
    //     isOptedInForAccountStorage() {
    //     },
    //     movePasswordsToAccount() {
    //     },
    //     get onAccountStorageOptInStateChanged() {
    //         return {
    //             addListener() {
    //             },
    //             dispatch() {
    //             },
    //             hasListener() {
    //             },
    //             hasListeners() {
    //             },
    //             removeListener() {
    //             }
    //         }
    //     },
    //     set onAccountStorageOptInStateChanged(value) {
    //         debugger
    //     },
    //     onCompromisedCredentialsChanged: {
    //         addListener() {
    //         },
    //         dispatch() {
    //         },
    //         hasListener() {
    //         },
    //         hasListeners() {
    //         },
    //         removeListener() {
    //         }
    //     },
    //     get onPasswordExceptionsListChanged() {
    //         return {
    //             addListener() {
    //             },
    //             dispatch() {
    //             },
    //             hasListener() {
    //             },
    //             hasListeners() {
    //             },
    //             removeListener() {
    //             }
    //         }
    //     },
    //     set onPasswordExceptionsListChanged(value) {
    //         debugger
    //     },
    //     get onPasswordsFileExportProgress() {
    //         return {
    //             addListener() {
    //             },
    //             dispatch() {
    //             },
    //             hasListener() {
    //             },
    //             hasListeners() {
    //             },
    //             removeListener() {
    //             }
    //         }
    //     },
    //     set onPasswordsFileExportProgress(value) {
    //         debugger
    //     },
    //     get onSavedPasswordsListChanged() {
    //         return {
    //             addListener() {
    //             },
    //             dispatch() {
    //             },
    //             hasListener() {
    //             },
    //             hasListeners() {
    //             },
    //             removeListener() {
    //             }
    //         }
    //     },
    //     set onSavedPasswordsListChanged(value) {
    //         debugger
    //     },
    //     onWeakCredentialsChanged: {
    //         addListener() {
    //         },
    //         dispatch() {
    //         },
    //         hasListener() {
    //         },
    //         hasListeners() {
    //         },
    //         removeListener() {
    //         }
    //     },
    //     optInForAccountStorage() {
    //     },
    //     recordPasswordsPageAccessInSettings() {
    //     },
    //     removeInsecureCredential() {
    //     },
    //     removePasswordException() {
    //     },
    //     removePasswordExceptions() {
    //     },
    //     removeSavedPassword() {
    //     },
    //     removeSavedPasswords() {
    //     },
    //     requestExportProgressStatus() {
    //     },
    //     requestPlaintextPassword() {
    //     },
    //     startPasswordCheck() {
    //     },
    //     stopPasswordCheck() {
    //     },
    //     undoRemoveSavedPasswordOrException() {
    //     }
    // },
    // send() {
    // },
    // settingsPrivate: {
    //     ControlledBy: {
    //         CHILD_RESTRICTION: "CHILD_RESTRICTION",
    //         DEVICE_POLICY: "DEVICE_POLICY",
    //         EXTENSION: "EXTENSION",
    //         OWNER: "OWNER",
    //         PARENT: "PARENT",
    //         PRIMARY_USER: "PRIMARY_USER",
    //         USER_POLICY: "USER_POLICY"
    //     },
    //     Enforcement: {
    //         ENFORCED: "ENFORCED",
    //         PARENT_SUPERVISED: "PARENT_SUPERVISED",
    //         RECOMMENDED: "RECOMMENDED"
    //     },
    //     PrefType: {
    //         BOOLEAN: "BOOLEAN",
    //         DICTIONARY: "DICTIONARY",
    //         LIST: "LIST",
    //         NUMBER: "NUMBER",
    //         STRING: "STRING",
    //         URL: "URL"
    //     },
    //     getAllPrefs() {
    //     },
    //     getDefaultZoom() {
    //     },
    //     getPref() {
    //     },
    //     onPrefsChanged: {
    //         addListener() {
    //         },
    //         dispatch() {
    //         },
    //         hasListener() {
    //         },
    //         hasListeners() {
    //         },
    //         removeListener() {
    //         }
    //     },
    //     setDefaultZoom() {
    //     },
    //     setPref() {
    //     }
    // }
}


window.chrome = new Proxy(window.chrome, {
    get(target, p, receiver) {
        print('chrome.get', p)
        return Reflect.get(target, p, receiver)
    }
})