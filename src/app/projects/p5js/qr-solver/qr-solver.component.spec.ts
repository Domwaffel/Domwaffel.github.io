import {ComponentFixture, TestBed} from "@angular/core/testing";

import {QrSolverComponent} from "./qr-solver.component";

describe("QrSolverComponent", () => {
	let component: QrSolverComponent;
	let fixture: ComponentFixture<QrSolverComponent>;
	
	beforeEach(async() => {
		await TestBed.configureTestingModule({
			imports: [QrSolverComponent],
		})
			.compileComponents();
		
		fixture = TestBed.createComponent(QrSolverComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
