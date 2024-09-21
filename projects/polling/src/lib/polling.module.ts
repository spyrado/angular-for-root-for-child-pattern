import { ModuleWithProviders, NgModule } from '@angular/core';
import { PollingComponent } from './polling.component';
import { INTERVAL, PollingConfig, PollingService } from './polling.service';

@NgModule({
  declarations: [PollingComponent],
  exports: [PollingComponent],
})
export class PollingModule {

  static forRoot(): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [PollingService]  // Fornecendo o PollingService como singleton
    };
  }

  // Componentes com standalone não funcionam mais com isso, para fazer funcionar neles, vc agora deve fazer dessa forma:
  // providers: [
  //   {
  //     provide: PollingService,
  //     useValue: new PollingService(3000)
  //   }
  // ]
  // e aqui você vai chamar a service diretamente e não mais o forChild
  static forChild(config: PollingConfig): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        { provide: INTERVAL, useValue: config.interval }
      ]
    }
  }
}