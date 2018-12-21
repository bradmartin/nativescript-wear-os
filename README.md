# NativeScript WearOS

[![npm](https://img.shields.io/npm/v/nativescript-wear-os.svg)](https://www.npmjs.com/package/nativescript-wear-os)
[![npm](https://img.shields.io/npm/dt/nativescript-wear-os.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-wear-os)

[Guide Doc](https://developer.android.com/training/wearables/ui/lists#creating)

## Example

![Demo Example](./screenshots/wearablerecycler.gif)

## Installation

```bash
tns plugin add nativescript-wear-os
```

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" backgroundColor="black"
  xmlns:wear="nativescript-wear-os/listview">
  <StackLayout>
    <wear:WearOsListView margin="4" height="100%" circularScrollingEnabled="true" items="{{ items }}" backgroundColor="black">
      <wear:WearOsListView.itemTemplate>
        <GridLayout rows="*" columns="auto, *">
          <Image src="{{ image }}" class="image" stretch="aspectFit" row="0" col="0" />
          <Label text="{{ title }}" class="label" row="0" col="1" textWrap="true"/>
        </GridLayout>
      </wear:WearOsListView.itemTemplate>
    </wear:WearOsListView>
  </StackLayout>
</Page>
```
