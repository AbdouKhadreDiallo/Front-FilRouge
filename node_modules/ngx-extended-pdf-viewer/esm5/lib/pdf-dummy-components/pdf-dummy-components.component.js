/**
 * @fileoverview added by tsickle
 * Generated from: lib/pdf-dummy-components/pdf-dummy-components.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * List of all field that can be customized
 * @type {?}
 */
var requiredIds = [
    'toolbarViewer',
    'numPages',
    'pageNumber',
    'scaleSelectContainer',
    'customScaleOption',
    'previous',
    'next',
    'zoomIn',
    'zoomOut',
    'viewFind',
    'openFile',
    'print',
    'presentationMode',
    'download',
    'viewBookmark',
    'secondaryToolbar',
    'secondaryToolbarToggle',
    'secondaryToolbarButtonContainer',
    'secondaryPresentationMode',
    'secondaryOpenFile',
    'secondaryPrint',
    'secondaryDownload',
    'secondaryViewBookmark',
    'firstPage',
    'lastPage',
    'pageRotateCw',
    'pageRotateCcw',
    'cursorSelectTool',
    'cursorHandTool',
    'scrollVertical',
    'scrollHorizontal',
    'scrollWrapped',
    'spreadNone',
    'spreadOdd',
    'spreadEven',
    'documentProperties',
    'contextFirstPage',
    'contextLastPage',
    'contextPageRotateCw',
    'contextPageRotateCcw',
    'outerContainer',
    'viewerContainer',
    'sidebarToggle',
    'viewThumbnail',
    'viewOutline',
    'viewAttachments',
    'thumbnailView',
    'outlineView',
    'attachmentsView',
    'outerContainer',
    'sidebarResizer',
    'findbar',
    'viewFind',
    'findInput',
    'findInputMultiline',
    'findHighlightAll',
    'findMatchCase',
    'findEntireWord',
    'findMultipleSearchTexts',
    'findIgnoreAccents',
    'findMsg',
    'findResultsCount',
    'findPrevious',
    'findNext',
    'findFuzzy',
    'passwordOverlay',
    'passwordText',
    'password',
    'passwordSubmit',
    'passwordCancel',
    'documentPropertiesOverlay',
    'documentPropertiesClose',
    'fileNameField',
    'fileSizeField',
    'titleField',
    'authorField',
    'subjectField',
    'keywordsField',
    'creationDateField',
    'modificationDateField',
    'creatorField',
    'producerField',
    'versionField',
    'pageCountField',
    'pageSizeField',
    'linearizedField',
    'errorWrapper',
    'errorMessage',
    'errorClose',
    'errorMoreInfo',
    'errorShowMore',
    'errorShowLess',
    'scaleSelectContainer',
    'viewAttachments',
    'viewLayers',
    'viewThumbnail',
    'viewOutline'
];
var PdfDummyComponentsComponent = /** @class */ (function () {
    function PdfDummyComponentsComponent() {
    }
    /**
     * @return {?}
     */
    PdfDummyComponentsComponent.prototype.addMissingStandardWidgets = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dummyComponentsContainer = document.getElementsByClassName('dummy-pdf-viewer-components')[0];
        /** @type {?} */
        var container = (/** @type {?} */ (this.dummyComponentsContainer));
        if (container) {
            for (var i = 0; i < container.children.length; i++) {
                /** @type {?} */
                var child = container.firstChild;
                if (child) {
                    container.removeChild(child);
                }
            }
        }
        requiredIds.forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            if (_this.needsDummyWidget(id)) {
                /** @type {?} */
                var dummy = document.createElement('span');
                dummy.id = id;
                dummy.className = 'invisible dummy-component';
                _this.dummyComponentsContainer.appendChild(dummy);
            }
        }));
        if (this.needsDummyWidget('scaleSelect')) {
            /** @type {?} */
            var dummy = document.createElement('select');
            dummy.id = 'scaleSelect';
            dummy.className = 'invisible dummy-component';
            this.dummyComponentsContainer.appendChild(dummy);
        }
    };
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    PdfDummyComponentsComponent.prototype.needsDummyWidget = /**
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var widget = document.getElementById(id);
        if (!widget) {
            return true;
        }
        return false;
    };
    PdfDummyComponentsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-dummy-components',
                    template: "<span class=\"invisible dummy-pdf-viewer-components\">\n</span>\n"
                }] }
    ];
    return PdfDummyComponentsComponent;
}());
export { PdfDummyComponentsComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PdfDummyComponentsComponent.prototype.dummyComponentsContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvcGRmLWR1bW15LWNvbXBvbmVudHMvcGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFHcEMsV0FBVyxHQUFHO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0lBQ1YsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7Q0FDZDtBQUVEO0lBQUE7SUEyQ0EsQ0FBQzs7OztJQXBDUSwrREFBeUI7OztJQUFoQztRQUFBLGlCQTJCQztRQTFCQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQzVGLFNBQVMsR0FBRyxtQkFBQSxJQUFJLENBQUMsd0JBQXdCLEVBQWU7UUFDOUQsSUFBSSxTQUFTLEVBQUU7WUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUM1QyxLQUFLLEdBQUcsU0FBUyxDQUFDLFVBQVU7Z0JBQ2xDLElBQUksS0FBSyxFQUFFO29CQUNULFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzlCO2FBQ0Y7U0FDRjtRQUVELFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxFQUFFO1lBQ3BCLElBQUksS0FBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxFQUFFOztvQkFDdkIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDZCxLQUFLLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDO2dCQUM5QyxLQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xEO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsRUFBRTs7Z0JBQ2xDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUM5QyxLQUFLLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQztZQUN6QixLQUFLLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDO1lBQzlDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7Ozs7SUFFTyxzREFBZ0I7Ozs7O0lBQXhCLFVBQXlCLEVBQVU7O1lBQzNCLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyw2RUFBb0Q7aUJBQ3JEOztJQXdDRCxrQ0FBQztDQUFBLEFBM0NELElBMkNDO1NBdkNZLDJCQUEyQjs7Ozs7O0lBQ3RDLCtEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogTGlzdCBvZiBhbGwgZmllbGQgdGhhdCBjYW4gYmUgY3VzdG9taXplZCAqL1xuY29uc3QgcmVxdWlyZWRJZHMgPSBbXG4gICd0b29sYmFyVmlld2VyJyxcbiAgJ251bVBhZ2VzJyxcbiAgJ3BhZ2VOdW1iZXInLFxuICAnc2NhbGVTZWxlY3RDb250YWluZXInLFxuICAnY3VzdG9tU2NhbGVPcHRpb24nLFxuICAncHJldmlvdXMnLFxuICAnbmV4dCcsXG4gICd6b29tSW4nLFxuICAnem9vbU91dCcsXG4gICd2aWV3RmluZCcsXG4gICdvcGVuRmlsZScsXG4gICdwcmludCcsXG4gICdwcmVzZW50YXRpb25Nb2RlJyxcbiAgJ2Rvd25sb2FkJyxcbiAgJ3ZpZXdCb29rbWFyaycsXG4gICdzZWNvbmRhcnlUb29sYmFyJyxcbiAgJ3NlY29uZGFyeVRvb2xiYXJUb2dnbGUnLFxuICAnc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lcicsXG4gICdzZWNvbmRhcnlQcmVzZW50YXRpb25Nb2RlJyxcbiAgJ3NlY29uZGFyeU9wZW5GaWxlJyxcbiAgJ3NlY29uZGFyeVByaW50JyxcbiAgJ3NlY29uZGFyeURvd25sb2FkJyxcbiAgJ3NlY29uZGFyeVZpZXdCb29rbWFyaycsXG4gICdmaXJzdFBhZ2UnLFxuICAnbGFzdFBhZ2UnLFxuICAncGFnZVJvdGF0ZUN3JyxcbiAgJ3BhZ2VSb3RhdGVDY3cnLFxuICAnY3Vyc29yU2VsZWN0VG9vbCcsXG4gICdjdXJzb3JIYW5kVG9vbCcsXG4gICdzY3JvbGxWZXJ0aWNhbCcsXG4gICdzY3JvbGxIb3Jpem9udGFsJyxcbiAgJ3Njcm9sbFdyYXBwZWQnLFxuICAnc3ByZWFkTm9uZScsXG4gICdzcHJlYWRPZGQnLFxuICAnc3ByZWFkRXZlbicsXG4gICdkb2N1bWVudFByb3BlcnRpZXMnLFxuICAnY29udGV4dEZpcnN0UGFnZScsXG4gICdjb250ZXh0TGFzdFBhZ2UnLFxuICAnY29udGV4dFBhZ2VSb3RhdGVDdycsXG4gICdjb250ZXh0UGFnZVJvdGF0ZUNjdycsXG4gICdvdXRlckNvbnRhaW5lcicsXG4gICd2aWV3ZXJDb250YWluZXInLFxuICAnc2lkZWJhclRvZ2dsZScsXG4gICd2aWV3VGh1bWJuYWlsJyxcbiAgJ3ZpZXdPdXRsaW5lJyxcbiAgJ3ZpZXdBdHRhY2htZW50cycsXG4gICd0aHVtYm5haWxWaWV3JyxcbiAgJ291dGxpbmVWaWV3JyxcbiAgJ2F0dGFjaG1lbnRzVmlldycsXG4gICdvdXRlckNvbnRhaW5lcicsXG4gICdzaWRlYmFyUmVzaXplcicsXG4gICdmaW5kYmFyJyxcbiAgJ3ZpZXdGaW5kJyxcbiAgJ2ZpbmRJbnB1dCcsXG4gICdmaW5kSW5wdXRNdWx0aWxpbmUnLFxuICAnZmluZEhpZ2hsaWdodEFsbCcsXG4gICdmaW5kTWF0Y2hDYXNlJyxcbiAgJ2ZpbmRFbnRpcmVXb3JkJyxcbiAgJ2ZpbmRNdWx0aXBsZVNlYXJjaFRleHRzJyxcbiAgJ2ZpbmRJZ25vcmVBY2NlbnRzJyxcbiAgJ2ZpbmRNc2cnLFxuICAnZmluZFJlc3VsdHNDb3VudCcsXG4gICdmaW5kUHJldmlvdXMnLFxuICAnZmluZE5leHQnLFxuICAnZmluZEZ1enp5JyxcbiAgJ3Bhc3N3b3JkT3ZlcmxheScsXG4gICdwYXNzd29yZFRleHQnLFxuICAncGFzc3dvcmQnLFxuICAncGFzc3dvcmRTdWJtaXQnLFxuICAncGFzc3dvcmRDYW5jZWwnLFxuICAnZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheScsXG4gICdkb2N1bWVudFByb3BlcnRpZXNDbG9zZScsXG4gICdmaWxlTmFtZUZpZWxkJyxcbiAgJ2ZpbGVTaXplRmllbGQnLFxuICAndGl0bGVGaWVsZCcsXG4gICdhdXRob3JGaWVsZCcsXG4gICdzdWJqZWN0RmllbGQnLFxuICAna2V5d29yZHNGaWVsZCcsXG4gICdjcmVhdGlvbkRhdGVGaWVsZCcsXG4gICdtb2RpZmljYXRpb25EYXRlRmllbGQnLFxuICAnY3JlYXRvckZpZWxkJyxcbiAgJ3Byb2R1Y2VyRmllbGQnLFxuICAndmVyc2lvbkZpZWxkJyxcbiAgJ3BhZ2VDb3VudEZpZWxkJyxcbiAgJ3BhZ2VTaXplRmllbGQnLFxuICAnbGluZWFyaXplZEZpZWxkJyxcbiAgJ2Vycm9yV3JhcHBlcicsXG4gICdlcnJvck1lc3NhZ2UnLFxuICAnZXJyb3JDbG9zZScsXG4gICdlcnJvck1vcmVJbmZvJyxcbiAgJ2Vycm9yU2hvd01vcmUnLFxuICAnZXJyb3JTaG93TGVzcycsXG4gICdzY2FsZVNlbGVjdENvbnRhaW5lcicsXG4gICd2aWV3QXR0YWNobWVudHMnLFxuICAndmlld0xheWVycycsXG4gICd2aWV3VGh1bWJuYWlsJyxcbiAgJ3ZpZXdPdXRsaW5lJ1xuXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLWR1bW15LWNvbXBvbmVudHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudCB7XG4gIHByaXZhdGUgZHVtbXlDb21wb25lbnRzQ29udGFpbmVyOiBFbGVtZW50O1xuXG4gIHB1YmxpYyBhZGRNaXNzaW5nU3RhbmRhcmRXaWRnZXRzKCk6IHZvaWQge1xuICAgIHRoaXMuZHVtbXlDb21wb25lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHVtbXktcGRmLXZpZXdlci1jb21wb25lbnRzJylbMF07XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5kdW1teUNvbXBvbmVudHNDb250YWluZXIgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVpcmVkSWRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgaWYgKHRoaXMubmVlZHNEdW1teVdpZGdldChpZCkpIHtcbiAgICAgICAgY29uc3QgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGR1bW15LmlkID0gaWQ7XG4gICAgICAgIGR1bW15LmNsYXNzTmFtZSA9ICdpbnZpc2libGUgZHVtbXktY29tcG9uZW50JztcbiAgICAgICAgdGhpcy5kdW1teUNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVtbXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubmVlZHNEdW1teVdpZGdldCgnc2NhbGVTZWxlY3QnKSkge1xuICAgICAgY29uc3QgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgIGR1bW15LmlkID0gJ3NjYWxlU2VsZWN0JztcbiAgICAgIGR1bW15LmNsYXNzTmFtZSA9ICdpbnZpc2libGUgZHVtbXktY29tcG9uZW50JztcbiAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1bW15KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5lZWRzRHVtbXlXaWRnZXQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHdpZGdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoIXdpZGdldCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19