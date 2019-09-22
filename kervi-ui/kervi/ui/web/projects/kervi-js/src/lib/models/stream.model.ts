import {  BehaviorSubject, Observable } from 'rxjs';
import { KerviBaseService } from '../kervi-js.service'

export class StreamEvent {
    public event: string;
    public data: any;

    constructor(message) {
        this.event = message.event;
        this.data = message.data;
    }
}

export class Stream {
    public events$: BehaviorSubject<StreamEvent> = new BehaviorSubject(null);

    constructor(private streamId: string, private events: string[], private kerviService: KerviBaseService){
        kerviService.spine.addStreamHandler(streamId, null, function(message) {
            this.events$.next(message);
        });
    }

    public close() {
        //this.kerviService.spine.removeStreamHandler(streamId)
    }
}