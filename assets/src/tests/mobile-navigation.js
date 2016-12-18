import mobileNavigation from '../scripts/mobile-navigation.js';

describe( 'mobileNavigation', () => {
	let menuElement, menuItemElement, menuItemElement2, triggerElement;

	beforeEach( () => {
		triggerElement = document.createElement( 'a' );
		triggerElement.classList.add( 'page-nav-toggle' );

		menuItemElement = document.createElement( 'a' );
		menuItemElement2 = document.createElement( 'a' );

		menuElement = document.createElement( 'div' );
		menuElement.appendChild( menuItemElement );
		menuElement.appendChild( menuItemElement2 );
		menuElement.appendChild( triggerElement );

		document.body.appendChild( menuElement );

		mobileNavigation( menuElement );
	} );

	afterEach( () => {
		document.body.removeChild( menuElement );
	} );

	it( 'should toggle `page-nav-active` class after clicking on `.page-nav-toggle` icon', () => {
		triggerElement.click();

		expect( menuElement.classList.contains( 'page-nav-active' ) ).to.true;

		triggerElement.click();

		expect( menuElement.classList.contains( 'page-nav-active' ) ).to.false;
	} );

	it( 'should remove `menu-active` class after clicking on menu items', () => {
		menuElement.classList.add( 'page-nav-active' );

		menuItemElement.click();

		expect( menuElement.classList.contains( 'menu-active' ) ).to.false;

		menuElement.classList.add( 'page-nav-active' );

		menuItemElement2.click();

		expect( menuElement.classList.contains( 'menu-active' ) ).to.false;
	} );
} );
