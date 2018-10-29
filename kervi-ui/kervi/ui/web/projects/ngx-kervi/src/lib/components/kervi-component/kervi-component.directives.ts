import { Directive } from "@angular/core";

@Directive({
  selector: "kervi-component-icon",
  exportAs: "KerviComponentIcon"
})
export class KerviComponentIcon {}

@Directive({
  selector: "kervi-component-label",
  exportAs: "KerviComponentLabel"
})
export class KerviComponentLabel {}

@Directive({
  selector: "kervi-component-value",
  exportAs: "KerviComponentValue"
})
export class KerviComponentValue {}

@Directive({
  selector: "kervi-component-value-icon",
  exportAs: "KerviComponentValueIcon"
})
export class KerviComponentValueIcon {}

@Directive({
  selector: "kervi-component-value-unit",
  exportAs: "KerviComponentValueUnit"
})
export class KerviComponentValueUnit {}