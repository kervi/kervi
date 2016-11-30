// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { BehaviorSubject } from 'rxjs/Rx';

export class SensorModel {
    public id: string = null;
    public name: string = null;
    public type: string = null;
    public max: number = null;
    public min: number = null;
    public unit: string = null;
    public value$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public dashboards: string[] = [];
    public sparkline$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

}