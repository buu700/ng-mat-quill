(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/material/core'), require('@angular/material/form-field'), require('rxjs'), require('@angular/core'), require('@webacad/ng-quill')) :
    typeof define === 'function' && define.amd ? define('@webacad/ng-mat-quill', ['exports', '@angular/forms', '@angular/material/core', '@angular/material/form-field', 'rxjs', '@angular/core', '@webacad/ng-quill'], factory) :
    (factory((global.webacad = global.webacad || {}, global.webacad['ng-mat-quill'] = {}),global.ng.forms,global.ng.material.core,global.ng.material['form-field'],global.rxjs,global.ng.core,global.ngQuill));
}(this, (function (exports,forms,core,formField,rxjs,core$1,ngQuill) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var nextUniqueId = 0;
    var MatQuillComponent = /** @class */ (function (_super) {
        __extends(MatQuillComponent, _super);
        function MatQuillComponent(el, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
            var _this = _super.call(this, el) || this;
            _this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
            _this._parentForm = _parentForm;
            _this._parentFormGroup = _parentFormGroup;
            _this.ngControl = ngControl;
            _this.required = false;
            _this.errorState = false;
            _this.stateChanges = new rxjs.Subject();
            _this.shouldLabelFloat = true;
            _this._disabled = false;
            _this._uid = "wa-quill-" + nextUniqueId++;
            if (_this.ngControl !== null) {
                _this.ngControl.valueAccessor = _this;
            }
            return _this;
        }
        Object.defineProperty(MatQuillComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this.getValue();
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this.editor) {
                    if (value !== this.value) {
                        this.editor.setContents(value);
                        this.stateChanges.next();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatQuillComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                if (this.ngControl && this.ngControl.disabled !== null) {
                    return this.ngControl.disabled;
                }
                return this._disabled;
            },
            set: /**
             * @param {?} disabled
             * @return {?}
             */ function (disabled) {
                this._disabled = disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatQuillComponent.prototype, "id", {
            get: /**
             * @return {?}
             */ function () {
                return this._id;
            },
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this._id = id || this._uid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatQuillComponent.prototype, "empty", {
            get: /**
             * @return {?}
             */ function () {
                return typeof this.value === 'undefined';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatQuillComponent.prototype, "focused", {
            get: /**
             * @return {?}
             */ function () {
                if (this.editor) {
                    return this.editor.hasFocus();
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        MatQuillComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (typeof changes['value'] !== 'undefined' || typeof changes['required'] !== 'undefined') {
                    this.stateChanges.next();
                }
            };
        /**
         * @return {?}
         */
        MatQuillComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                if (this.ngControl) {
                    this.updateErrorState();
                }
            };
        /**
         * @return {?}
         */
        MatQuillComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.stateChanges.complete();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MatQuillComponent.prototype.onContainerClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this.focused) {
                    this.focus();
                }
            };
        /**
         * @return {?}
         */
        MatQuillComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                if (this.editor) {
                    this.editor.focus();
                    this.stateChanges.next();
                }
            };
        /**
         * @return {?}
         */
        MatQuillComponent.prototype.updateErrorState = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var oldState = this.errorState;
                /** @type {?} */
                var parent = this._parentFormGroup || this._parentForm;
                /** @type {?} */
                var matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
                /** @type {?} */
                var control = this.ngControl ? ( /** @type {?} */(this.ngControl.control)) : null;
                /** @type {?} */
                var newState = matcher.isErrorState(control, parent);
                if (newState !== oldState) {
                    this.errorState = newState;
                    this.stateChanges.next();
                }
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        MatQuillComponent.prototype.setDescribedByIds = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
            };
        MatQuillComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'wa-mat-quill',
                        template: '',
                        providers: [
                            {
                                provide: formField.MatFormFieldControl,
                                useExisting: MatQuillComponent,
                            },
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: MatQuillComponent,
                                multi: true,
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        MatQuillComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core.ErrorStateMatcher },
                { type: forms.NgForm, decorators: [{ type: core$1.Optional }] },
                { type: forms.FormGroupDirective, decorators: [{ type: core$1.Optional }] },
                { type: forms.NgControl, decorators: [{ type: core$1.Self }, { type: core$1.Optional }] }
            ];
        };
        MatQuillComponent.propDecorators = {
            placeholder: [{ type: core$1.Input }],
            required: [{ type: core$1.Input }],
            errorStateMatcher: [{ type: core$1.Input }],
            value: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            id: [{ type: core$1.Input }]
        };
        return MatQuillComponent;
    }(ngQuill.QuillComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatQuillModule = /** @class */ (function () {
        function MatQuillModule() {
        }
        MatQuillModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            ngQuill.QuillModule,
                        ],
                        declarations: [
                            MatQuillComponent,
                        ],
                        exports: [
                            ngQuill.QuillModule,
                            MatQuillComponent,
                        ],
                    },] }
        ];
        return MatQuillModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.MatQuillComponent = MatQuillComponent;
    exports.MatQuillModule = MatQuillModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=webacad-ng-mat-quill.umd.js.map