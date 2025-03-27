import {
  Component,
  Input,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Renderer2,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoService, Skill } from '../../services/info.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit, OnChanges {
  @Input() skills: Skill[] = [];

  @ViewChildren('skillBox') skillBoxes!: QueryList<ElementRef>;
  @ViewChildren('progressBar') progressBars!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Нічого тут не робимо — бо skills ще можуть не бути передані
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['skills'] && this.skills.length > 0) {
      // Затримка, щоб Angular встиг відрендерити DOM
      setTimeout(() => {
        this.animateProgressBars();
        this.animateSkillBoxVisibility();
      }, 0);
    }
  }

  private animateProgressBars(): void {
    this.progressBars.forEach(barRef => {
      const el = barRef.nativeElement;
      const targetWidth = el.getAttribute('data-progress') || '0%';
      this.renderer.setStyle(el, 'width', '0');
      setTimeout(() => {
        this.renderer.setStyle(el, 'width', targetWidth);
      }, 100);
    });
  }

  private animateSkillBoxVisibility(): void {
    this.skillBoxes.forEach((boxRef, index) => {
      setTimeout(() => {
        this.renderer.addClass(boxRef.nativeElement, 'visible');
      }, index * 200);
    });
  }
}