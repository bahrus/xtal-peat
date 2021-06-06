# xtal-peat
Repeating web component that merges a ShadowDOM (or ShadowDOM emulation?) template with a light children template repeatedly.

## Syntax

```html
<template id=shadowDOM>
<fieldset>
    <legend><slot name=label></slot></legend>
    <slot name=fields>
    </slot>
</fieldset>
</template>

<ul>
<xtal-peat tag=li merge=lightChildren into=shadowDOM list='[]'>
    <template id=lightChildren>
        <span slot="label">{{description}}</span>
        <my-grid slot=fields></my-grid>
        <my-chart slot=fields></my-chart>
    </template>
</xtal-peat>
</ul>
```