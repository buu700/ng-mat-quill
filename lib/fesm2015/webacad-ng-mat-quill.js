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
let nextUniqueId = 0;
class MatQuillComponent extends QuillComponent {
    /**
     * @param {?} el
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    constructor(el, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        super(el);
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
        this.required = false;
        this.errorState = false;
        this.stateChanges = new Subject();
        this.shouldLabelFloat = true;
        this._disabled = false;
        this._uid = `wa-quill-${nextUniqueId++}`;
        if (this.ngControl !== null) {
            this.ngControl.valueAccessor = this;
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this.getValue();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this.editor) {
            if (value !== this.value) {
                this.editor.setContents(value);
                this.stateChanges.next();
            }
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set disabled(disabled) {
        this._disabled = disabled;
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set id(id) {
        this._id = id || this._uid;
    }
    /**
     * @return {?}
     */
    get empty() {
        return typeof this.value === 'undefined';
    }
    /**
     * @return {?}
     */
    get focused() {
        if (this.editor) {
            return this.editor.hasFocus();
        }
        return false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (typeof changes['value'] !== 'undefined' || typeof changes['required'] !== 'undefined') {
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        if (!this.focused) {
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.editor) {
            this.editor.focus();
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    updateErrorState() {
        /** @type {?} */
        const oldState = this.errorState;
        /** @type {?} */
        const parent = this._parentFormGroup || this._parentForm;
        /** @type {?} */
        const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
        /** @type {?} */
        const control = this.ngControl ? (/** @type {?} */ (this.ngControl.control)) : null;
        /** @type {?} */
        const newState = matcher.isErrorState(control, parent);
        if (newState !== oldState) {
            this.errorState = newState;
            this.stateChanges.next();
        }
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
    }
}
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
MatQuillComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ErrorStateMatcher },
    { type: NgForm, decorators: [{ type: Optional }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Self }, { type: Optional }] }
];
MatQuillComponent.propDecorators = {
    placeholder: [{ type: Input }],
    required: [{ type: Input }],
    errorStateMatcher: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    id: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatQuillModule {
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