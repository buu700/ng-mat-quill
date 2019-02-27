import { __extends } from 'tslib';
import { NG_VALUE_ACCESSOR, NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { Component, Input, Self, Optional, ElementRef, NgModule } from '@angular/core';
import { QuillComponent, QuillModule } from '@webacad/ng-quill';

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
        _this.stateChanges = new Subject();
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
         */
        function () {
            return this.getValue();
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatQuillComponent.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._id = id || this._uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatQuillComponent.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this.value === 'undefined';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatQuillComponent.prototype, "focused", {
        get: /**
         * @return {?}
         */
        function () {
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
        var control = this.ngControl ? (/** @type {?} */ (this.ngControl.control)) : null;
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
        { type: Component, args: [{
                    selector: 'wa-mat-quill',
                    template: '',
                    providers: [
                        {
                            provide: MatFormFieldControl,
                            useExisting: MatQuillComponent,
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: MatQuillComponent,
                            multi: true,
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    MatQuillComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ErrorStateMatcher },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] },
        { type: NgControl, decorators: [{ type: Self }, { type: Optional }] }
    ]; };
    MatQuillComponent.propDecorators = {
        placeholder: [{ type: Input }],
        required: [{ type: Input }],
        errorStateMatcher: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        id: [{ type: Input }]
    };
    return MatQuillComponent;
}(QuillComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatQuillModule = /** @class */ (function () {
    function MatQuillModule() {
    }
    MatQuillModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        QuillModule,
                    ],
                    declarations: [
                        MatQuillComponent,
                    ],
                    exports: [
                        QuillModule,
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

export { MatQuillComponent, MatQuillModule };

//# sourceMappingURL=webacad-ng-mat-quill.js.map