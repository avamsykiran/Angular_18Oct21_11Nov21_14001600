import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ang-proj07'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ang-proj07');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#banner').textContent).toContain('ang-proj07');
  });

  it('should change the title once the button is clicked',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); //will get the template rendering updated
    let button1=fixture.nativeElement.querySelector('#btn1');
    button1.click();
    fixture.detectChanges(); //will get the template rendering updated
    expect(fixture.nativeElement.querySelector('#banner').textContent).toContain("Button got clicked");
  });
});
