import {  BehaviorSubject, Observable } from 'rxjs';
import { KerviBaseService } from '../kervi-js.service'

export class StreamEvent {
    public streamId: string;
    public event: string;
    public data: any;

    constructor(streamId: string, streamEvent: string, data: any) {
        this.streamId = streamId;
        this.event = streamEvent;
        this.data = data;
    }
}

export class Stream {
    public events$: BehaviorSubject<StreamEvent> = new BehaviorSubject<StreamEvent>(null);

    constructor(private streamId: string, private events: string[], private kerviService: KerviBaseService){
        const self = this;
        // this.events$ =  new BehaviorSubject<StreamEvent>(null)
        kerviService.spine.addStreamHandler(streamId, null, function(estreamId: string, estreamEvent: string, edata: any) {
                const event = new StreamEvent(estreamId, estreamEvent, edata);
                self.events$.next(event);
        });
    }

    public close() {
        //this.kerviService.spine.removeStreamHandler(streamId)
    }
}