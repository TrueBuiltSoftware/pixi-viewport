import { Container } from '@pixi/display';
import { IPointData, Point, Rectangle, Ticker } from '@pixi/core';
import { InputManager } from './InputManager';
import { PluginManager } from './PluginManager';
import { IAnimateOptions, IBounceOptions, IClampOptions, IClampZoomOptions, IDecelerateOptions, IDragOptions, IFollowOptions, IMouseEdgesOptions, IPinchOptions, ISnapOptions, ISnapZoomOptions, IWheelOptions } from './plugins';
import type { DisplayObject, IDestroyOptions } from '@pixi/display';
import type { IHitArea, EventSystem } from '@pixi/events';
export interface IViewportOptions {
    screenWidth?: number;
    screenHeight?: number;
    worldWidth?: number | null;
    worldHeight?: number | null;
    threshold?: number;
    passiveWheel?: boolean;
    stopPropagation?: boolean;
    forceHitArea?: Rectangle | null;
    noTicker?: boolean;
    events: EventSystem;
    disableOnContextMenu?: boolean;
    ticker?: Ticker;
}
export interface ICompleteViewportOptions extends IViewportOptions {
    screenWidth: number;
    screenHeight: number;
    threshold: number;
    passiveWheel: boolean;
    stopPropagation: boolean;
    noTicker: boolean;
    ticker: Ticker;
}
export interface IViewportTransformState {
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
}
export declare class Viewport extends Container {
    moving?: boolean;
    screenWidth: number;
    screenHeight: number;
    threshold: number;
    readonly input: InputManager;
    readonly plugins: PluginManager;
    zooming?: boolean;
    lastViewport?: IViewportTransformState | null;
    readonly options: ICompleteViewportOptions;
    private _dirty?;
    private _forceHitArea?;
    private _hitAreaDefault?;
    private _pause?;
    private readonly tickerFunction?;
    private _worldWidth?;
    private _worldHeight?;
    private _disableOnContextMenu;
    constructor(options: IViewportOptions);
    destroy(options?: IDestroyOptions): void;
    update(elapsed: number): void;
    resize(screenWidth?: number, screenHeight?: number, worldWidth?: number, worldHeight?: number): void;
    get worldWidth(): number;
    set worldWidth(value: number);
    get worldHeight(): number;
    set worldHeight(value: number);
    getVisibleBounds(): Rectangle;
    toWorld<P extends IPointData = Point>(x: number, y: number): P;
    toWorld<P extends IPointData = Point>(screenPoint: IPointData): P;
    toScreen<P extends IPointData = Point>(x: number, y: number): P;
    toScreen<P extends IPointData = Point>(worldPoint: IPointData): P;
    get worldScreenWidth(): number;
    get worldScreenHeight(): number;
    get screenWorldWidth(): number;
    get screenWorldHeight(): number;
    get center(): Point;
    set center(value: Point);
    moveCenter(x: number, y: number): Viewport;
    moveCenter(center: IPointData): Viewport;
    get corner(): Point;
    set corner(value: Point);
    moveCorner(x: number, y: number): Viewport;
    moveCorner(center: Point): Viewport;
    get screenWidthInWorldPixels(): number;
    get screenHeightInWorldPixels(): number;
    findFitWidth(width: number): number;
    findFitHeight(height: number): number;
    findFit(width: number, height: number): number;
    findCover(width: number, height: number): number;
    fitWidth(width?: number, center?: boolean, scaleY?: boolean, noClamp?: boolean): Viewport;
    fitHeight(height?: number, center?: boolean, scaleX?: boolean, noClamp?: boolean): Viewport;
    fitWorld(center?: boolean): Viewport;
    fit(center?: boolean, width?: number, height?: number): Viewport;
    setZoom(scale: number, center?: boolean): Viewport;
    zoomPercent(percent: number, center?: boolean): Viewport;
    zoom(change: number, center?: boolean): Viewport;
    get scaled(): number;
    set scaled(scale: number);
    snapZoom(options?: ISnapZoomOptions): Viewport;
    OOB(): {
        left: boolean;
        right: boolean;
        top: boolean;
        bottom: boolean;
        cornerPoint: Point;
    };
    get right(): number;
    set right(value: number);
    get left(): number;
    set left(value: number);
    get top(): number;
    set top(value: number);
    get bottom(): number;
    set bottom(value: number);
    get dirty(): boolean;
    set dirty(value: boolean);
    get forceHitArea(): IHitArea | null | undefined;
    set forceHitArea(value: IHitArea | null | undefined);
    drag(options?: IDragOptions): Viewport;
    clamp(options?: IClampOptions): Viewport;
    decelerate(options?: IDecelerateOptions): Viewport;
    bounce(options?: IBounceOptions): Viewport;
    pinch(options?: IPinchOptions): Viewport;
    snap(x: number, y: number, options?: ISnapOptions): Viewport;
    follow(target: DisplayObject, options?: IFollowOptions): Viewport;
    wheel(options?: IWheelOptions): Viewport;
    animate(options: IAnimateOptions): Viewport;
    clampZoom(options: IClampZoomOptions): Viewport;
    mouseEdges(options: IMouseEdgesOptions): Viewport;
    get pause(): boolean;
    set pause(value: boolean);
    ensureVisible(x: number, y: number, width: number, height: number, resizeToFit?: boolean): void;
}
