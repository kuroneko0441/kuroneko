export class KNDropdownModel<T> {
  public label: string = '';
  public value: T;

  public constructor(label: string, value: T) {
    this.label = label;
    this.value = value;
  }

  public equals(dropdownModel: KNDropdownModel<T>, valueComparer?: (a: T, b: T) => boolean): boolean {
    return this.label === dropdownModel.label
      && (typeof valueComparer === 'function' ? valueComparer(this.value, dropdownModel.value) : this.value === dropdownModel.value);
  }
}
