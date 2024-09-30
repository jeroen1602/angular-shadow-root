# AngularShadowRoot

[Related issue on Angular](https://github.com/angular/angular/issues/57801)

A test project to test shadow dom style bleeding. These styles are added by default to every root on the page. So the document root as well as any shadow root element.

This project is here to test a fix where the styles are only added to the root that a component is being used in. It consists of multiple components.

- [The normal component](src/app/normal) uses the default `emulated` `encapsulation` and thus creates styles that would be added to the correct root.
- [The no encapsulation component](src/app/no-encapsulation) uses the `none` `encapsulation` and also creates styles that should be added to the correct root.
- [The shadow component](src/app/shadow) uses `shadowRoot` `encapsulation` and its style should only be added to its own shadow root. This root should not contain any other styles.
- [The sub shadow component](src/app/sub-shadow) uses `shadowRoot` `encapsulation` but also contains `app-normal` component, and `app-no-encapsulation` component and should thus have the styles needed for these components.
- Lastly there are two [dynamic-component](src/app/dynamic-component), [dynamic-component-shadow](src/app/dynamic-component-shadow) components that dynamically create a new component to test where their style is added. One of them uses `emulated` `encapsulation` and the other uses `shadowRoot`.

# Running

This project uses a local path to angular instead of getting it from NPM. To get this project to work first git clone [Angular](https://github.com/jeroen1602/angular) in the same directory as this project.
Switch to the `shadow-dom-style-bleeding` branch and run `yarn install` followed by `yarn build`.

No go back into this project and run `yarn install` followed by `yarn run start`. 
If you have made changes to `Angular` then you will need to rebuild it using `yarn build` and remove `node_modules` as well as `.angular` using `rm -rf node_modules .angualr`. After that run `yarn install` and `yarn run dev` again.
