import { Component } from "@angular/core";

@Component({
    selector: 'app-upButton',
    standalone: false,
    templateUrl: './upButton.html',
    styleUrl: './upButton.css'
})
export class UpButton {
    visible = false;
    private scrollTarget: HTMLElement | null = null;

    ngOnInit() {
        this.scrollTarget = document.getElementById('contentBackground');
        if (this.scrollTarget) {
            this.scrollTarget.addEventListener('scroll', this.onScroll);
        }
    }

    ngOnDestroy() {
        if (this.scrollTarget) {
            this.scrollTarget.removeEventListener('scroll', this.onScroll);
        }
    }

    onScroll = () => {
        if (!this.scrollTarget) return;
        this.visible = this.scrollTarget.scrollTop > 50;
    };

    scrollToTop() {
        this.scrollTarget?.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
