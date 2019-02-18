# kuroneko

**ALPHA VERSION. THIS README WILL BE WELL ORGANIZED NEAR FUTURE.**

UI Components for Angular(2~)

### Components

- **Button**
  - module
    - `ButtonModule`
  - component 
    - `ButtonComponent`
  - property
    - color
    - icon
    - iconPos
    - disabled
  - example
  ```
  <kn-button>Button</kn-button>
  ```
- **Dialog**
  - module 
    - `DialogModule`
  - component
    - `DialogComponent`
  - property
    - dialogTemplate
    - visible
  - example: 
  ```
  <kn-dialog [dialogTemplate]="dialogTemplate" [visible]="dialogVisible">
      <ng-template #dialogTemplate>Dialog</ng-template>
  </kn-dialog>
  ```
- **Dropdown**
  - module 
    - `DropdownModule`
  - component
    - `DropdownComponent`
  - model
    - `KNDropDownModel`
      - label
      - value
  - property
    - ngModel
    - opened
    - options
    - disabled
  - event
    - ngModelChange
    - openedChange
  - example: 
  ```
  <kn-dropdown [(ngModel)]="dropdownValue" [options]="dropDownOptions"></kn-dropdown>
  ```
- **Input**
  - module 
    - `InputModule`
  - component
    - `InputComponent`
  - property
    - ngModel
    - placeholder
    - multiline
    - disabled
  - event
    - ngModelChange
    - click
    - focus
    - blur
  - example: 
  ```
  <kn-input [(ngModel)]="defaultInputValue" placeholder="singleline"></kn-input>
  ```
- **Progress**
  - module 
    - `ProgressModule`
  - component
    - `ProgressComponent`
  - property
    - value
    - height
    - label
    - striped
    - animated
  - example: 
  ```
    <kn-progress value="40" label="true"></kn-progress>
  ```
- **Tab**
  - module 
    - `TabModule`
  - component
    - `TabComponent`
    - `TabPageComponent`
  - property
    - selectedIndex
    - label
    - bodyTemplate
  - event
    - selectedIndexChange
  - example: 
  ```
  <kn-tab>
      <kn-tab-page [label]="label" [bodyTemplate]="tabPageTemplate">
          <ng-template #tabPageTemplate>
              tab Content
          </ng-template>
      </kn-tab-page>
  </kn-tab>
  ```

### Palette

- primary
- light
- dark