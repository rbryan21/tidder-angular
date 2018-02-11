import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleOnlyLoadedOnceGuard';

/**
 * This module should provide singleton services and should only be imported once, within app.module.ts
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}
