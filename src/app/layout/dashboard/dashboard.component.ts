import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'https://www.concettolabs.com/blog/wp-content/uploads/2018/06/imageedit_1_6064425710-1.png',
                label: '',
                text:
                    ''
            },
            {
                imagePath: 'https://cdn-images-1.medium.com/max/1600/1*oOcY2Gn-LVt1h-e9xOv5oA.jpeg',
                label: '',
                text: ''
            },
            {
                imagePath: 'https://firebase.google.com/images/social.png',
                label: '',
                text:
                    ''
            },

            {
                imagePath: 'https://cdn-images-1.medium.com/max/1400/1*6DCP9J24eCy7JGUojnq1WA.png',
                label: '',
                text:
                    ''
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `O PWA com o Angular`
            },
            {
                id: 2,
                type: 'warning',
                message: `O PWA Sem Angular`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
