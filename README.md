# kuroneko

UI Components for Angular(2~)

[![Build Status](https://travis-ci.com/kuroneko0441/kuroneko.svg?token=3zUeqTbGC3p63xQyePbp&branch=develop)](https://travis-ci.com/kuroneko0441/kuroneko)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------- | --------- |
| last version| last version

**ALPHA VERSION. THIS README WILL BE WELL ORGANIZED NEAR FUTURE.**

### Showcase

We're building showcase website for this library.  
Until then, you can serve showcase locally on `localhost:4200` with `npm start`.

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
- **Dropdown**
  - module 
    - `MenuModule`
  - component
    - `MenuComponent`
  - model
    - `KNMenuModel`
      - label
      - shortcut?
      - items
      - callback
  - property
    - model
  - example: 
  ```
  <kn-menu [model]="menuModel"></kn-menu>
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
- **Paginator**
  - module 
    - `PaginatorModule`
  - component
    - `paginatorComponent`
  - property
    - page
    - firstPage
    - lastPage
    - sidePages
  - event
    - pageChange
  - example: 
  ```
    <kn-paginator [(page)]="2" [firstPage]="1" [lastPage]="7" [sidePages]="3"></kn-paginator>
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

### Theming

Theme file: `shared.scss`

You can import this file from your `.scss` file to use predefined values.
```
@import "~kuroneko/shared.scss";
```

If you want to change theme, you just need to change `$primary` variable.  
Any other variables(`primary-background`, `$text`, ...) will computed from `$primary` variable.

### Icons

We use [Material Design Icons](https://material.io/tools/icons) for our library.  
You need to import [Material Design Icons css](https://fonts.googleapis.com/icon?family=Material+Icons) to use these components properly.
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```  

Also you can use these icons, just pick icon name and write it.

```html
<i class="material-icons">done</i>
<i class="material-icons">face</i>
<i class="material-icons">fingerprint</i>
``` 
