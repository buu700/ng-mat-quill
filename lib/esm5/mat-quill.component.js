/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Self, Optional, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { QuillComponent } from '@webacad/ng-quill';
import { Subject } from 'rxjs';
/** @type {?} */
var nextUniqueId = 0;
var MatQuillComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MatQuillComponent, _super);
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
export { MatQuillComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXF1aWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B3ZWJhY2FkL25nLW1hdC1xdWlsbC8iLCJzb3VyY2VzIjpbIm1hdC1xdWlsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFDekgsT0FBTyxFQUVOLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsTUFBTSxFQUVOLGtCQUFrQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBQyxpQkFBaUIsRUFBc0IsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7SUFHekIsWUFBWSxHQUFXLENBQUM7QUFHNUI7SUFldUMsNkNBQWM7SUFnQ3BELDJCQUNDLEVBQWMsRUFDTix5QkFBNEMsRUFDaEMsV0FBbUIsRUFDbkIsZ0JBQW9DLEVBQ3BCLFNBQW9CO1FBTHpELFlBT0Msa0JBQU0sRUFBRSxDQUFDLFNBS1Q7UUFWUSwrQkFBeUIsR0FBekIseUJBQXlCLENBQW1CO1FBQ2hDLGlCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFDcEIsZUFBUyxHQUFULFNBQVMsQ0FBVztRQXZCbEQsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUsxQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUVuQixrQkFBWSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRWxELHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUV6QyxlQUFTLEdBQVksS0FBSyxDQUFDO1FBSTNCLFVBQUks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NEM7O0lBRTVDLHVDQUFtQzs7SUFFbkMseUNBQWtFOztJQUVsRSw2Q0FBaUQ7Ozs7O0lBRWpELHNDQUFtQzs7Ozs7SUFFbkMsZ0NBQW9COzs7OztJQUVwQixpQ0FBb0Q7Ozs7O0lBS25ELHNEQUFvRDs7Ozs7SUFDcEQsd0NBQXVDOzs7OztJQUN2Qyw2Q0FBd0Q7O0lBQ3hELHNDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgU2VsZiwgT3B0aW9uYWwsIEVsZW1lbnRSZWYsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgRG9DaGVjaywgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuXHROR19WQUxVRV9BQ0NFU1NPUixcblx0TmdDb250cm9sLFxuXHROZ0Zvcm0sXG5cdEZvcm1Db250cm9sLFxuXHRGb3JtR3JvdXBEaXJlY3RpdmVcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtFcnJvclN0YXRlTWF0Y2hlciwgQ2FuVXBkYXRlRXJyb3JTdGF0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdEZvcm1GaWVsZENvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtRdWlsbENvbXBvbmVudH0gZnJvbSAnQHdlYmFjYWQvbmctcXVpbGwnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuXG5sZXQgbmV4dFVuaXF1ZUlkOiBudW1iZXIgPSAwO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3dhLW1hdC1xdWlsbCcsXG5cdHRlbXBsYXRlOiAnJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCxcblx0XHRcdHVzZUV4aXN0aW5nOiBNYXRRdWlsbENvbXBvbmVudCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IE1hdFF1aWxsQ29tcG9uZW50LFxuXHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0fVxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRRdWlsbENvbXBvbmVudCBleHRlbmRzIFF1aWxsQ29tcG9uZW50IGltcGxlbWVudHNcblx0T25DaGFuZ2VzLFxuXHREb0NoZWNrLFxuXHRPbkRlc3Ryb3ksXG5cdE1hdEZvcm1GaWVsZENvbnRyb2w8c3RyaW5nPixcblx0Q2FuVXBkYXRlRXJyb3JTdGF0ZSxcblx0Q29udHJvbFZhbHVlQWNjZXNzb3JcbntcblxuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBlcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXI7XG5cblx0cHVibGljIGVycm9yU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwdWJsaWMgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuXHRwdWJsaWMgcmVhZG9ubHkgc2hvdWxkTGFiZWxGbG9hdDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIF9pZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgX3VpZDogc3RyaW5nID0gYHdhLXF1aWxsLSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGVsOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXIsXG5cdFx0QE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuXHRcdEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuXHRcdEBTZWxmKCkgQE9wdGlvbmFsKCkgcHVibGljIHJlYWRvbmx5IG5nQ29udHJvbDogTmdDb250cm9sLFxuXHQpIHtcblx0XHRzdXBlcihlbCk7XG5cblx0XHRpZiAodGhpcy5uZ0NvbnRyb2wgIT09IG51bGwpIHtcblx0XHRcdHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuXHRcdH1cblx0fVxuXG5cblx0QElucHV0KClcblx0Z2V0IHZhbHVlKCk6IGFueVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcblx0fVxuXG5cdHNldCB2YWx1ZSh2YWx1ZTogYW55KVxuXHR7XG5cdFx0aWYgKHRoaXMuZWRpdG9yKSB7XG5cdFx0XHRpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcblx0XHRcdFx0dGhpcy5lZGl0b3Iuc2V0Q29udGVudHModmFsdWUpO1xuXHRcdFx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhblxuXHR7XG5cdFx0aWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuXHR9XG5cblx0c2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKVxuXHR7XG5cdFx0dGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcblx0fVxuXG5cblx0QElucHV0KClcblx0Z2V0IGlkKCk6IHN0cmluZ1xuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2lkO1xuXHR9XG5cblx0c2V0IGlkKGlkOiBzdHJpbmcpXG5cdHtcblx0XHR0aGlzLl9pZCA9IGlkIHx8IHRoaXMuX3VpZDtcblx0fVxuXG5cblx0Z2V0IGVtcHR5KCk6IGJvb2xlYW5cblx0e1xuXHRcdHJldHVybiB0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG5cdH1cblxuXG5cdGdldCBmb2N1c2VkKCk6IGJvb2xlYW5cblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWRpdG9yLmhhc0ZvY3VzKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWRcblx0e1xuXHRcdGlmICh0eXBlb2YgY2hhbmdlc1sndmFsdWUnXSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGNoYW5nZXNbJ3JlcXVpcmVkJ10gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgbmdEb0NoZWNrKCk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLm5nQ29udHJvbCkge1xuXHRcdFx0dGhpcy51cGRhdGVFcnJvclN0YXRlKCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcblx0fVxuXG5cblx0cHVibGljIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkXG5cdHtcblx0XHRpZiAoIXRoaXMuZm9jdXNlZCkge1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH1cblx0fVxuXG5cblx0cHVibGljIGZvY3VzKCk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0dGhpcy5lZGl0b3IuZm9jdXMoKTtcblx0XHRcdHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcblx0XHR9XG5cdH1cblxuXG5cdHB1YmxpYyB1cGRhdGVFcnJvclN0YXRlKCk6IHZvaWRcblx0e1xuXHRcdGNvbnN0IG9sZFN0YXRlID0gdGhpcy5lcnJvclN0YXRlO1xuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMuX3BhcmVudEZvcm1Hcm91cCB8fCB0aGlzLl9wYXJlbnRGb3JtO1xuXHRcdGNvbnN0IG1hdGNoZXIgPSB0aGlzLmVycm9yU3RhdGVNYXRjaGVyIHx8IHRoaXMuX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjtcblx0XHRjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wgPyA8Rm9ybUNvbnRyb2w+dGhpcy5uZ0NvbnRyb2wuY29udHJvbCA6IG51bGw7XG5cdFx0Y29uc3QgbmV3U3RhdGUgPSBtYXRjaGVyLmlzRXJyb3JTdGF0ZShjb250cm9sLCBwYXJlbnQpO1xuXG5cdFx0aWYgKG5ld1N0YXRlICE9PSBvbGRTdGF0ZSkge1xuXHRcdFx0dGhpcy5lcnJvclN0YXRlID0gbmV3U3RhdGU7XG5cdFx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBBcnJheTxzdHJpbmc+KTogdm9pZFxuXHR7XG5cdH1cblxufVxuIl19