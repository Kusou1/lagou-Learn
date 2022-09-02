import { Component } from '@angular/core'

@Component({
    // 指定组件的使用方式, 当前为标记形式
    // app-home   =>  <app-home></app-home>
    // [app-home] =>  <div app-home></div>
    // .app-home  =>  <div class="app-home"></div>
    selector: 'app-root',
    // 关联组件模板文件
    // templateUrl:'组件模板文件路径'
    template: `<div>App Works</div>
        <app-layout></app-layout>`,
    // templateUrl: "./app.component.html",
    // 关联组件样式文件
    // styleUrls : ['组件样式文件路径']
    // styles : [`组件样式`]
    styles: []
})
export class AppComponent {
    title = 'angular-demo'
}