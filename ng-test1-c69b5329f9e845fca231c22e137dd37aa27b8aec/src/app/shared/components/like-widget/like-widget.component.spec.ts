import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent)
  })

  it('Should create component', () =>{
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy()
  })

})
