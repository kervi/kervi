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
        kerviService.spine.addStreamHandler(streamId, events, function(e_streamId: string, e_streamEvent: string, e_data: any) {
            const event = new StreamEvent(e_streamId, e_streamEvent, e_data);
            let notify = false;
            if (events === null || events.length === 0 || events.indexOf(e_streamEvent) >= 0) {
                notify = true;
            }
            if (notify) {
                self.events$.next(event);
            }
        });
    }

    public close() {
        this.kerviService.spine.removeStreamHandler(this.streamId, this.events, null);
    }
}