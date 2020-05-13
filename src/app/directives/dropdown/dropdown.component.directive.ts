import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dropdown-directive',
    templateUrl: './dropdown.component.view.html',
    styleUrls: ['./dropdown.directive.view.css']
})
export class DropdownDirectiveComponent implements OnInit {
    private _Menus: Array<any>;
    public isClicked: boolean;
    public selectedValue: any;
    headers: Array<string>;
    // an event that will be emitted
    // with payload as generic data
    // in this case data type is 'any'
    @Output()
    onOptionSelected: EventEmitter<any>;
    @Input()
    dropdownHeader: string;

    constructor() {
        this._Menus = new Array<any>();
        this.headers = new Array<string>();
        this.onOptionSelected = new EventEmitter<any>();
        this.dropdownHeader = this.dropdownHeader === undefined ? '--Select--' : this.dropdownHeader;
    }

    @Input()
    set MenuSource(val: Array<any>) {
        if (val.length > 0) {
            this._Menus = val;
            //    for(let p in this._Menus[0]) {
            //      this.headers.push(p);
            //    }
        } else {
            this._Menus = new Array<any>();
        }
    }

    get MenuSource(): Array<any> {
        return this._Menus;
    }

    onOptionSelectedEvent(r: any) {
        // emit() method will emit an event
        this.onOptionSelected.emit(r);
    }

    public toggle() {
        this.isClicked = !this.isClicked;
    }

    ngOnInit(): void { }
}
