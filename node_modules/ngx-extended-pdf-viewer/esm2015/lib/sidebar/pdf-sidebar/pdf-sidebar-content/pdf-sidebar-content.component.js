/**
 * @fileoverview added by tsickle
 * Generated from: lib/sidebar/pdf-sidebar/pdf-sidebar-content/pdf-sidebar-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
/** @type {?} */
const THUMBNAIL_CANVAS_BORDER_WIDTH = 1;
// px
export class PdfSidebarContentComponent {
    constructor() {
        this.thumbnailDrawn = new EventEmitter();
        this.top = '32px';
        this._hideSidebarToolbar = false;
        ((/** @type {?} */ (window))).pdfThumbnailGeneratorReady = (/**
         * @return {?}
         */
        () => this.pdfThumbnailGeneratorReady());
        ((/** @type {?} */ (window))).pdfThumbnailGenerator = (/**
         * @param {?} pdfThumbnailView
         * @param {?} linkService
         * @param {?} id
         * @param {?} container
         * @param {?} thumbPageTitlePromise
         * @return {?}
         */
        (pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) => this.createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromise));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.linkService = undefined;
    }
    /**
     * @return {?}
     */
    pdfThumbnailGeneratorReady() {
        if (!this.thumbnailViewTemplate) {
            return false;
        }
        /** @type {?} */
        const t = (/** @type {?} */ (this.thumbnailViewTemplate.nativeElement));
        return !!t && !!t.innerHTML && t.innerHTML.length > 0;
    }
    /**
     * @private
     * @param {?} pdfThumbnailView
     * @param {?} linkService
     * @param {?} id
     * @param {?} container
     * @param {?} thumbPageTitlePromise
     * @return {?}
     */
    createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) {
        this.linkService = linkService;
        /** @type {?} */
        const template = this.thumbnailViewTemplate;
        // get the inner HTML without the attributes and classes added by Angular
        /** @type {?} */
        const inner = template.nativeElement.innerHTML
            .split(/_ng\w+-\w+-\w+=""/g)
            .join('')
            .split(/ng-\w+-\w+/g)
            .join('')
            .split(/<!--[\s\S]*?-->/g)
            .join('');
        /** @type {?} */
        const borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
        /** @type {?} */
        const widthOfRing = pdfThumbnailView.canvasWidth + borderAdjustment + 'px';
        /** @type {?} */
        const heightOfRing = pdfThumbnailView.canvasHeight + borderAdjustment + 'px';
        /** @type {?} */
        const newHtml = inner.split('WIDTH_OF_RING').join(widthOfRing).split('HEIGHT_OF_RING').join(heightOfRing).split('PAGE_NUMBER').join(id);
        /** @type {?} */
        const newElement = this.createElementFromHTML(newHtml);
        newElement.classList.remove('pdf-viewer-template');
        /** @type {?} */
        const anchor = (/** @type {?} */ (newElement));
        anchor.href = linkService.getAnchorUrl('#page=' + id);
        thumbPageTitlePromise.then((/**
         * @param {?} msg
         * @return {?}
         */
        (msg) => {
            anchor.title = msg;
        }));
        anchor.onclick = (/**
         * @return {?}
         */
        function () {
            linkService.page = id;
            return false;
        });
        pdfThumbnailView.anchor = anchor;
        /** @type {?} */
        const ring = (/** @type {?} */ (newElement.getElementsByClassName('image-container')[0]));
        pdfThumbnailView.ring = ring;
        pdfThumbnailView.div = (/** @type {?} */ (newElement.getElementsByClassName('thumbnail')[0]));
        container.appendChild(newElement);
        /** @type {?} */
        const thumbnailDrawnEvent = {
            thumbnail: newElement,
            container: container,
            pageId: id,
        };
        this.thumbnailDrawn.emit(thumbnailDrawnEvent);
    }
    /**
     * @private
     * @param {?} htmlString
     * @return {?}
     */
    createElementFromHTML(htmlString) {
        /** @type {?} */
        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        // Change this to div.childNodes to support multiple top-level nodes
        return (/** @type {?} */ (div.firstChild));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (event.code === 'ArrowDown') {
            if (this.linkService) {
                if (event.ctrlKey || event.metaKey) {
                    this.linkService.page = this.linkService.pagesCount;
                }
                else if (this.linkService.page < this.linkService.pagesCount) {
                    this.linkService.page = this.linkService.page + 1;
                }
                event.preventDefault();
            }
        }
        else if (event.code === 'ArrowUp') {
            if (this.linkService) {
                if (event.ctrlKey || event.metaKey) {
                    this.linkService.page = 1;
                }
                else if (this.linkService.page > 1) {
                    this.linkService.page = this.linkService.page - 1;
                }
                event.preventDefault();
            }
        }
    }
    /**
     * @param {?} h
     * @return {?}
     */
    set hideSidebarToolbar(h) {
        this._hideSidebarToolbar = h;
        if (this._hideSidebarToolbar) {
            this.top = '0';
        }
        else {
            this.top = '32px';
        }
    }
}
PdfSidebarContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-sidebar-content',
                template: "<div id=\"sidebarContent\" [style.top]=\"top\">\n  <div #thumbnailViewTemplate>\n    <ng-content *ngTemplateOutlet=\"customThumbnail ? customThumbnail : defaultThumbnail\"></ng-content>\n  </div>\n  <div id=\"thumbnailView\" (keydown)=\"onKeyDown($event)\"></div>\n  <div id=\"outlineView\" class=\"hidden\"></div>\n  <div id=\"attachmentsView\" class=\"hidden\"></div>\n  <div id=\"layersView\" class=\"hidden\"></div>\n</div>\n\n<ng-template #defaultThumbnail>\n  <a class=\"pdf-viewer-template\">\n    <div class=\"thumbnail\" data-page-number=\"$page\">\n      <div class=\"thumbnailSelectionRing image-container\" style=\"width: WIDTH_OF_RING; height: HEIGHT_OF_RING\">\n        <!-- image is automatically inserted here -->\n        <!-- <img class=\"thumbnailImage\" style=\"width: 98px; height: 73px;\" /> -->\n      </div>\n    </div>\n  </a>\n</ng-template>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfSidebarContentComponent.ctorParameters = () => [];
PdfSidebarContentComponent.propDecorators = {
    customThumbnail: [{ type: Input }],
    thumbnailViewTemplate: [{ type: ViewChild, args: ['thumbnailViewTemplate',] }],
    thumbnailDrawn: [{ type: Output }],
    hideSidebarToolbar: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PdfSidebarContentComponent.prototype.customThumbnail;
    /** @type {?} */
    PdfSidebarContentComponent.prototype.thumbnailViewTemplate;
    /**
     * @type {?}
     * @private
     */
    PdfSidebarContentComponent.prototype.linkService;
    /** @type {?} */
    PdfSidebarContentComponent.prototype.thumbnailDrawn;
    /** @type {?} */
    PdfSidebarContentComponent.prototype.top;
    /** @type {?} */
    PdfSidebarContentComponent.prototype._hideSidebarToolbar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLWNvbnRlbnQvcGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBYSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztNQWlCaEgsNkJBQTZCLEdBQUcsQ0FBQzs7QUFPdkMsTUFBTSxPQUFPLDBCQUEwQjtJQWdCckM7UUFOTyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBRTVELFFBQUcsR0FBRyxNQUFNLENBQUM7UUFFYix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFHakMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLDBCQUEwQjs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUEsQ0FBQztRQUNyRixDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMscUJBQXFCOzs7Ozs7OztRQUFHLENBQ3RDLGdCQUFrQyxFQUNsQyxXQUFnQixFQUNoQixFQUFVLEVBQ1YsU0FBeUIsRUFDekIscUJBQXNDLEVBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUEsQ0FBQztJQUNqRyxDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRU0sMEJBQTBCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVB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RUQsSUFDVyxrQkFBa0IsQ0FBQyxDQUFVO1FBQ3RDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDaEI7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7O1lBdElGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixpM0JBQW1EOzthQUVwRDs7Ozs7OEJBRUUsS0FBSztvQ0FHTCxTQUFTLFNBQUMsdUJBQXVCOzZCQUtqQyxNQUFNO2lDQWdITixLQUFLOzs7O0lBeEhOLHFEQUN5Qzs7SUFFekMsMkRBQ3lDOzs7OztJQUV6QyxpREFBZ0Q7O0lBRWhELG9EQUNtRTs7SUFFbkUseUNBQW9COztJQUVwQix5REFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZXZlbnRzL3BkZi10aHVtYm5haWwtZHJhd24tZXZlbnQnO1xuXG5kZWNsYXJlIGNsYXNzIFBERlRodW1ibmFpbFZpZXcge1xuICBhbmNob3I6IEhUTUxBbmNob3JFbGVtZW50O1xuICBkaXY6IEhUTUxFbGVtZW50O1xuICByaW5nOiBIVE1MRWxlbWVudDtcbiAgY2FudmFzV2lkdGg6IG51bWJlcjtcbiAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XG59XG5cbmRlY2xhcmUgY2xhc3MgUERGTGlua1NlcnZpY2Uge1xuICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuICBwdWJsaWMgcGFnZXNDb3VudDogbnVtYmVyO1xuICBwdWJsaWMgZ2V0QW5jaG9yVXJsKHRhcmdldFVybDogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5jb25zdCBUSFVNQk5BSUxfQ0FOVkFTX0JPUkRFUl9XSURUSCA9IDE7IC8vIHB4XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi1zaWRlYmFyLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21UaHVtYm5haWw6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQFZpZXdDaGlsZCgndGh1bWJuYWlsVmlld1RlbXBsYXRlJylcbiAgcHVibGljIHRodW1ibmFpbFZpZXdUZW1wbGF0ZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGxpbmtTZXJ2aWNlOiBQREZMaW5rU2VydmljZSB8IHVuZGVmaW5lZDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHRodW1ibmFpbERyYXduID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZUaHVtYm5haWxEcmF3bkV2ZW50PigpO1xuXG4gIHB1YmxpYyB0b3AgPSAnMzJweCc7XG5cbiAgcHVibGljIF9oaWRlU2lkZWJhclRvb2xiYXIgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAod2luZG93IGFzIGFueSkucGRmVGh1bWJuYWlsR2VuZXJhdG9yUmVhZHkgPSAoKSA9PiB0aGlzLnBkZlRodW1ibmFpbEdlbmVyYXRvclJlYWR5KCk7XG4gICAgKHdpbmRvdyBhcyBhbnkpLnBkZlRodW1ibmFpbEdlbmVyYXRvciA9IChcbiAgICAgIHBkZlRodW1ibmFpbFZpZXc6IFBERlRodW1ibmFpbFZpZXcsXG4gICAgICBsaW5rU2VydmljZTogYW55LFxuICAgICAgaWQ6IG51bWJlcixcbiAgICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsXG4gICAgICB0aHVtYlBhZ2VUaXRsZVByb21pc2U6IFByb21pc2U8c3RyaW5nPlxuICAgICkgPT4gdGhpcy5jcmVhdGVUaHVtYm5haWwocGRmVGh1bWJuYWlsVmlldywgbGlua1NlcnZpY2UsIGlkLCBjb250YWluZXIsIHRodW1iUGFnZVRpdGxlUHJvbWlzZSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5saW5rU2VydmljZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBwZGZUaHVtYm5haWxHZW5lcmF0b3JSZWFkeSgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMudGh1bWJuYWlsVmlld1RlbXBsYXRlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHQgPSB0aGlzLnRodW1ibmFpbFZpZXdUZW1wbGF0ZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIHJldHVybiAhIXQgJiYgISF0LmlubmVySFRNTCAmJiB0LmlubmVySFRNTC5sZW5ndGggPiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVUaHVtYm5haWwoXG4gICAgcGRmVGh1bWJuYWlsVmlldzogUERGVGh1bWJuYWlsVmlldyxcbiAgICBsaW5rU2VydmljZTogUERGTGlua1NlcnZpY2UsXG4gICAgaWQ6IG51bWJlcixcbiAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxuICAgIHRodW1iUGFnZVRpdGxlUHJvbWlzZTogUHJvbWlzZTxzdHJpbmc+XG4gICkge1xuICAgIHRoaXMubGlua1NlcnZpY2UgPSBsaW5rU2VydmljZTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGh1bWJuYWlsVmlld1RlbXBsYXRlO1xuICAgIC8vIGdldCB0aGUgaW5uZXIgSFRNTCB3aXRob3V0IHRoZSBhdHRyaWJ1dGVzIGFuZCBjbGFzc2VzIGFkZGVkIGJ5IEFuZ3VsYXJcbiAgICBjb25zdCBpbm5lciA9IHRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MXG4gICAgICAuc3BsaXQoL19uZ1xcdystXFx3Ky1cXHcrPVwiXCIvZylcbiAgICAgIC5qb2luKCcnKVxuICAgICAgLnNwbGl0KC9uZy1cXHcrLVxcdysvZylcbiAgICAgIC5qb2luKCcnKVxuICAgICAgLnNwbGl0KC88IS0tW1xcc1xcU10qPy0tPi9nKVxuICAgICAgLmpvaW4oJycpO1xuXG4gICAgY29uc3QgYm9yZGVyQWRqdXN0bWVudCA9IDIgKiBUSFVNQk5BSUxfQ0FOVkFTX0JPUkRFUl9XSURUSDtcblxuICAgIGNvbnN0IHdpZHRoT2ZSaW5nID0gcGRmVGh1bWJuYWlsVmlldy5jYW52YXNXaWR0aCArIGJvcmRlckFkanVzdG1lbnQgKyAncHgnO1xuICAgIGNvbnN0IGhlaWdodE9mUmluZyA9IHBkZlRodW1ibmFpbFZpZXcuY2FudmFzSGVpZ2h0ICsgYm9yZGVyQWRqdXN0bWVudCArICdweCc7XG5cbiAgICBjb25zdCBuZXdIdG1sID0gaW5uZXIuc3BsaXQoJ1dJRFRIX09GX1JJTkcnKS5qb2luKHdpZHRoT2ZSaW5nKS5zcGxpdCgnSEVJR0hUX09GX1JJTkcnKS5qb2luKGhlaWdodE9mUmluZykuc3BsaXQoJ1BBR0VfTlVNQkVSJykuam9pbihpZCk7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudEZyb21IVE1MKG5ld0h0bWwpO1xuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGRmLXZpZXdlci10ZW1wbGF0ZScpO1xuXG4gICAgY29uc3QgYW5jaG9yID0gbmV3RWxlbWVudCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICBhbmNob3IuaHJlZiA9IGxpbmtTZXJ2aWNlLmdldEFuY2hvclVybCgnI3BhZ2U9JyArIGlkKTtcbiAgICB0aHVtYlBhZ2VUaXRsZVByb21pc2UudGhlbigobXNnKSA9PiB7XG4gICAgICBhbmNob3IudGl0bGUgPSBtc2c7XG4gICAgfSk7XG4gICAgYW5jaG9yLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsaW5rU2VydmljZS5wYWdlID0gaWQ7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBwZGZUaHVtYm5haWxWaWV3LmFuY2hvciA9IGFuY2hvcjtcblxuICAgIGNvbnN0IHJpbmcgPSBuZXdFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlLWNvbnRhaW5lcicpWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIHBkZlRodW1ibmFpbFZpZXcucmluZyA9IHJpbmc7XG4gICAgcGRmVGh1bWJuYWlsVmlldy5kaXYgPSBuZXdFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RodW1ibmFpbCcpWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuXG4gICAgY29uc3QgdGh1bWJuYWlsRHJhd25FdmVudDogUGRmVGh1bWJuYWlsRHJhd25FdmVudCA9IHtcbiAgICAgIHRodW1ibmFpbDogbmV3RWxlbWVudCxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgcGFnZUlkOiBpZCxcbiAgICB9O1xuICAgIHRoaXMudGh1bWJuYWlsRHJhd24uZW1pdCh0aHVtYm5haWxEcmF3bkV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudEZyb21IVE1MKGh0bWxTdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmcudHJpbSgpO1xuXG4gICAgLy8gQ2hhbmdlIHRoaXMgdG8gZGl2LmNoaWxkTm9kZXMgdG8gc3VwcG9ydCBtdWx0aXBsZSB0b3AtbGV2ZWwgbm9kZXNcbiAgICByZXR1cm4gZGl2LmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBpZiAodGhpcy5saW5rU2VydmljZSkge1xuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgdGhpcy5saW5rU2VydmljZS5wYWdlID0gdGhpcy5saW5rU2VydmljZS5wYWdlc0NvdW50O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGlua1NlcnZpY2UucGFnZSA8IHRoaXMubGlua1NlcnZpY2UucGFnZXNDb3VudCkge1xuICAgICAgICAgIHRoaXMubGlua1NlcnZpY2UucGFnZSA9IHRoaXMubGlua1NlcnZpY2UucGFnZSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1VwJykge1xuICAgICAgaWYgKHRoaXMubGlua1NlcnZpY2UpIHtcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xuICAgICAgICAgIHRoaXMubGlua1NlcnZpY2UucGFnZSA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5saW5rU2VydmljZS5wYWdlID4gMSkge1xuICAgICAgICAgIHRoaXMubGlua1NlcnZpY2UucGFnZSA9IHRoaXMubGlua1NlcnZpY2UucGFnZSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGhpZGVTaWRlYmFyVG9vbGJhcihoOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZVNpZGViYXJUb29sYmFyID0gaDtcbiAgICBpZiAodGhpcy5faGlkZVNpZGViYXJUb29sYmFyKSB7XG4gICAgICB0aGlzLnRvcCA9ICcwJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3AgPSAnMzJweCc7XG4gICAgfVxuICB9XG59XG4iXX0=