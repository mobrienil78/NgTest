var myapp = angular.module('myapp', [])
  .controller('SomeController', SomeController);

function SomeController () {

      this.message = 'Click a tab';
      this.activeTab = '';

      this.tab1Click = function () {
          if (confirm('really?!')) {
              this.message = 'Tab 1 Clicked';
              this.activeTab = 'tab1';
          }
      };

      this.getTab1CssClasses = function () {
          return this.activeTab === 'tab1' ? 'active' : null;
      };

      this.tab2Click = function () {
          if (confirm('really?!')) {
              this.message = 'Tab 2 Clicked';
              this.activeTab = 'tab2';
          }
      };

      this.getTab2CssClasses = function () {
          return this.activeTab === 'tab2' ? 'active' : null;
      };
  }
