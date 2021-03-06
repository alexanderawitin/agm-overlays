import { EventEmitter, ElementRef, QueryList } from "@angular/core";
import { AgmInfoWindow, MarkerManager, GoogleMapsAPIWrapper } from "@agm/core";
export interface latLng {
    latitude: number;
    longitude: number;
}
export interface bounds {
    x: latLng;
    y: latLng;
}
export interface latLngPlus {
    latitude: number;
    longitude: number;
    bounds?: bounds;
}
export declare class AgmOverlay {
    protected _mapsWrapper: GoogleMapsAPIWrapper;
    private _markerManager;
    overlayView: any;
    elmGuts: any;
    private _observableSubscriptions;
    latitude: number;
    longitude: number;
    visible: boolean;
    zIndex: number;
    bounds: bounds;
    markerClick: EventEmitter<void>;
    openInfoWindow: boolean;
    infoWindow: QueryList<AgmInfoWindow>;
    draggable: boolean;
    template: ElementRef;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _markerManager: MarkerManager);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: any): void;
    onChanges(changes: any): void;
    onChangesOverride(changes: any): void;
    ngOnDestroy(): void;
    destroy(): void;
    private handleInfoWindowUpdate;
    load(): Promise<void>;
    getOverlay(map: any): any;
    handleTap(): void;
    _addEventListeners(): void;
}
