// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit } from '@angular/core';
import { KerviService } from '../kervi.service';
import { SensorModel } from '../sensors/models/sensor.model';
import { SensorsService } from '../sensors/sensors.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
declare var Chart: any;
declare var jQuery: any;

@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
	currentSensor$: BehaviorSubject<SensorModel> = new BehaviorSubject<SensorModel>(null);
	sensorTypes$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
	constructor(private kerviService: KerviService, private sensorsService: SensorsService) {
		var self = this;
		this.sensorsService.getSensorTypes$().subscribe(function (v) {
			console.log("cst", v);
			self.sensorTypes$.next(v);
		});
	}

	ngOnInit() {

	}

	getSensors(sensorType) {
		return this.sensorsService.getSensorsOfType(sensorType);
	}

	selectChart(sensor: SensorModel) {
		console.log("scs", sensor);
		this.currentSensor$.next(sensor);

		this.kerviService.spine.sendQuery("getSensorData", sensor.id, function (results) {
			console.log("gsd", this, results);
			var sensorData = this;
			var chartData = [];
			for (var i = 0; (i < sensorData.length); i++) {
				var dataItem = sensorData[i]
				chartData.push({ x: new Date(dataItem.ts), y: dataItem.value });
			}

			var ctx = jQuery("#sensorChartCanvas");
			var chart = new Chart(ctx, {
				type: 'line',
				responsive: false,
				data: {
					datasets: [
						{
							data: chartData,
							fill: false
						},
					]
				},
				options: {
					responsive: true,
					title: {
						display: true,
						text: sensor.type + "-" + sensor.name
					},
					scales: {
						xAxes: [{
							type: "time",
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Date'
							}
						}],
						yAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'value'
							}
						}]
					}
				}
			});
		})
		};
}
