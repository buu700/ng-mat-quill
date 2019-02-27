/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Self, Optional, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { QuillComponent } from '@webacad/ng-quill';
import { Subject } from 'rxjs';
/** @type {?} */
let nextUniqueId = 0;
export class MatQuillComponent extends QuillComponent {
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
if (false) {
    /** @type {?} */
    MatQuillComponent.prototype.placeholder;
    /** @type {?} */
    MatQuillComponent.prototype.required;
    /** @type {?} */
    MatQuillComponent.prototype.errorStateMatcher;
    /** @type {?} */
    MatQuillComponent.prototype.errorState;
    /** @type {?} */
    MatQuillComponent.prototype.stateChanges;
    /** @type {?} */
    MatQuillComponent.prototype.shouldLabelFloat;
    /**
     * @type {?}
     * @private
     */
    MatQuillComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    MatQuillComponent.prototype._id;
    /**
     * @type {?}
     * @private
     */
    MatQuillComponent.prototype._uid;
    /**
     * @type {?}
     * @private
     */
    MatQuillComponent.prototype._defaultErrorStateMatcher;
    /**
     * @type {?}
     * @private
     */
    MatQuillComponent.prototype._parentForm;
    /**
     * @type {?}
     * @private
     */
    MatQuillComponent.prototype._parentFormGroup;
    /** @type {?} */
    MatQuillComponent.prototype.ngControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXF1aWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B3ZWJhY2FkL25nLW1hdC1xdWlsbC8iLCJzb3VyY2VzIjpbIm1hdC1xdWlsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUN6SCxPQUFPLEVBRU4saUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBRU4sa0JBQWtCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFDLGlCQUFpQixFQUFzQixNQUFNLHdCQUF3QixDQUFDO0FBQzlFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOztJQUd6QixZQUFZLEdBQVcsQ0FBQztBQWtCNUIsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGNBQWM7Ozs7Ozs7O0lBZ0NwRCxZQUNDLEVBQWMsRUFDTix5QkFBNEMsRUFDaEMsV0FBbUIsRUFDbkIsZ0JBQW9DLEVBQ3BCLFNBQW9CO1FBRXhELEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUxGLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBbUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBdkJsRCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBSzFCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFbkIsaUJBQVksR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUVsRCxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFekMsY0FBUyxHQUFZLEtB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d0Q7O0lBQ3hELHNDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgU2VsZiwgT3B0aW9uYWwsIEVsZW1lbnRSZWYsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgRG9DaGVjaywgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuXHROR19WQUxVRV9BQ0NFU1NPUixcblx0TmdDb250cm9sLFxuXHROZ0Zvcm0sXG5cdEZvcm1Db250cm9sLFxuXHRGb3JtR3JvdXBEaXJlY3RpdmVcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtFcnJvclN0YXRlTWF0Y2hlciwgQ2FuVXBkYXRlRXJyb3JTdGF0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdEZvcm1GaWVsZENvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtRdWlsbENvbXBvbmVudH0gZnJvbSAnQHdlYmFjYWQvbmctcXVpbGwnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuXG5sZXQgbmV4dFVuaXF1ZUlkOiBudW1iZXIgPSAwO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3dhLW1hdC1xdWlsbCcsXG5cdHRlbXBsYXRlOiAnJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCxcblx0XHRcdHVzZUV4aXN0aW5nOiBNYXRRdWlsbENvbXBvbmVudCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IE1hdFF1aWxsQ29tcG9uZW50LFxuXHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0fVxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRRdWlsbENvbXBvbmVudCBleHRlbmRzIFF1aWxsQ29tcG9uZW50IGltcGxlbWVudHNcblx0T25DaGFuZ2VzLFxuXHREb0NoZWNrLFxuXHRPbkRlc3Ryb3ksXG5cdE1hdEZvcm1GaWVsZENvbnRyb2w8c3RyaW5nPixcblx0Q2FuVXBkYXRlRXJyb3JTdGF0ZSxcblx0Q29udHJvbFZhbHVlQWNjZXNzb3JcbntcblxuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBlcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXI7XG5cblx0cHVibGljIGVycm9yU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwdWJsaWMgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuXHRwdWJsaWMgcmVhZG9ubHkgc2hvdWxkTGFiZWxGbG9hdDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIF9pZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgX3VpZDogc3RyaW5nID0gYHdhLXF1aWxsLSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGVsOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXIsXG5cdFx0QE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuXHRcdEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuXHRcdEBTZWxmKCkgQE9wdGlvbmFsKCkgcHVibGljIHJlYWRvbmx5IG5nQ29udHJvbDogTmdDb250cm9sLFxuXHQpIHtcblx0XHRzdXBlcihlbCk7XG5cblx0XHRpZiAodGhpcy5uZ0NvbnRyb2wgIT09IG51bGwpIHtcblx0XHRcdHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuXHRcdH1cblx0fVxuXG5cblx0QElucHV0KClcblx0Z2V0IHZhbHVlKCk6IGFueVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcblx0fVxuXG5cdHNldCB2YWx1ZSh2YWx1ZTogYW55KVxuXHR7XG5cdFx0aWYgKHRoaXMuZWRpdG9yKSB7XG5cdFx0XHRpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcblx0XHRcdFx0dGhpcy5lZGl0b3Iuc2V0Q29udGVudHModmFsdWUpO1xuXHRcdFx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhblxuXHR7XG5cdFx0aWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuXHR9XG5cblx0c2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKVxuXHR7XG5cdFx0dGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcblx0fVxuXG5cblx0QElucHV0KClcblx0Z2V0IGlkKCk6IHN0cmluZ1xuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2lkO1xuXHR9XG5cblx0c2V0IGlkKGlkOiBzdHJpbmcpXG5cdHtcblx0XHR0aGlzLl9pZCA9IGlkIHx8IHRoaXMuX3VpZDtcblx0fVxuXG5cblx0Z2V0IGVtcHR5KCk6IGJvb2xlYW5cblx0e1xuXHRcdHJldHVybiB0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG5cdH1cblxuXG5cdGdldCBmb2N1c2VkKCk6IGJvb2xlYW5cblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWRpdG9yLmhhc0ZvY3VzKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWRcblx0e1xuXHRcdGlmICh0eXBlb2YgY2hhbmdlc1sndmFsdWUnXSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGNoYW5nZXNbJ3JlcXVpcmVkJ10gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgbmdEb0NoZWNrKCk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLm5nQ29udHJvbCkge1xuXHRcdFx0dGhpcy51cGRhdGVFcnJvclN0YXRlKCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcblx0fVxuXG5cblx0cHVibGljIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkXG5cdHtcblx0XHRpZiAoIXRoaXMuZm9jdXNlZCkge1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH1cblx0fVxuXG5cblx0cHVibGljIGZvY3VzKCk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0dGhpcy5lZGl0b3IuZm9jdXMoKTtcblx0XHRcdHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcblx0XHR9XG5cdH1cblxuXG5cdHB1YmxpYyB1cGRhdGVFcnJvclN0YXRlKCk6IHZvaWRcblx0e1xuXHRcdGNvbnN0IG9sZFN0YXRlID0gdGhpcy5lcnJvclN0YXRlO1xuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMuX3BhcmVudEZvcm1Hcm91cCB8fCB0aGlzLl9wYXJlbnRGb3JtO1xuXHRcdGNvbnN0IG1hdGNoZXIgPSB0aGlzLmVycm9yU3RhdGVNYXRjaGVyIHx8IHRoaXMuX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjtcblx0XHRjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wgPyA8Rm9ybUNvbnRyb2w+dGhpcy5uZ0NvbnRyb2wuY29udHJvbCA6IG51bGw7XG5cdFx0Y29uc3QgbmV3U3RhdGUgPSBtYXRjaGVyLmlzRXJyb3JTdGF0ZShjb250cm9sLCBwYXJlbnQpO1xuXG5cdFx0aWYgKG5ld1N0YXRlICE9PSBvbGRTdGF0ZSkge1xuXHRcdFx0dGhpcy5lcnJvclN0YXRlID0gbmV3U3RhdGU7XG5cdFx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBBcnJheTxzdHJpbmc+KTogdm9pZFxuXHR7XG5cdH1cblxufVxuIl19