/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-zoom-toolbar/pdf-zoom-dropdown/pdf-zoom-dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, ElementRef } from '@angular/core';
/**
 * @record
 */
function ZoomLevel() { }
if (false) {
    /** @type {?} */
    ZoomLevel.prototype.id;
    /** @type {?} */
    ZoomLevel.prototype.dataL10nId;
    /** @type {?} */
    ZoomLevel.prototype.dataL10nArgs;
    /** @type {?} */
    ZoomLevel.prototype.value;
    /** @type {?} */
    ZoomLevel.prototype.displayValue;
}
export class PdfZoomDropdownComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this._zoomLevels = [];
    }
    // ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
    /**
     * @param {?} levels
     * @return {?}
     */
    set zoomLevels(levels) {
        this._zoomLevels = levels.map((/**
         * @param {?} l
         * @return {?}
         */
        (l) => this.valueToZoomLevel(l)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const callback = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            document.removeEventListener('localized', callback);
        });
        document.addEventListener('localized', callback);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    valueToZoomLevel(value) {
        if (value.toString().endsWith('%')) {
            value = value.toString().replace('%', '');
            value = Number(value) / 100;
        }
        /** @type {?} */
        const numericalValue = Number(value);
        if (!numericalValue) {
            /** @type {?} */
            const v = String(value);
            return {
                id: this.snakeToCamel(value + 'Option'),
                value: v,
                dataL10nId: 'page_scale_' + v.replace('page-', ''),
                dataL10nArgs: undefined,
                displayValue: v,
            };
        }
        /** @type {?} */
        const percentage = Math.round(numericalValue * 100);
        return {
            id: `scale_${percentage}`,
            value: String(numericalValue),
            dataL10nId: 'page_scale_percent',
            dataL10nArgs: `{ "scale": ${percentage} }`,
            displayValue: String(percentage) + '%',
        };
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    snakeToCamel(str) {
        // idea found here: https://hisk.io/javascript-snake-to-camel/
        return str.replace(/([-_][a-z])/g, (/**
         * @param {?} group
         * @return {?}
         */
        (group) => group.toUpperCase().replace('-', '').replace('_', '')));
    }
}
PdfZoomDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-zoom-dropdown',
                template: "<span id=\"scaleSelectContainer\">\n  <select\n    id=\"scaleSelect\"\n    title=\"Zoom\"\n    data-l10n-id=\"zoom\"\n    #sizeSelector\n  >\n    <option *ngFor=\"let level of _zoomLevels\"\n      [id]=\"level.id\"\n      [attr.value]=\"level.value\"\n      [attr.data-l10n-id]=\"level.dataL10nId\"\n      [attr.data-l10n-args]=\"level.dataL10nArgs\">\n      {{level.displayValue}}\n    </option>\n    <option\n    id=\"customScaleOption\"\n    title=\"\"\n    value=\"custom\"\n    disabled=\"disabled\"\n    hidden=\"true\"\n  ></option>\n\n  </select>\n</span>\n",
                styles: ["select{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid}#customScaleOption{display:none}"]
            }] }
];
/** @nocollapse */
PdfZoomDropdownComponent.ctorParameters = () => [
    { type: ElementRef }
];
PdfZoomDropdownComponent.propDecorators = {
    zoomLevels: [{ type: Input }],
    sizeSelector: [{ type: ViewChild, args: ['sizeSelector',] }]
};
if (false) {
    /** @type {?} */
    PdfZoomDropdownComponent.prototype._zoomLevels;
    /** @type {?} */
    PdfZoomDropdownComponent.prototype.sizeSelector;
    /**
     * @type {?}
     * @private
     */
    PdfZoomDropdownComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLWRyb3Bkb3duL3BkZi16b29tLWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUF3QixLQUFLLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVySCx3QkFNQzs7O0lBTEMsdUJBQVc7O0lBQ1gsK0JBQW1COztJQUNuQixpQ0FBaUM7O0lBQ2pDLDBCQUFjOztJQUNkLGlDQUFxQjs7QUFPdkIsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQWFuQyxZQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBWGhDLGdCQUFXLEdBQXFCLEVBQUUsQ0FBQztJQVdBLENBQUM7Ozs7OztJQVIzQyxJQUNXLFVBQVUsQ0FBQyxNQUE4QjtRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFPRCxRQUFROztjQUNBLFFBQVE7Ozs7UUFBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3JCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFBO1FBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxLQUFzQjtRQUM3QyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQzdCOztjQUNLLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEVBQUU7O2tCQUNiLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLE9BQU87Z0JBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDdkMsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsVUFBVSxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7Z0JBQ2xELFlBQVksRUFBRSxTQUFTO2dCQUN2QixZQUFZLEVBQUUsQ0FBQzthQUNoQixDQUFDO1NBQ0g7O2NBQ0ssVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUNuRCxPQUFPO1lBQ0wsRUFBRSxFQUFFLFNBQVMsVUFBVSxFQUFFO1lBQ3pCLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQzdCLFVBQVUsRUFBRSxvQkFBb0I7WUFDaEMsWUFBWSxFQUFFLGNBQWMsVUFBVSxJQUFJO1lBQzFDLFlBQVksRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRztTQUN2QyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEdBQVc7UUFDOUIsOERBQThEO1FBQzlELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUN2RyxDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLGlrQkFBaUQ7O2FBRWxEOzs7O1lBYmtGLFVBQVU7Ozt5QkFtQjFGLEtBQUs7MkJBTUwsU0FBUyxTQUFDLGNBQWM7Ozs7SUFUekIsK0NBQTBDOztJQVMxQyxnREFBNkM7Ozs7O0lBRWpDLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgWm9vbUxldmVsIHtcbiAgaWQ6IHN0cmluZztcbiAgZGF0YUwxMG5JZDogc3RyaW5nO1xuICBkYXRhTDEwbkFyZ3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdmFsdWU6IHN0cmluZztcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmc7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtem9vbS1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtem9vbS1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi16b29tLWRyb3Bkb3duLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgX3pvb21MZXZlbHM6IEFycmF5PFpvb21MZXZlbD4gPSBbXTtcbiAgLy8gWydhdXRvJywgJ3BhZ2UtYWN0dWFsJywgJ3BhZ2UtZml0JywgJ3BhZ2Utd2lkdGgnLCAwLjUsIDAuNzUsIDEsIDEuMjUsIDEuNSwgMiwgMywgNF07XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB6b29tTGV2ZWxzKGxldmVsczogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPikge1xuICAgIHRoaXMuX3pvb21MZXZlbHMgPSBsZXZlbHMubWFwKChsKSA9PiB0aGlzLnZhbHVlVG9ab29tTGV2ZWwobCkpO1xuICB9XG5cblxuICBAVmlld0NoaWxkKCdzaXplU2VsZWN0b3InKSBzaXplU2VsZWN0b3I6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSAoZSkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9jYWxpemVkJywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2NhbGl6ZWQnLCBjYWxsYmFjayk7XG4gIH1cblxuICBwcml2YXRlIHZhbHVlVG9ab29tTGV2ZWwodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IFpvb21MZXZlbCB7XG4gICAgaWYgKHZhbHVlLnRvU3RyaW5nKCkuZW5kc1dpdGgoJyUnKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoJyUnLCAnJyk7XG4gICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSkgLyAxMDA7XG4gICAgfVxuICAgIGNvbnN0IG51bWVyaWNhbFZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICBpZiAoIW51bWVyaWNhbFZhbHVlKSB7XG4gICAgICBjb25zdCB2ID0gU3RyaW5nKHZhbHVlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiB0aGlzLnNuYWtlVG9DYW1lbCh2YWx1ZSArICdPcHRpb24nKSxcbiAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgIGRhdGFMMTBuSWQ6ICdwYWdlX3NjYWxlXycgKyB2LnJlcGxhY2UoJ3BhZ2UtJywgJycpLFxuICAgICAgICBkYXRhTDEwbkFyZ3M6IHVuZGVmaW5lZCxcbiAgICAgICAgZGlzcGxheVZhbHVlOiB2LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQobnVtZXJpY2FsVmFsdWUgKiAxMDApO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogYHNjYWxlXyR7cGVyY2VudGFnZX1gLFxuICAgICAgdmFsdWU6IFN0cmluZyhudW1lcmljYWxWYWx1ZSksXG4gICAgICBkYXRhTDEwbklkOiAncGFnZV9zY2FsZV9wZXJjZW50JyxcbiAgICAgIGRhdGFMMTBuQXJnczogYHsgXCJzY2FsZVwiOiAke3BlcmNlbnRhZ2V9IH1gLFxuICAgICAgZGlzcGxheVZhbHVlOiBTdHJpbmcocGVyY2VudGFnZSkgKyAnJScsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgc25ha2VUb0NhbWVsKHN0cjogc3RyaW5nKSB7XG4gICAgLy8gaWRlYSBmb3VuZCBoZXJlOiBodHRwczovL2hpc2suaW8vamF2YXNjcmlwdC1zbmFrZS10by1jYW1lbC9cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLV9dW2Etel0pL2csIChncm91cCkgPT4gZ3JvdXAudG9VcHBlckNhc2UoKS5yZXBsYWNlKCctJywgJycpLnJlcGxhY2UoJ18nLCAnJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlYXNlIHRoZSB3aWR0aCBvZiB0aGUgem9vbSBkcm9wZG93biBET00gZWxlbWVudCBpZiwgYW5kIG9ubHkgaWYsIGl0J3NcbiAgICogdG9vIG5hcnJvdyB0byBmaXQgdGhlICpsb25nZXN0KiBvZiB0aGUgbG9jYWxpemVkIHN0cmluZ3MuXG4gICAqIEBwcml2YXRlXG4gIGFzeW5jIF9hZGp1c3RTY2FsZVdpZHRoKCkge1xuICAgIGNvbnN0IHsgaXRlbXMsIGwxMG4gfSA9IHRoaXM7XG5cbiAgICBjb25zdCBwcmVkZWZpbmVkVmFsdWVzUHJvbWlzZSA9IFByb21pc2UuYWxsKFtcbiAgICAgIGwxMG4uZ2V0KFwicGFnZV9zY2FsZV9hdXRvXCIsIG51bGwsIFwiQXV0b21hdGljIFpvb21cIiksXG4gICAgICBsMTBuLmdldChcInBhZ2Vfc2NhbGVfYWN0dWFsXCIsIG51bGwsIFwiQWN0dWFsIFNpemVcIiksXG4gICAgICBsMTBuLmdldChcInBhZ2Vfc2NhbGVfZml0XCIsIG51bGwsIFwiUGFnZSBGaXRcIiksXG4gICAgICBsMTBuLmdldChcInBhZ2Vfc2NhbGVfd2lkdGhcIiwgbnVsbCwgXCJQYWdlIFdpZHRoXCIpLFxuICAgIF0pO1xuXG4gICAgLy8gVGhlIHRlbXBvcmFyeSBjYW52YXMgaXMgdXNlZCB0byBtZWFzdXJlIHRleHQgbGVuZ3RoIGluIHRoZSBET00uXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIFBERkpTRGV2ID09PSBcInVuZGVmaW5lZFwiIHx8XG4gICAgICBQREZKU0Rldi50ZXN0KFwiTU9aQ0VOVFJBTCB8fCBHRU5FUklDXCIpXG4gICAgKSB7XG4gICAgICBjYW52YXMubW96T3BhcXVlID0gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiwgeyBhbHBoYTogZmFsc2UgfSk7XG5cbiAgICBhd2FpdCBhbmltYXRpb25TdGFydGVkO1xuICAgIGNvbnN0IHsgZm9udFNpemUsIGZvbnRGYW1pbHkgfSA9IGdldENvbXB1dGVkU3R5bGUoaXRlbXMuc2NhbGVTZWxlY3QpO1xuICAgIGN0eC5mb250ID0gYCR7Zm9udFNpemV9ICR7Zm9udEZhbWlseX1gO1xuXG4gICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICBmb3IgKGNvbnN0IHByZWRlZmluZWRWYWx1ZSBvZiBhd2FpdCBwcmVkZWZpbmVkVmFsdWVzUHJvbWlzZSkge1xuICAgICAgY29uc3QgeyB3aWR0aCB9ID0gY3R4Lm1lYXN1cmVUZXh0KHByZWRlZmluZWRWYWx1ZSk7XG4gICAgICBpZiAod2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgICBtYXhXaWR0aCA9IHdpZHRoO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvdmVyZmxvdyA9IFNDQUxFX1NFTEVDVF9XSURUSCAtIFNDQUxFX1NFTEVDVF9DT05UQUlORVJfV0lEVEg7XG4gICAgbWF4V2lkdGggKz0gMTAgKyAxLjUgKiBvdmVyZmxvdztcblxuICAgIGlmIChtYXhXaWR0aCA+IFNDQUxFX1NFTEVDVF9DT05UQUlORVJfV0lEVEgpIHtcbiAgICAgIGl0ZW1zLnNjYWxlU2VsZWN0LnN0eWxlLndpZHRoID0gYCR7bWF4V2lkdGggKyBvdmVyZmxvd31weGA7XG4gICAgICBpdGVtcy5zY2FsZVNlbGVjdENvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAke21heFdpZHRofXB4YDtcbiAgICB9XG4gICAgLy8gWmVyb2luZyB0aGUgd2lkdGggYW5kIGhlaWdodCBjYXVzZSBGaXJlZm94IHRvIHJlbGVhc2UgZ3JhcGhpY3MgcmVzb3VyY2VzXG4gICAgLy8gaW1tZWRpYXRlbHksIHdoaWNoIGNhbiBncmVhdGx5IHJlZHVjZSBtZW1vcnkgY29uc3VtcHRpb24uXG4gICAgY2FudmFzLndpZHRoID0gMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gMDtcbiAgICBjYW52YXMgPSBjdHggPSBudWxsO1xuICB9XG4qL1xufVxuIl19