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
        // console.log(d);
        if (!dd || dd === this._data) {
            return;
        }
        this._data = dd;
        // const nums = [];
        // this.nums.splice(0, this.nums.length);
        const count = dd.length;
        for (let i = 0; i < count; i ++) {
            const d = dd[i];
            if (this.nums[i]) {
                this.nums[i] = d;
            } else {
                this.nums.push(d);
            }
        }
        // console.log(this.nums);
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
