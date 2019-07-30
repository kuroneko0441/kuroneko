export class KNDropdownModel<T> {
  public label: string = '';
  public value: T;

  public constructor(label: string, value: T) {
    this.label = label;
    this.value = value;
  }

  public equals(dropdownModel: KNDropdownModel<T>): boolean {
    return this.label === dropdownModel.label
      && this.value === dropdownModel.value;
  }
}
