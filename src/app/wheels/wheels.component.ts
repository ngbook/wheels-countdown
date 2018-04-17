import {
    Component, OnInit,
    Input, ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'wheels',
  templateUrl: './wheels.component.html',
  styleUrls: ['./wheels.component.scss']
//   encapsulation: ViewEncapsulation.None
})
export class WheelsComponent implements OnInit {

    @Input()
    set data(dd: string) {
        if (!dd || dd === this._data) {
            return;
        }
        this._data = dd;
        const count = dd.length;
        const nums = [];
        for (let i = 0; i < count; i ++) {
            const d = dd[i];
            nums.push(d);
        }
        this.nums = nums;
    }

    @Input()
    delay;
    @Input()
    height;
    @Input()
    width = 30;
    @Input()
    color: string;
    @Input()
    bg = '#fff';
    @Input()
    itemBg: string;
    @Input()
    fontSize = 0;
    @Input()
    margin: string;

    nums: string[] = [];
    private _data: string;

    constructor() { }

    ngOnInit() {
        // console.log(this.nums);
    }

    trackByFn(index, item) {
        return index; // or item.id
    }
}
