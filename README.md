[![NPM version](https://img.shields.io/npm/v/@webacad/ng-mat-quill.svg?style=flat-square)](https://www.npmjs.com/package/@webacad/ng-mat-quill)
[![Build Status](https://img.shields.io/travis/Web-ACAD/ng-mat-quill.svg?style=flat-square)](https://travis-ci.org/Web-ACAD/ng-mat-quill)

# WebACAD/MatQuill

[Quill](https://quilljs.com/) editor integration for angular material forms. Based on 
[@webacad/ng-quill](https://github.com/Web-ACAD/ng-quill).

## Installation

```bash
$ npm install --save @angular/common@^5.0
$ npm install --save @angular/core@^5.0
$ npm install --save @angular/forms@^5.0
$ npm install --save quill
$ npm install --save rxjs
$ npm install --save @webacad/ng-quill@^0.0.1
$ npm install --save @webacad/ng-mat-quill
```

or with yarn

```bash
$ yarn add @angular/common@^5.0
$ yarn add @angular/core@^5.0
$ yarn add @angular/forms@^5.0
$ yarn add quill
$ yarn add rxjs
$ yarn add @webacad/ng-quill@^0.0.1
$ yarn add @webacad/ng-mat-quill
```

## Register module

**app.module.ts:**

```typescript
import {MatQuillModule} from '@webacad/ng-mat-quill';

@NgModule({
    imports: [
        MatQuillModule,
    ],
})
export class AppModule {}
```

## Usage

```html
<wa-mat-quill theme="snow"></wa-mat-quill>
```

Look [here](https://github.com/Web-ACAD/ng-quill#usage) for more details.

## Using in angular forms

This package implements all the necessary code for angular forms. That means that you can use it just like any other 
ordinary form control.

It is also fully ready for material's `<mat-form-field>` component.
