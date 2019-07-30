export class KNDropdownModel {
  public label: string = '';
  public value: any;

  public constructor(label: string, value: any) {
    this.label = label;
    this.value = value;
  }

  public equals(dropdownModel: KNDropdownModel): boolean {
    return this.label === dropdownModel.label
      && this.value === dropdownModel.value;
  }
}
