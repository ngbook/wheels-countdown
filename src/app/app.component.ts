import {
    Component, ViewContainerRef,
    OnInit, Injector,
    ComponentFactoryResolver
} from '@angular/core';
import * as moment from 'moment';

const DEFAULT_DATE = '2018-01-01';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    hours = '02';
    minutes = '11';
    seconds = '59';

    _hours = parseInt(this.hours, 0);
    _minutes = parseInt(this.minutes, 0);
    _seconds = parseInt(this.seconds, 0);

    startAvailable = false;

    private time: moment.Moment; // 只用到时分秒
    private interval: any;

    constructor() {
    }

    ngOnInit() {
        this.updateTime();
        this.countdown();
    }

    updateCountdown() {
        this.hours = this.num2str(this._hours);
        this.minutes = this.num2str(this._minutes);
        this.seconds = this.num2str(this._seconds);
        this.updateTime();
        this.startAvailable = true;
        clearInterval(this.interval);
    }
    countdown() {
        this.startAvailable = false;
        this.interval = setInterval(() => {
            this.time.subtract(1, 'second');
            this.seconds = this.num2str(this.time.seconds());
            this.minutes = this.num2str(this.time.minutes());
            this.hours = this.num2str(this.time.hours());
            const diff = this.time.diff(moment(DEFAULT_DATE), 'seconds');
            if (diff <= 0) {
                clearInterval(this.interval);
            }
        }, 1000);
    }
    private updateTime() {
        this.time = moment(`${DEFAULT_DATE} ${this.hours}:${this.minutes}:${this.seconds}`);
    }
    private num2str(num: number|string): string {
        num = +num; // 用户输入的是字符串，这里要强制转一下
        if (num < 10) {
            return '0' + num;
        } else {
            return '' + num;
        }
    }
}
