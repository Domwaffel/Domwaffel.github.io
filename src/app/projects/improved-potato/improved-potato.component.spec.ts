import {ComponentFixture, TestBed} from "@angular/core/testing";

import {ImprovedPotatoComponent} from "./improved-potato.component";

describe("ImprovedPotatoComponent", () => {
	let component: ImprovedPotatoComponent;
	let fixture: ComponentFixture<ImprovedPotatoComponent>;
	
	beforeEach(async() => {
		await TestBed.configureTestingModule({
			imports: [ImprovedPotatoComponent],
		})
			.compileComponents();
		
		fixture = TestBed.createComponent(ImprovedPotatoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
