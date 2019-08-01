export class KNMenuModel {
  public label: string;
  public shortcut?: string;
  public items: KNMenuModel[] = [];
  public callback: () => void;
}
