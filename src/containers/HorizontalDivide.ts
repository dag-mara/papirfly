import "createjs";


/*****************************************************************************/
/**
 * Creates a horizontal divide line using the CreateJS Graphics class.
 */
export class HorizontalDivide extends createjs.Shape {


    //===== VARIABLES ======================================//
    private _color: string;
    private _thickness: number;
    private _width: number;


    //===== CONSTRUCTOR ====================================//
    constructor(color: string = "#000000", thickness: number = 1, width: number = 10) {
        super();

        this._color = color;
        this._thickness = thickness;
        this._width = width;

        this.updateDivide();
    }


    //===== FUNCTIONS ======================================//
    /**
     * Updates the horizontal divide line drawing instructions.
     */
    private updateDivide(): void {
        this.graphics.clear();
        this.graphics.setStrokeStyle(this._thickness);
        this.graphics.beginStroke(this._color);
        this.graphics.moveTo(0, 0.5);
        this.graphics.lineTo(this._width, 0.5);
        this.graphics.endStroke();
    }


    //===== GETTERS / SETTERS ==============================//
    /** Sets the line color (e.g. `#000000`). */
    get color(): string {
        return this._color;
    }
    set color(value: string) {
        this._color = value;
        this.updateDivide();
    }

    /** Sets the line thickness. */
    get thickness(): number {
        return this._thickness;
    }
    set thickness(value: number) {
        this._thickness = value;
        this.updateDivide();
    }

    /** Sets the line width. */
    get width(): number {
        return this._width;
    }
    set width(value: number) {
        this._width = value;
        this.updateDivide();
    }
}