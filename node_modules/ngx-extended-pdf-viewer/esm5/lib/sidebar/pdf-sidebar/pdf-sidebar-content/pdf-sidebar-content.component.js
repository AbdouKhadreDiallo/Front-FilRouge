/**
 * @fileoverview added by tsickle
 * Generated from: lib/sidebar/pdf-sidebar/pdf-sidebar-content/pdf-sidebar-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
/** @type {?} */
var THUMBNAIL_CANVAS_BORDER_WIDTH = 1;
// px
var PdfSidebarContentComponent = /** @class */ (function () {
    function PdfSidebarContentComponent() {
        var _this = this;
        this.thumbnailDrawn = new EventEmitter();
        this.top = '32px';
        this._hideSidebarToolbar = false;
        ((/** @type {?} */ (window))).pdfThumbnailGeneratorReady = (/**
         * @return {?}
         */
        function () { return _this.pdfThumbnailGeneratorReady(); });
        ((/** @type {?} */ (window))).pdfThumbnailGenerator = (/**
         * @param {?} pdfThumbnailView
         * @param {?} linkService
         * @param {?} id
         * @param {?} container
         * @param {?} thumbPageTitlePromise
         * @return {?}
         */
        function (pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) { return _this.createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromise); });
    }
    /**
     * @return {?}
     */
    PdfSidebarContentComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.linkService = undefined;
    };
    /**
     * @return {?}
     */
    PdfSidebarContentComponent.prototype.pdfThumbnailGeneratorReady = /**
     * @return {?}
     */
    function () {
        if (!this.thumbnailViewTemplate) {
            return false;
        }
        /** @type {?} */
        var t = (/** @type {?} */ (this.thumbnailViewTemplate.nativeElement));
        return !!t && !!t.innerHTML && t.innerHTML.length > 0;
    };
    /**
     * @private
     * @param {?} pdfThumbnailView
     * @param {?} linkService
     * @param {?} id
     * @param {?} container
     * @param {?} thumbPageTitlePromise
     * @return {?}
     */
    PdfSidebarContentComponent.prototype.createThumbnail = /**
     * @private
     * @param {?} pdfThumbnailView
     * @param {?} linkService
     * @param {?} id
     * @param {?} container
     * @param {?} thumbPageTitlePromise
     * @return {?}
     */
    function (pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) {
        this.linkService = linkService;
        /** @type {?} */
        var template = this.thumbnailViewTemplate;
        // get the inner HTML without the attributes and classes added by Angular
        /** @type {?} */
        var inner = template.nativeElement.innerHTML
            .split(/_ng\w+-\w+-\w+=""/g)
            .join('')
            .split(/ng-\w+-\w+/g)
            .join('')
            .split(/<!--[\s\S]*?-->/g)
            .join('');
        /** @type {?} */
        var borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
        /** @type {?} */
        var widthOfRing = pdfThumbnailView.canvasWidth + borderAdjustment + 'px';
        /** @type {?} */
        var heightOfRing = pdfThumbnailView.canvasHeight + borderAdjustment + 'px';
        /** @type {?} */
        var newHtml = inner.split('WIDTH_OF_RING').join(widthOfRing).split('HEIGHT_OF_RING').join(heightOfRing).split('PAGE_NUMBER').join(id);
        /** @type {?} */
        var newElement = this.createElementFromHTML(newHtml);
        newElement.classList.remove('pdf-viewer-template');
        /** @type {?} */
        var anchor = (/** @type {?} */ (newElement));
        anchor.href = linkService.getAnchorUrl('#page=' + id);
        thumbPageTitlePromise.then((/**
         * @param {?} msg
         * @return {?}
         */
        function (msg) {
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
        var ring = (/** @type {?} */ (newElement.getElementsByClassName('image-container')[0]));
        pdfThumbnailView.ring = ring;
        pdfThumbnailView.div = (/** @type {?} */ (newElement.getElementsByClassName('thumbnail')[0]));
        container.appendChild(newElement);
        /** @type {?} */
        var thumbnailDrawnEvent = {
            thumbnail: newElement,
            container: container,
            pageId: id,
        };
        this.thumbnailDrawn.emit(thumbnailDrawnEvent);
    };
    /**
     * @private
     * @param {?} htmlString
     * @return {?}
     */
    PdfSidebarContentComponent.prototype.createElementFromHTML = /**
     * @private
     * @param {?} htmlString
     * @return {?}
     */
    function (htmlString) {
        /** @type {?} */
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        // Change this to div.childNodes to support multiple top-level nodes
        return (/** @type {?} */ (div.firstChild));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PdfSidebarContentComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    Object.defineProperty(PdfSidebarContentComponent.prototype, "hideSidebarToolbar", {
        set: /**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            this._hideSidebarToolbar = h;
            if (this._hideSidebarToolbar) {
                this.top = '0';
            }
            else {
                this.top = '32px';
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfSidebarContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-sidebar-content',
                    template: "<div id=\"sidebarContent\" [style.top]=\"top\">\n  <div #thumbnailViewTemplate>\n    <ng-content *ngTemplateOutlet=\"customThumbnail ? customThumbnail : defaultThumbnail\"></ng-content>\n  </div>\n  <div id=\"thumbnailView\" (keydown)=\"onKeyDown($event)\"></div>\n  <div id=\"outlineView\" class=\"hidden\"></div>\n  <div id=\"attachmentsView\" class=\"hidden\"></div>\n  <div id=\"layersView\" class=\"hidden\"></div>\n</div>\n\n<ng-template #defaultThumbnail>\n  <a class=\"pdf-viewer-template\">\n    <div class=\"thumbnail\" data-page-number=\"$page\">\n      <div class=\"thumbnailSelectionRing image-container\" style=\"width: WIDTH_OF_RING; height: HEIGHT_OF_RING\">\n        <!-- image is automatically inserted here -->\n        <!-- <img class=\"thumbnailImage\" style=\"width: 98px; height: 73px;\" /> -->\n      </div>\n    </div>\n  </a>\n</ng-template>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfSidebarContentComponent.ctorParameters = function () { return []; };
    PdfSidebarContentComponent.propDecorators = {
        customThumbnail: [{ type: Input }],
        thumbnailViewTemplate: [{ type: ViewChild, args: ['thumbnailViewTemplate',] }],
        thumbnailDrawn: [{ type: Output }],
        hideSidebarToolbar: [{ type: Input }]
    };
    return PdfSidebarContentComponent;
}());
export { PdfSidebarContentComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLWNvbnRlbnQvcGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBYSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQWlCaEgsNkJBQTZCLEdBQUcsQ0FBQzs7QUFFdkM7SUFxQkU7UUFBQSxpQkFTQztRQWZNLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFFNUQsUUFBRyxHQUFHLE1BQU0sQ0FBQztRQUViLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQUdqQyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsMEJBQTBCOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLDBCQUEwQixFQUFFLEVBQWpDLENBQWlDLENBQUEsQ0FBQztRQUNyRixDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMscUJBQXFCOzs7Ozs7OztRQUFHLFVBQ3RDLGdCQUFrQyxFQUNsQyxXQUFnQixFQUNoQixFQUFVLEVBQ1YsU0FBeUIsRUFDekIscUJBQXNDLElBQ25DLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxFQUF6RixDQUF5RixDQUFBLENBQUM7SUFDakcsQ0FBQzs7OztJQUVNLGdEQUFXOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRU0sK0RBQTBCOzs7SUFBakM7UUFDRSxJQUFJLENB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LENBQUMsY0FBYyxFQUFFLENBQUM7YUFDeEI7U0FDRjtJQUNILENBQUM7SUFFRCxzQkFDVywwREFBa0I7Ozs7O1FBRDdCLFVBQzhCLENBQVU7WUFDdEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7YUFDbkI7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBdElGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixpM0JBQW1EOztpQkFFcEQ7Ozs7O2tDQUVFLEtBQUs7d0NBR0wsU0FBUyxTQUFDLHVCQUF1QjtpQ0FLakMsTUFBTTtxQ0FnSE4sS0FBSzs7SUFTUixpQ0FBQztDQUFBLEFBdklELElBdUlDO1NBbElZLDBCQUEwQjs7O0lBQ3JDLHFEQUN5Qzs7SUFFekMsMkRBQ3lDOzs7OztJQUV6QyxpREFBZ0Q7O0lBRWhELG9EQUNtRTs7SUFFbkUseUNBQW9COztJQUVwQix5REFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZXZlbnRzL3BkZi10aHVtYm5haWwtZHJhd24tZXZlbnQnO1xuXG5kZWNsYXJlIGNsYXNzIFBERlRodW1ibmFpbFZpZXcge1xuICBhbmNob3I6IEhUTUxBbmNob3JFbGVtZW50O1xuICBkaXY6IEhUTUxFbGVtZW50O1xuICByaW5nOiBIVE1MRWxlbWVudDtcbiAgY2FudmFzV2lkdGg6IG51bWJlcjtcbiAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XG59XG5cbmRlY2xhcmUgY2xhc3MgUERGTGlua1NlcnZpY2Uge1xuICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuICBwdWJsaWMgcGFnZXNDb3VudDogbnVtYmVyO1xuICBwdWJsaWMgZ2V0QW5jaG9yVXJsKHRhcmdldFVybDogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5jb25zdCBUSFVNQk5BSUxfQ0FOVkFTX0JPUkRFUl9XSURUSCA9IDE7IC8vIHB4XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi1zaWRlYmFyLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21UaHVtYm5haWw6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQFZpZXdDaGlsZCgndGh1bWJuYWlsVmlld1RlbXBsYXRlJylcbiAgcHVibGljIHRodW1ibmFpbFZpZXdUZW1wbGF0ZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGxpbmtTZXJ2aWNlOiBQREZMaW5rU2VydmljZSB8IHVuZGVmaW5lZDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHRodW1ibmFpbERyYXduID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZUaHVtYm5haWxEcmF3bkV2ZW50PigpO1xuXG4gIHB1YmxpYyB0b3AgPSAnMzJweCc7XG5cbiAgcHVibGljIF9oaWRlU2lkZWJhclRvb2xiYXIgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAod2luZG93IGFzIGFueSkucGRmVGh1bWJuYWlsR2VuZXJhdG9yUmVhZHkgPSAoKSA9PiB0aGlzLnBkZlRodW1ibmFpbEdlbmVyYXRvclJlYWR5KCk7XG4gICAgKHdpbmRvdyBhcyBhbnkpLnBkZlRodW1ibmFpbEdlbmVyYXRvciA9IChcbiAgICAgIHBkZlRodW1ibmFpbFZpZXc6IFBERlRodW1ibmFpbFZpZXcsXG4gICAgICBsaW5rU2VydmljZTogYW55LFxuICAgICAgaWQ6IG51bWJlcixcbiAgICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsXG4gICAgICB0aHVtYlBhZ2VUaXRsZVByb21pc2U6IFByb21pc2U8c3RyaW5nPlxuICAgICkgPT4gdGhpcy5jcmVhdGVUaHVtYm5haWwocGRmVGh1bWJuYWlsVmlldywgbGlua1NlcnZpY2UsIGlkLCBjb250YWluZXIsIHRodW1iUGFnZVRpdGxlUHJvbWlzZSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5saW5rU2VydmljZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBwZGZUaHVtYm5haWxHZW5lcmF0b3JSZWFkeSgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMudGh1bWJuYWlsVmlld1RlbXBsYXRlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHQgPSB0aGlzLnRodW1ibmFpbFZpZXdUZW1wbGF0ZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIHJldHVybiAhIXQgJiYgISF0LmlubmVySFRNTCAmJiB0LmlubmVySFRNTC5sZW5ndGggPiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVUaHVtYm5haWwoXG4gICAgcGRmVGh1bWJuYWlsVmlldzogUERGVGh1bWJuYWlsVmlldyxcbiAgICBsaW5rU2VydmljZTogUERGTGlua1NlcnZpY2UsXG4gICAgaWQ6IG51bWJlcixcbiAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxuICAgIHRodW1iUGFnZVRpdGxlUHJvbWlzZTogUHJvbWlzZTxzdHJpbmc+XG4gICkge1xuICAgIHRoaXMubGlua1NlcnZpY2UgPSBsaW5rU2VydmljZTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGh1bWJuYWlsVmlld1RlbXBsYXRlO1xuICAgIC8vIGdldCB0aGUgaW5uZXIgSFRNTCB3aXRob3V0IHRoZSBhdHRyaWJ1dGVzIGFuZCBjbGFzc2VzIGFkZGVkIGJ5IEFuZ3VsYXJcbiAgICBjb25zdCBpbm5lciA9IHRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MXG4gICAgICAuc3BsaXQoL19uZ1xcdystXFx3Ky1cXHcrPVwiXCIvZylcbiAgICAgIC5qb2luKCcnKVxuICAgICAgLnNwbGl0KC9uZy1cXHcrLVxcdysvZylcbiAgICAgIC5qb2luKCcnKVxuICAgICAgLnNwbGl0KC88IS0tW1xcc1xcU10qPy0tPi9nKVxuICAgICAgLmpvaW4oJycpO1xuXG4gICAgY29uc3QgYm9yZGVyQWRqdXN0bWVudCA9IDIgKiBUSFVNQk5BSUxfQ0FOVkFTX0JPUkRFUl9XSURUSDtcblxuICAgIGNvbnN0IHdpZHRoT2ZSaW5nID0gcGRmVGh1bWJuYWlsVmlldy5jYW52YXNXaWR0aCArIGJvcmRlckFkanVzdG1lbnQgKyAncHgnO1xuICAgIGNvbnN0IGhlaWdodE9mUmluZyA9IHBkZlRodW1ibmFpbFZpZXcuY2FudmFzSGVpZ2h0ICsgYm9yZGVyQWRqdXN0bWVudCArICdweCc7XG5cbiAgICBjb25zdCBuZXdIdG1sID0gaW5uZXIuc3BsaXQoJ1dJRFRIX09GX1JJTkcnKS5qb2luKHdpZHRoT2ZSaW5nKS5zcGxpdCgnSEVJR0hUX09GX1JJTkcnKS5qb2luKGhlaWdodE9mUmluZykuc3BsaXQoJ1BBR0VfTlVNQkVSJykuam9pbihpZCk7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudEZyb21IVE1MKG5ld0h0bWwpO1xuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGRmLXZpZXdlci10ZW1wbGF0ZScpO1xuXG4gICAgY29uc3QgYW5jaG9yID0gbmV3RWxlbWVudCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICBhbmNob3IuaHJlZiA9IGxpbmtTZXJ2aWNlLmdldEFuY2hvclVybCgnI3BhZ2U9JyArIGlkKTtcbiAgICB0aHVtYlBhZ2VUaXRsZVByb21pc2UudGhlbigobXNnKSA9PiB7XG4gICAgICBhbmNob3IudGl0bGUgPSBtc2c7XG4gICAgfSk7XG4gICAgYW5jaG9yLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsaW5rU2VydmljZS5wYWdlID0gaWQ7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBwZGZUaHVtYm5haWxWaWV3LmFuY2hvciA9IGFuY2hvcjtcblxuICAgIGNvbnN0IHJpbmcgPSBuZXdFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlLWNvbnRhaW5lcicpWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIHBkZlRodW1ibmFpbFZpZXcucmluZyA9IHJpbmc7XG4gICAgcGRmVGh1bWJuYWlsVmlldy5kaXYgPSBuZXdFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RodW1ibmFpbCcpWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuXG4gICAgY29uc3QgdGh1bWJuYWlsRHJhd25FdmVudDogUGRmVGh1bWJuYWlsRHJhd25FdmVudCA9IHtcbiAgICAgIHRodW1ibmFpbDogbmV3RWxlbWVudCxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgcGFnZUlkOiBpZCxcbiAgICB9O1xuICAgIHRoaXMudGh1bWJuYWlsRHJhd24uZW1pdCh0aHVtYm5haWxEcmF3bkV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudEZyb21IVE1MKGh0bWxTdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmcudHJpbSgpO1xuXG4gICAgLy8gQ2hhbmdlIHRoaXMgdG8gZGl2LmNoaWxkTm9kZXMgdG8gc3VwcG9ydCBtdWx0aXBsZSB0b3AtbGV2ZWwgbm9kZXNcbiAgICByZXR1cm4gZGl2LmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBpZiAodGhpcy5saW5rU2VydmljZSkge1xuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgdGhpcy5saW5rU2VydmljZS5wYWdlID0gdGhpcy5saW5rU2VydmljZS5wYWdlc0NvdW50O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGlua1NlcnZpY2UucGFnZSA8IHRoaXMubGlua1NlcnZpY2UucGFnZXNDb3VudCkge1xuICAgICAgICAgIHRoaXMubGlua1NlcnZpY2UucGFnZSA9IHRoaXMubGlua1NlcnZpY2UucGFnZSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1VwJykge1xuICAgICAgaWYgKHRoaXMubGlua1NlcnZpY2UpIHtcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xuICAgICAgICAgIHRoaXMubGlua1NlcnZpY2UucGFnZSA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5saW5rU2VydmljZS5wYWdlID4gMSkge1xuICAgICAgICAgIHRoaXMubGlua1NlcnZpY2UucGFnZSA9IHRoaXMubGlua1NlcnZpY2UucGFnZSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGhpZGVTaWRlYmFyVG9vbGJhcihoOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZVNpZGViYXJUb29sYmFyID0gaDtcbiAgICBpZiAodGhpcy5faGlkZVNpZGViYXJUb29sYmFyKSB7XG4gICAgICB0aGlzLnRvcCA9ICcwJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3AgPSAnMzJweCc7XG4gICAgfVxuICB9XG59XG4iXX0=