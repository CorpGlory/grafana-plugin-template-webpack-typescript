import { PanelCtrl } from 'grafana/app/plugins/sdk';

class Ctrl extends PanelCtrl {
    
  static template: string = "<div>Hello from <b>TypeScript Template Plugin</b></div>";
  
  constructor($scope, $injector) {
    super($scope, $injector);
  }

  link(scope, element) {
  }
  
}

export { Ctrl as PanelCtrl }
